// src/components/CodeBlock.jsx
import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

export default function CodeBlock({ code, title = 'Exemplo de código' }) {
  if (!code) return null;

  return (
    <View style={styles.container}>
      {title ? <Text style={styles.title}>{title}</Text> : null}
      <Text style={styles.code}>{code}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1b1b1b',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  title: {
    color: '#fff',
    fontWeight: '600',
    marginBottom: 4,
    fontSize: 14,
  },
  code: {
    color: '#c3e88d',
    fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace',
    fontSize: 12,
  },
});
