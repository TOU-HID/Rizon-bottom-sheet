import React, { JSX } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { OnboardingFlow } from './screens/OnboardingFlow';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <OnboardingFlow />
    </SafeAreaProvider>
  );
}

export default App;
