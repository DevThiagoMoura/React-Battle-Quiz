// src/components/OptionButton.jsx
import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

export default function OptionButton({
  label,
  onPress,
  backgroundColor = '#1f1f1f',
}) {
  return (
    <Pressable style={[styles.option, { backgroundColor }]} onPress={onPress}>
      <Text style={styles.optionText}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  option: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginBottom: 8,
  },
  optionText: {
    color: '#fff',
    fontSize: 14,
  },
});
