import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import StartScreen from './screens/StartScreen';
import AppTitle from './components/AppTitle';
import MainColors from './constants/MainColors';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';

const getFont = () => {
  return Font.loadAsync({
    'montserratBold': require('./assets/Montserrat-Bold.ttf'),
    'montserrat': require('./assets/Montserrat-Regular.ttf')
  })
}

export default function App() {
  const [assetsLoaded, setAssetsLoaded] = useState(false)

  if (!assetsLoaded) {
    return (
      <AppLoading
        startAsync={getFont}
        onFinish={() => setAssetsLoaded(true)}
        onError={(err) => console.error(err)}
      />
    )
  }

  let prikaz = <StartScreen/>

  return (
    <View style={styles.container}>
      <AppTitle title={"Kamen Škare Papir"} />
        {prikaz}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: MainColors.grey,
    flex: 1
  },
});
