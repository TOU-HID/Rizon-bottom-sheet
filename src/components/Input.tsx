import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
};

export const Input = ({ value, onChangeText, placeholder }: Props) => {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor="#999"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#E1E3EB',
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
    height: 64,
  },
});
