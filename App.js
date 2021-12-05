import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import StartScreen from './screens/StartScreen';
import AppTitle from './components/AppTitle';
import MainColors from './constants/MainColors';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';
import GameScreen from './screens/GameScreen';
import EndScreen from './screens/EndScreen';

const getFont = () => {
  return Font.loadAsync({
    'montserratBold': require('./assets/Montserrat-Bold.ttf'),
    'montserrat': require('./assets/Montserrat-Regular.ttf')
  })
}

export default function App() {
  const [assetsLoaded, setAssetsLoaded] = useState(false)
  const [startGame, setStartGame] = useState(false)
  const [isSelected, setIsSelected] = useState(false)
  const [appOdabir, setAppOdabir] = useState(null)
  const [userOdabir, setUserOdabir] = useState(null)
  const odabiri = ["Kamen","Skare","Papir"]

  if (!assetsLoaded) {
    return (
      <AppLoading
        startAsync={getFont}
        onFinish={() => setAssetsLoaded(true)}
        onError={(err) => console.error(err)}
      />
    )
  }

  const loadGame = () =>{
    setStartGame(true)
  }

  const postaviOdabir = (odabir) =>{
    setUserOdabir(odabir)
    const appRandSelect = Math.floor(Math.random() * 3)
    setAppOdabir(odabiri[appRandSelect])
    setIsSelected(true)
  }

  let prikaz = <StartScreen loadgame={loadGame}/>
  if (startGame && !isSelected){
    prikaz = <GameScreen userOdabir={postaviOdabir}/>
  }
  else if (startGame && isSelected){
    prikaz = <EndScreen app={appOdabir} user={userOdabir}/>
  }


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
