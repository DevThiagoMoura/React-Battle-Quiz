// src/screens/BattleQuizScreen.jsx
import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  ScrollView,
  View,
  Text,
  Vibration,
  Animated,
  StyleSheet,
} from 'react-native';
import { questions } from '../data/questions';
import OptionButton from '../components/OptionButton';

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function pickRandomFromArray(arr, count) {
  if (!arr || arr.length === 0) return [];
  const shuffled = shuffleArray(arr);
  return shuffled.slice(0, Math.min(count, arr.length));
}

export default function BattleQuizScreen({ route, navigation }) {
  const { mode = 'react', players, topicIds, topicId } = route.params;

  const quizQuestions = useMemo(() => {
    // 1) MODO REACT GERAL → 20 perguntas (5 de cada tópico)
    if (mode === 'react') {
      const allTopicIds = Object.keys(questions); // ['components', 'jsx', 'hooks', 'styles']

      let selected = [];
      allTopicIds.forEach((tid) => {
        const topicQuestions = questions[tid] || [];
        const picked = pickRandomFromArray(topicQuestions, 5); // 5 de cada
        selected = [...selected, ...picked];
      });

      // Em teoria teremos 20 (4 tópicos x 5), mas se um dia um tópico tiver menos,
      // ainda funciona. Depois embaralhamos tudo.
      return shuffleArray(selected);
    }

    // 2) MODO POR TÓPICOS → usa TODAS as perguntas dos tópicos escolhidos
    if (mode === 'topics' && Array.isArray(topicIds) && topicIds.length) {
      const merged = topicIds.flatMap((id) => questions[id] || []);
      return merged;
    }

    // 3) MODO ANTIGO (um tópico só, se vier topicId)
    if (topicId) {
      return questions[topicId] || [];
    }

    return [];
  }, [mode, topicIds, topicId]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0); // 0 ou 1
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [scores, setScores] = useState([0, 0]);
  const [showFeedback, setShowFeedback] = useState(false);

  const shakeAnim = useRef(new Animated.Value(0)).current;

  const currentQuestion = quizQuestions[currentIndex];
  const currentPlayerName = players[currentPlayerIndex];

  useEffect(() => {
    setSelectedIndex(null);
    setShowFeedback(false);
    shakeAnim.setValue(0);
  }, [currentIndex, shakeAnim]);

  function animateError() {
    Animated.sequence([
      Animated.timing(shakeAnim, {
        toValue: 10,
        duration: 80,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnim, {
        toValue: -10,
        duration: 80,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnim, {
        toValue: 0,
        duration: 80,
        useNativeDriver: true,
      }),
    ]).start();
  }

  function handleAnswer(optionIndex) {
    if (showFeedback || !currentQuestion) return;

    setSelectedIndex(optionIndex);
    const isCorrect = optionIndex === currentQuestion.correctIndex;

    if (isCorrect) {
      setScores((prev) => {
        const newScores = [...prev];
        newScores[currentPlayerIndex] = newScores[currentPlayerIndex] + 1;
        return newScores;
      });
    } else {
      Vibration.vibrate(200);
      animateError();
    }

    setShowFeedback(true);
  }

  function handleNext() {
    const isLastQuestion = currentIndex + 1 === quizQuestions.length;

    if (isLastQuestion) {
      navigation.replace('BattleResult', {
        players,
        scores,
        total: quizQuestions.length,
      });
    } else {
      setCurrentIndex((prev) => prev + 1);
      setCurrentPlayerIndex((prev) => (prev === 0 ? 1 : 0));
    }
  }

  const translateX = shakeAnim.interpolate({
    inputRange: [-10, 10],
    outputRange: [-10, 10],
  });

  if (!currentQuestion) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>
          Não há perguntas disponíveis para esta batalha.
        </Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 24 }}
    >
      <View style={styles.header}>
        <View style={styles.playerBox}>
          <Text style={styles.playerName}>{players[0]}</Text>
          <Text style={styles.playerScore}>{scores[0]} pts</Text>
        </View>
        <View style={styles.playerBox}>
          <Text style={styles.playerName}>{players[1]}</Text>
          <Text style={styles.playerScore}>{scores[1]} pts</Text>
        </View>
      </View>

      <Text style={styles.turnText}>Vez de: {currentPlayerName}</Text>

      <Text style={styles.concept}>{currentQuestion.concept}</Text>
      <Text style={styles.theory}>{currentQuestion.theory}</Text>

      <Animated.View style={[styles.card, { transform: [{ translateX }] }]}>
        <Text style={styles.question}>{currentQuestion.question}</Text>

        {currentQuestion.options.map((opt, index) => {
          const isSelected = index === selectedIndex;
          const isCorrect = index === currentQuestion.correctIndex;

          let bg = '#020617';
          if (showFeedback && isCorrect) bg = '#16a34a';
          if (showFeedback && isSelected && !isCorrect) bg = '#b91c1c';

          return (
            <OptionButton
              key={index}
              label={opt}
              onPress={() => handleAnswer(index)}
              backgroundColor={bg}
            />
          );
        })}
      </Animated.View>

      {showFeedback && (
        <View style={styles.nextButton}>
          <Text style={styles.nextText} onPress={handleNext}>
            Próxima
          </Text>
        </View>
      )}

      <Text style={styles.footer}>
        Pergunta {currentIndex + 1} de {quizQuestions.length}
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#020617', padding: 16 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  playerBox: {
    backgroundColor: '#020617',
    borderRadius: 12,
    padding: 8,
    minWidth: '45%',
    borderWidth: 1,
    borderColor: '#1f2937',
  },
  playerName: { color: '#e5e7eb', fontWeight: '600', fontSize: 14 },
  playerScore: { color: '#9ca3af', fontSize: 13 },
  turnText: {
    color: '#facc15',
    fontSize: 14,
    marginBottom: 8,
    fontWeight: '600',
  },
  concept: { color: '#e5e7eb', fontSize: 16, fontWeight: '600', marginBottom: 4 },
  theory: { color: '#9ca3af', fontSize: 14, marginBottom: 12 },
  card: {
    backgroundColor: '#020617',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#1f2937',
  },
  question: {
    color: '#e5e7eb',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  nextButton: {
    backgroundColor: '#4f46e5',
    paddingVertical: 12,
    borderRadius: 999,
  },
  nextText: {
    color: '#e5e7eb',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
  footer: {
    marginTop: 12,
    textAlign: 'center',
    color: '#6b7280',
    fontSize: 13,
  },
  errorText: { color: '#e5e7eb', textAlign: 'center' },
});
