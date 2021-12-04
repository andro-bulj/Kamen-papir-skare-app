import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MainColors from '../constants/MainColors';

const AppTitle = (props) => {

  return (
    <View style={stil.header}>
      <Text style={stil.title}>{props.title}</Text>
    </View>
  );
};

const stil = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: MainColors.dark,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    color: "white",
    fontSize: 20,
    fontFamily: "montserratBold",
  }
})

export default AppTitle;