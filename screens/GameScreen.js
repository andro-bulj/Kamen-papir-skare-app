import React from "react";
import { Image, View, StyleSheet, TouchableOpacity } from "react-native";
import AppImgBtn from "../components/AppImgBtn";

const GameScreen = () => {
    return (
        <View style={stil.screen}>
            <AppImgBtn>
            <Image style={stil.slikaStyle} source={require("../assets/Kamen.png")}></Image>
            </AppImgBtn>

            <AppImgBtn>
            <Image style={stil.slikaStyle} source={require("../assets/Skare.png")}></Image>
            </AppImgBtn>

            <AppImgBtn>
            <Image style={stil.slikaStyle} source={require("../assets/Papir.png")}></Image>
            </AppImgBtn>
        </View>
    )
}

const stil = StyleSheet.create({
    screen: {
        alignItems: "center",
        flex: 1,
        justifyContent: "space-evenly",
        flexDirection: "column"
        
    },
    slikaStyle: {
        height: 170,
        width: 160,
    }
})

export default GameScreen