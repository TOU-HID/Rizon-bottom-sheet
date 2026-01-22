import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { CustomBottomSheet } from '../components/CustomBottomSheet';
import { OnboardingSheet } from '../components/OnboardingSheet';
import { FeedbackSheet } from '../components/FeedbackSheet';
import { theme } from '../utils/theme';
import { ReviewSheet } from '../components/ReviewSheet';

export const OnboardingFlow = () => {
  // Simulate backend state
  const [justOnboarded, setJustOnboarded] = useState(false);

  // Sheet visibility
  const [showSheet1, setShowSheet1] = useState(false);
  const [showSheet2, setShowSheet2] = useState(false);
  const [showSheet3, setShowSheet3] = useState(false);

  // Review sending
  const [sending, setSending] = useState(false);

  // 1. Simulate backend onboarding finished
  useEffect(() => {
    setTimeout(() => {
      setJustOnboarded(true);
    }, 1000);
  }, []);

  // Show first sheet when onboarding finishes
  useEffect(() => {
    if (justOnboarded) {
      setShowSheet1(true);
      setShowSheet2(false);
      setShowSheet3(false);
    }
  }, [justOnboarded]);

  // Handlers

  const handleNotYet = () => {
    setShowSheet1(false);
    setShowSheet2(true);
  };

  const handleYesLovingIt = () => {
    setShowSheet1(false);

    // Simulate: after 2–3 days backend triggers this
    setTimeout(() => {
      setShowSheet3(true);
    }, 500);
  };

  const sendFeedback = (feedback: string) => {
    if (!feedback.trim()) return;

    try {
      console.log('send');
      Alert.alert('Feedback sent', 'Thank you for your feedback!');
      setShowSheet2(false);
    } catch (e) {
      console.log('Failed to send feedback', e);
    } finally {
      setSending(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Main App Screen</Text>

      {/* -------- Sheet 1 -------- */}
      <CustomBottomSheet
        visible={showSheet1}
        onClose={() => setShowSheet1(false)}
      >
        <OnboardingSheet
          onNotYet={handleNotYet}
          onYesLovingIt={handleYesLovingIt}
        />
      </CustomBottomSheet>

      {/* -------- Sheet 2 (Feedback) -------- */}
      <CustomBottomSheet
        visible={showSheet2}
        onClose={() => setShowSheet2(false)}
      >
        <FeedbackSheet sendFeedback={sendFeedback} sending={sending} />
      </CustomBottomSheet>

      {/* -------- Sheet 3 (Review) -------- */}
      <CustomBottomSheet
        visible={showSheet3}
        onClose={() => setShowSheet3(false)}
      >
        <ReviewSheet />
      </CustomBottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    fontSize: 20,
    fontFamily: theme.fonts.bold,
  },
});
