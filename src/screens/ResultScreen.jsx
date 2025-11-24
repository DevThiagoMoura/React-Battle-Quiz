// src/screens/ResultScreen.jsx
import React, { useEffect } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useProgress } from '../context/ProgressContext';

export default function ResultScreen({ route, navigation }) {
  const { score, total, topicId, mode } = route.params;
  const percentage = Math.round((score / total) * 100);

  const { markTopicCompleted } = useProgress();

  useEffect(() => {
    // Só marca como concluído no modo "learn"
    if (mode === 'learn' && topicId && score >= 7) {
      markTopicCompleted(topicId);
    }
  }, [mode, topicId, score, markTopicCompleted]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resultado</Text>
      <Text style={styles.scoreText}>
        Você acertou {score} de {total} perguntas ({percentage}%)
      </Text>

      {mode === 'learn' && topicId && (
        <Text style={styles.infoText}>
          {score >= 7
            ? '✅ Este tópico foi marcado como concluído no seu progresso.'
            : '💡 Com 7 ou mais acertos, o tópico é marcado como concluído.'}
        </Text>
      )}

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('LearnTopics')}
      >
        <Text style={styles.buttonText}>Voltar para os tópicos</Text>
      </Pressable>

      <Pressable
        style={[styles.button, styles.secondaryButton]}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Ir para a tela inicial</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020617',
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    color: '#e5e7eb',
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 16,
  },
  scoreText: {
    color: '#e5e7eb',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 12,
  },
  infoText: {
    color: '#9ca3af',
    fontSize: 13,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4f46e5',
    paddingVertical: 12,
    borderRadius: 999,
    marginBottom: 12,
  },
  secondaryButton: {
    backgroundColor: '#111827',
    borderWidth: 1,
    borderColor: '#374151',
  },
  buttonText: {
    color: '#e5e7eb',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
});
