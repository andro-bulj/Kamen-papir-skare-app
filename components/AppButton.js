import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import MainColors from '../constants/MainColors'

const AppButton = (props) => {
  return(
    <TouchableOpacity onPress={props.onPress} style={stil.touch}>
      <View style={stil.tipka}>
        <Text style={stil.tekst}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  )
}

const stil = StyleSheet.create({
  touch:{
    alignItems: 'center',
  },
  tekst:{
    fontFamily: "montserratBold",
  },
  tipka:{
    backgroundColor: MainColors.brightblue,
    padding: 10,
    width: 90,
    alignItems: "center",
  },
})

export default AppButton;