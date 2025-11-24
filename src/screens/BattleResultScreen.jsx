// src/screens/BattleResultScreen.jsx
import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function BattleResultScreen({ route, navigation }) {
  const { players, scores, total } = route.params;

  let winnerText = 'Empate!';
  if (scores[0] > scores[1]) {
    winnerText = `Vencedor: ${players[0]} 🏆`;
  } else if (scores[1] > scores[0]) {
    winnerText = `Vencedor: ${players[1]} 🏆`;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resultado da Batalha</Text>
      <Text style={styles.winner}>{winnerText}</Text>

      <View style={styles.scoreBox}>
        <Text style={styles.playerLine}>
          {players[0]}: {scores[0]} / {total} acertos
        </Text>
        <Text style={styles.playerLine}>
          {players[1]}: {scores[1]} / {total} acertos
        </Text>
      </View>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('BattleSetup')}
      >
        <Text style={styles.buttonText}>Recomeçar Batalha</Text>
      </Pressable>

      <Pressable
        style={[styles.button, styles.secondaryButton]}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Voltar para o início</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 16, justifyContent: 'center' },
  title: { color: '#fff', fontSize: 22, fontWeight: '700', textAlign: 'center', marginBottom: 12 },
  winner: { color: '#ffeb3b', fontSize: 18, textAlign: 'center', marginBottom: 16 },
  scoreBox: { marginBottom: 24 },
  playerLine: { color: '#ccc', fontSize: 16, textAlign: 'center', marginBottom: 4 },
  button: {
    backgroundColor: '#9c27b0',
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  secondaryButton: {
    backgroundColor: '#424242',
  },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: '600', fontSize: 16 },
});
