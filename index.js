/**
 * @format
 */

import { AppRegistry, StyleSheet } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const AppWrapper = () => (
  <GestureHandlerRootView style={styles.container}>
    <App />
  </GestureHandlerRootView>
);

AppRegistry.registerComponent(appName, () => AppWrapper);
