import React from "react";
import { Text, View, StyleSheet } from "react-native";

const StartScreen = () => {
    return (
        <View>
            <Text style={stil.upute} >{"Upute: "}</Text>
            <Text style={stil.uputeText} >
                {
                "Odaberite kamen ( ROCK ), škare ( SCISSORS ) ili papir ( PAPER )"
                + "\n\nKamen dobija škare"
                + "\n\nŠkare dobivaju papir"
                + "\n\nPapir dobija kamen"
                }
            </Text>
        </View>

    )
}

const stil = StyleSheet.create({
    upute: {
        color: "white",
        fontFamily: "montserrat",
        padding: 20,
        fontSize: 20,
    },
    uputeText: {
        color: "white",
        fontFamily: "montserrat",
        paddingLeft: 40,
        fontSize: 16,
    }
})

export default StartScreen