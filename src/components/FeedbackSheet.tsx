import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from './Button';
import { Input } from './Input';
import { theme } from '../utils/theme';

interface FeedbackSheetProps {
  sendFeedback: (string) => void;
  sending: boolean;
}

export const FeedbackSheet: React.FC<FeedbackSheetProps> = ({
  sendFeedback,
  sending,
}) => {
  const [feedback, setFeedback] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.bar} />
      <View style={styles.UpperBox}>
        <Text style={styles.title}>Help us improve Rizon</Text>
        <Text style={styles.subtitle}>
          Tell us what didn’t feel right, we read every message.
        </Text>
      </View>

      <Input
        value={feedback}
        onChangeText={setFeedback}
        placeholder="Type your feedback here..."
      />

      <Button
        title={sending ? 'Sending...' : 'Send feedback'}
        bg={'#000'}
        onPress={()=>{
          setFeedback('');
          sendFeedback(feedback);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 24,
  },
  bar: {
    width: 56,
    height: 5,
    backgroundColor: '#CFD1DC',
    borderRadius: 100,
    alignSelf: 'center',
  },
  UpperBox: {
    gap: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: 'semibold',
    fontFamily: theme.fonts.bold,
    textAlign: 'center',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: '#868AA5',
    textAlign: 'center',
    fontFamily: theme.fonts.regular,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
});
