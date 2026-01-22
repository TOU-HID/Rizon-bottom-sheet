import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type Props = {
  title: string;
  onPress: () => void;
  bg?: string;
};

export const Button = ({ title, onPress, bg }: Props) => {
  const backgroundColor = bg ?? '#fff';
  const textColor = bg ? '#fff' : '#000';

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#E1E3EB',
    borderRadius: 24,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 16,
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
  },
});
