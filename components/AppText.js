import React from 'react'
import { Text, StyleSheet } from 'react-native'
import MainColors from '../constants/MainColors'

const AppText = (props) => {
  return (
    <Text style={stil.tekst}>{props.children} </Text>
  )
}

const stil = StyleSheet.create({
  tekst: {
    fontFamily: 'montserrat',
    color: MainColors.darkblue
  }
})

export default AppText;