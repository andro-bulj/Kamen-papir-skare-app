import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import AppImgBtn from "../components/AppImgBtn";

const EndScreen = (props) => {
    
    console.log(props.user)
    console.log(props.app)
    return (
        <View >
            <AppImgBtn odabir={props.user}/>
            <AppImgBtn odabir={props.app}/>
        </View>
    )
}

const stil = StyleSheet.create({
    
})

export default EndScreen