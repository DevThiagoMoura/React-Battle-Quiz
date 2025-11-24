// src/screens/LearnIntroScreen.jsx
import React from 'react';
import { ScrollView, Text, Pressable, StyleSheet } from 'react-native';
import { topics, questions } from '../data/questions';
import CodeBlock from '../components/CodeBlock';

export default function LearnIntroScreen({ route, navigation }) {
  const { topicId } = route.params;
  const topic = topics.find((t) => t.id === topicId);
  const topicQuestions = questions[topicId];

  const firstTheory = topicQuestions[0]?.theory ?? '';
  const firstCodeExample = topicQuestions[0]?.codeExample ?? '';

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 24 }}
    >
      <Text style={styles.topicTitle}>{topic.title}</Text>
      <Text style={styles.introText}>
        Aqui você vai ver uma explicação introdutória sobre {topic.title} em
        React Native e, em seguida, responder um quiz para fixar o conteúdo.
      </Text>

      <Text style={styles.sectionTitle}>Introdução teórica</Text>
      <Text style={styles.theoryText}>{firstTheory}</Text>

      <CodeBlock code={firstCodeExample} />

      <Pressable
        style={styles.button}
        onPress={() =>
          navigation.navigate('Quiz', {
            topicId,
            mode: 'learn',
          })
        }
      >
        <Text style={styles.buttonText}>Começar Quiz</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 16 },
  topicTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 12,
  },
  introText: {
    color: '#ccc',
    fontSize: 14,
    marginBottom: 16,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    marginTop: 8,
  },
  theoryText: {
    color: '#ddd',
    fontSize: 14,
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#1976d2',
    paddingVertical: 14,
    borderRadius: 8,
    marginTop: 12,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
});
