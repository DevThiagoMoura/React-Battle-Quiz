// src/screens/BattleSetupScreen.jsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  FlatList,
  StyleSheet,
} from 'react-native';
import { topics } from '../data/questions';
import { useProgress } from '../context/ProgressContext';

export default function BattleSetupScreen({ navigation }) {
  const [player1, setPlayer1] = useState('Jogador 1');
  const [player2, setPlayer2] = useState('Jogador 2');
  const [battleMode, setBattleMode] = useState('react'); // 'react' | 'topics'
  const [selectedTopicIds, setSelectedTopicIds] = useState([]);

  const { completedTopics } = useProgress();

  function toggleTopic(topicId) {
    setSelectedTopicIds((prev) => {
      const already = prev.includes(topicId);
      if (already) {
        // desmarca
        return prev.filter((id) => id !== topicId);
      }
      // se ainda não tem e já tem 3 selecionados, não deixa chegar em 4
      if (prev.length >= 3) {
        return prev;
      }
      return [...prev, topicId];
    });
  }

  function handleStartBattle() {
    const players = [player1 || 'Jogador 1', player2 || 'Jogador 2'];

    if (battleMode === 'react') {
      navigation.navigate('BattleQuiz', {
        mode: 'react',
        players,
      });
      return;
    }

    // battleMode === 'topics'
    if (selectedTopicIds.length === 0) return;

    navigation.navigate('BattleQuiz', {
      mode: 'topics',
      players,
      topicIds: selectedTopicIds,
    });
  }

  const canStart =
    battleMode === 'react' ||
    (battleMode === 'topics' &&
      selectedTopicIds.length >= 1 &&
      selectedTopicIds.length <= 3);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modo Batalha</Text>
      <Text style={styles.subtitle}>
        Dois jogadores se revezam respondendo perguntas sobre React Native.
      </Text>

      <Text style={styles.sectionTitle}>Nomes dos jogadores</Text>
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          value={player1}
          onChangeText={setPlayer1}
          placeholder="Jogador 1"
          placeholderTextColor="#6b7280"
        />
        <TextInput
          style={styles.input}
          value={player2}
          onChangeText={setPlayer2}
          placeholder="Jogador 2"
          placeholderTextColor="#6b7280"
        />
      </View>

      <Text style={styles.sectionTitle}>Tipo de batalha</Text>
      <View style={styles.modeRow}>
        <Pressable
          style={[
            styles.modeButton,
            battleMode === 'react' && styles.modeButtonActive,
          ]}
          onPress={() => setBattleMode('react')}
        >
          <Text
            style={[
              styles.modeText,
              battleMode === 'react' && styles.modeTextActive,
            ]}
          >
            React (geral)
          </Text>
          <Text style={styles.modeHint}>
            Perguntas de todos os tópicos misturadas.
          </Text>
        </Pressable>

        <Pressable
          style={[
            styles.modeButton,
            battleMode === 'topics' && styles.modeButtonActive,
          ]}
          onPress={() => setBattleMode('topics')}
        >
          <Text
            style={[
              styles.modeText,
              battleMode === 'topics' && styles.modeTextActive,
            ]}
          >
            Por tópicos
          </Text>
          <Text style={styles.modeHint}>
            Escolha de 1 até 3 tópicos para a batalha.
          </Text>
        </Pressable>
      </View>

      {battleMode === 'topics' && (
        <>
          <Text style={styles.sectionTitle}>
            Selecione até 3 tópicos (4 → use o modo React)
          </Text>

          <FlatList
            data={topics}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              const isSelected = selectedTopicIds.includes(item.id);
              const isCompleted = completedTopics.includes(item.id);

              return (
                <Pressable
                  style={[
                    styles.topicButton,
                    isSelected && styles.topicButtonSelected,
                  ]}
                  onPress={() => toggleTopic(item.id)}
                >
                  <View style={styles.topicRow}>
                    <Text style={styles.topicText}>{item.title}</Text>
                    <View style={styles.topicRight}>
                      {isCompleted && (
                        <View style={styles.badge}>
                          <Text style={styles.badgeText}>✓ Aprendido</Text>
                        </View>
                      )}
                      <View
                        style={[
                          styles.checkbox,
                          isSelected && styles.checkboxSelected,
                        ]}
                      />
                    </View>
                  </View>
                </Pressable>
              );
            }}
          />
        </>
      )}

      {battleMode === 'react' && (
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            No modo React geral, a batalha usa perguntas de todos os tópicos
            (componentes, JSX, hooks e estilos) misturadas.
          </Text>
        </View>
      )}

      <Pressable
        style={[styles.startButton, !canStart && { opacity: 0.4 }]}
        onPress={handleStartBattle}
        disabled={!canStart}
      >
        <Text style={styles.startText}>Começar Batalha</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#020617', padding: 16 },
  title: {
    color: '#e5e7eb',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 4,
  },
  subtitle: { color: '#9ca3af', fontSize: 13, marginBottom: 16 },
  sectionTitle: {
    color: '#e5e7eb',
    fontSize: 15,
    fontWeight: '600',
    marginTop: 8,
    marginBottom: 6,
  },
  row: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 8,
  },
  input: {
    flex: 1,
    backgroundColor: '#020617',
    borderWidth: 1,
    borderColor: '#1f2937',
    color: '#e5e7eb',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 999,
    fontSize: 13,
  },
  modeRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 10,
  },
  modeButton: {
    flex: 1,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#1f2937',
    backgroundColor: '#020617',
    padding: 10,
  },
  modeButtonActive: {
    borderColor: '#4f46e5',
    backgroundColor: '#111827',
  },
  modeText: {
    color: '#9ca3af',
    fontWeight: '600',
    fontSize: 14,
    marginBottom: 2,
  },
  modeTextActive: {
    color: '#e5e7eb',
  },
  modeHint: {
    color: '#6b7280',
    fontSize: 11,
  },
  topicButton: {
    backgroundColor: '#020617',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#1f2937',
    padding: 12,
    marginBottom: 8,
  },
  topicButtonSelected: {
    borderColor: '#4f46e5',
    backgroundColor: '#020617',
  },
  topicRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topicText: { color: '#e5e7eb', fontSize: 14, fontWeight: '500' },
  topicRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#22c55e',
    backgroundColor: 'rgba(34,197,94,0.1)',
  },
  badgeText: {
    color: '#bbf7d0',
    fontSize: 11,
    fontWeight: '600',
  },
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#4b5563',
    backgroundColor: 'transparent',
  },
  checkboxSelected: {
    borderColor: '#4f46e5',
    backgroundColor: '#4f46e5',
  },
  infoBox: {
    backgroundColor: '#020617',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#1f2937',
    padding: 12,
    marginVertical: 8,
  },
  infoText: {
    color: '#9ca3af',
    fontSize: 13,
  },
  startButton: {
    backgroundColor: '#4f46e5',
    paddingVertical: 14,
    borderRadius: 999,
    marginTop: 12,
  },
  startText: {
    color: '#e5e7eb',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
});
