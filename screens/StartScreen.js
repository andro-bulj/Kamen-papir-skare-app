import React from "react";
import { Text, View, StyleSheet } from "react-native";
import AppButton from "../components/AppButton";
import MainColors from "../constants/MainColors";

const StartScreen = (props) => {

    return (
        <View>
            <Text style={stil.upute} >{"Upute: "}</Text>
            <View style={stil.uputeTxt}>
                <Text style={stil.uputeText} >
                    {
                        "Odaberite jedan od tri oblika: kamen,škare ili papir"
                        + "\n\nKamen pobjeđuje škare"
                        + "\n\nŠkare pobjeđuju papir"
                        + "\n\nPapir pobjeđuje kamen"
                        + "\n\nU slučaju da aplikacija odabere isti znak ostaje neodlučeno"
                    }
                </Text>
            </View>
            <View style={stil.button}>
                <AppButton buttonStyle={stil.tipka} onPress={props.loadgame}>{"Igraj"}</AppButton>
            </View>
        </View>
    )
}

const stil = StyleSheet.create({
    upute: {
        color: "white",
        fontFamily: "montserrat",
        padding: 20,
        fontSize: 22,
        textDecorationLine: "underline",
    },
    uputeText: {
        color: "white",
        fontFamily: "montserrat",
        fontSize: 15,
    },
    button: {
        marginTop: 30,
    },
    uputeTxt: {
        borderWidth: 4,
        padding: 10,
        marginHorizontal: 10,
        borderRadius: 20,
        borderColor: MainColors.darkblue
    }

})

export default StartScreen