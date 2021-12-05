import React, { useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import AppButton from "../components/AppButton";
import AppImgBtn from "../components/AppImgBtn";
import AppText from "../components/AppText";

const EndScreen = (props) => {
    let rezultat = ""
    const userOdabir = props.user
    const appOdabir = props.app

    if (userOdabir === appOdabir) {
        rezultat = "Neodluceno"
    }
    else if (userOdabir === "Kamen" && appOdabir === "Skare" || userOdabir === "Skare" && appOdabir === "Papir" || userOdabir === "Papir" && appOdabir === "Kamen") {
        rezultat = "Pobjeda"
    }
    else {
        rezultat = "Poraz"
    }

    useEffect(() => {
        props.setstatistika(rezultat)
    }, [rezultat])

    return (
        <View>
            <View style={stil.screen}>
                <View style={stil.natpis}>
                    <Text style={stil.tekst}>Vaš odabir</Text>
                    <AppImgBtn odabir={props.user} />
                </View>
                <View style={stil.natpis}>
                    <Text style={stil.tekst}>Odabir aplikacije</Text>
                    <AppImgBtn odabir={props.app} />
                </View>
            </View>
            <View>
                <Text style={stil.tekst}>Rezultat runde: <AppText>{rezultat}</AppText></Text>
                <View style={stil.stats}>
                    <Text style={stil.statistika}>Statistika odigranih rundi:</Text>
                    <Text style={stil.statistika}>
                        Pobjeda: <AppText>{props.pobjede}</AppText> 
                        Poraza: <AppText>{props.porazi}</AppText>  
                        Neodlučeno: <AppText>{props.neodluceni}</AppText></Text>
                </View>
                <View style={stil.button}>
                    <AppButton onPress={props.playagain}>Igraj opet</AppButton>
                </View>
            </View>
        </View>
    )
}

const stil = StyleSheet.create({
    tekst: {
        color: "white",
        fontFamily: "montserrat",
        fontSize: 16,
        width: "100%",
        height: 20,
        textAlign: "center",
        marginTop: 20
    },
    screen: {
        justifyContent: "space-evenly",
        flexDirection: "row",
    },
    natpis: {
        alignItems: "center",
    },
    statistika: {
        color: "white",
        fontFamily: "montserrat",
        fontSize: 16,
        textAlign: "center",
    },
    button: {
        marginTop: 30
    },
    stats:{
        marginTop: 30
    }
})

export default EndScreen