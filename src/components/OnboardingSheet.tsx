import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button } from './Button';
import rizon from '../assets/logo/rizon.png';
import { theme } from '../utils/theme';

interface OnboardingSheetProps {
  onNotYet: () => void;
  onYesLovingIt: () => void;
}

export const OnboardingSheet: React.FC<OnboardingSheetProps> = ({
  onNotYet,
  onYesLovingIt,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.bar} />
      <Image source={rizon} style={styles.logo} alt={'Rizon Logo'} />

      <View style={styles.UpperBox}>
        <Text style={styles.title}>Enjoying Rizon so far?</Text>
        <Text style={styles.subtitle}>
          Your feedback helps us build a better money experience.
        </Text>
      </View>

      <View style={styles.row}>
        <Button title="Not yet" onPress={onNotYet} />
        <Button title="Yes, loving it" bg={'#000'} onPress={onYesLovingIt} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24,
  },
  bar: {
    width: 56,
    height: 5,
    backgroundColor: '#CFD1DC',
    borderRadius: 100,
    alignSelf: 'center',
  },
  logo: {
    width: 120,
    height: 120,
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
