import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import AirPlayButton from 'react-native-airplay-button';

const systemRed = 'rgb(255, 59, 48)';

export default function App() {
  return (
    <View style={styles.container}>
      <AirPlayButton
        activeTintColor="blue"
        tintColor={systemRed}
        style={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 100,
    height: 100,
  },
});
