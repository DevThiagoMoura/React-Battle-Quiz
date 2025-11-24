// src/screens/QuizScreen.jsx
import React, { useState, useEffect, useRef } from 'react';
import {
  ScrollView,
  Text,
  Vibration,
  Animated,
  StyleSheet,
  View,
} from 'react-native';
import { questions } from '../data/questions';
import CodeBlock from '../components/CodeBlock';
import OptionButton from '../components/OptionButton';

export default function QuizScreen({ route, navigation }) {
  const { topicId, mode } = route.params; // mode: 'learn'
  const quizQuestions = questions[topicId];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);

  const shakeAnim = useRef(new Animated.Value(0)).current;

  const currentQuestion = quizQuestions[currentIndex];

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
    if (showFeedback) return;

    setSelectedIndex(optionIndex);
    const isCorrect = optionIndex === currentQuestion.correctIndex;

    if (isCorrect) {
      setScore((prev) => prev + 1);
    } else {
      Vibration.vibrate(200);
      animateError();
    }

    setShowFeedback(true);
  }

  function handleNext() {
    const isLastQuestion = currentIndex + 1 === quizQuestions.length;

    if (isLastQuestion) {
      navigation.replace('Result', {
        score,
        total: quizQuestions.length,
        topicId,
        mode,
      });
    } else {
      setCurrentIndex((prev) => prev + 1);
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
          Não há perguntas cadastradas para este tópico.
        </Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 24 }}
    >
      <Text style={styles.concept}>{currentQuestion.concept}</Text>
      <Text style={styles.theory}>{currentQuestion.theory}</Text>

      <CodeBlock code={currentQuestion.codeExample} />

      <Animated.View style={[styles.card, { transform: [{ translateX }] }]}>
        <Text style={styles.question}>{currentQuestion.question}</Text>

        {currentQuestion.options.map((opt, index) => {
          const isSelected = index === selectedIndex;
          const isCorrect = index === currentQuestion.correctIndex;

          let bg = '#1f1f1f';
          if (showFeedback && isCorrect) bg = '#2e7d32';
          if (showFeedback && isSelected && !isCorrect) bg = '#c62828';

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
        Pergunta {currentIndex + 1} de {quizQuestions.length} • Pontos: {score}
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 16,
  },
  concept: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  theory: {
    color: '#ccc',
    fontSize: 14,
    marginBottom: 12,
  },
  card: {
    backgroundColor: '#1b1b1b',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  question: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  nextButton: {
    backgroundColor: '#1976d2',
    paddingVertical: 12,
    borderRadius: 8,
  },
  nextText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
  footer: {
    marginTop: 12,
    textAlign: 'center',
    color: '#aaa',
    fontSize: 13,
  },
  errorText: {
    color: '#fff',
    textAlign: 'center',
  },
});
