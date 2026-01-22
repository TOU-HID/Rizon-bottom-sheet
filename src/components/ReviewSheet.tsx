import React from 'react';
import { View, Text, StyleSheet, Platform, Linking, Image } from 'react-native';
import { Button } from './Button';
import { theme } from '../utils/theme';
import review from '../assets/logo/review.png';

export const ReviewSheet: React.FC = () => {
  const handleLeaveReview = () => {
    const storeUrl = Platform.select({
      ios: 'https://apps.apple.com/app',
      android: 'https://play.google.com/store/apps',
    });

    if (storeUrl) {
      Linking.openURL(storeUrl).catch(err =>
        console.error('Failed to open store:', err),
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.bar} />
      <Image source={review} style={styles.logo} alt={'review'} />

      <View style={styles.UpperBox}>
        <Text style={styles.title}>Got a minute to help us grow?</Text>
        <Text style={styles.subtitle}>
          It takes less than a minute and helps us a lot.
        </Text>
      </View>

      <Button title="Leave a review" bg={'#000'} onPress={handleLeaveReview} />
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
    // marginBottom: 8,
  },
  UpperBox: {
    gap: 5,
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: 'center',
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
});
