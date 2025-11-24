// src/screens/LearnTopicsScreen.jsx
import React from 'react';
import {
  View,
  Text,
  Pressable,
  FlatList,
  StyleSheet,
} from 'react-native';
import { topics } from '../data/questions';
import { useProgress } from '../context/ProgressContext';

export default function LearnTopicsScreen({ navigation }) {
  const { completedTopics } = useProgress();

  function handleSelectTopic(topicId) {
    navigation.navigate('LearnIntro', { topicId });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>O que você quer aprender?</Text>
      <Text style={styles.subtitle}>
        Escolha um tema de React Native para ver a explicação e depois responder um quiz.
      </Text>

      <FlatList
        data={topics}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const isCompleted = completedTopics.includes(item.id);
          return (
            <Pressable
              style={styles.topicButton}
              onPress={() => handleSelectTopic(item.id)}
            >
              <View style={styles.topicRow}>
                <Text style={styles.topicTitle}>{item.title}</Text>
                {isCompleted && (
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>✓ Concluído</Text>
                  </View>
                )}
              </View>
            </Pressable>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#020617' },
  title: {
    color: '#e5e7eb',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 8,
  },
  subtitle: {
    color: '#9ca3af',
    fontSize: 14,
    marginBottom: 16,
  },
  topicButton: {
    backgroundColor: '#0f172a',
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#1f2937',
  },
  topicRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topicTitle: {
    color: '#e5e7eb',
    fontSize: 16,
    fontWeight: '600',
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#22c55e',
    backgroundColor: 'rgba(34,197,94,0.12)',
  },
  badgeText: {
    color: '#bbf7d0',
    fontSize: 12,
    fontWeight: '600',
  },
});
