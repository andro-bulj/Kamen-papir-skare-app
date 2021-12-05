import React, { useState, useEffect } from "react";
import { Image, View, StyleSheet, TouchableOpacity } from "react-native";
import AppImgBtn from "../components/AppImgBtn";

const GameScreen = (props) => {
    const [userOdabir, setUserOdabir] = useState(null)

    useEffect(() => {
        if (userOdabir) {
            props.userOdabir(userOdabir)
            console.log("effect")
        }
    }, [userOdabir])

    return (
        <View style={stil.screen}>
            <AppImgBtn onPress={() => setUserOdabir("Kamen")} odabir="Kamen" />

            <AppImgBtn onPress={() => setUserOdabir("Skare")} odabir="Skare" />

            <AppImgBtn onPress={() => setUserOdabir("Papir")} odabir="Papir" />
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

})

export default GameScreen