import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { AirPlayButton } from 'react-native-airplay-cast';

export default function App() {
  return (
    <View style={styles.container}>
      <AirPlayButton
        activeTintColor="blue"
        tintColor="black"
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
    width: 30,
    height: 30,
  },
});
