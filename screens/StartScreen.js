import React from "react";
import { Text, View, StyleSheet, Button} from "react-native";
import AppButton from "../components/AppButton";
import MainColors from "../constants/MainColors";

const StartScreen = (props) => {

    return (
        <View>
            <Text style={stil.upute} >{"Upute: "}</Text>
            <Text style={stil.uputeText} >
                {
                    "Odaberite jedan od tri oblika: kamen,škare ili papir"
                    + "\n\nKamen pobjeđuje škare"
                    + "\n\nŠkare pobjeđuju papir"
                    + "\n\nPapir pobjeđuje kamen"
                    + "\n\nU slučaju da aplikacija odabere isti znak ostaje neriješeno"
                }
            </Text>
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
        fontSize: 20,
    },
    uputeText: {
        color: "white",
        fontFamily: "montserrat",
        paddingLeft: 40,
        paddingRight: 10,
        fontSize: 16,
    },
    button:{
        marginTop: 30
    }
    
})

export default StartScreen