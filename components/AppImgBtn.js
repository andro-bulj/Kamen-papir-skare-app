import React from 'react'
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native'

const AppImgBtn = (props) => {

    if (props.odabir === "Skare") {
        return (
            <TouchableOpacity onPress={props.onPress}>
                <View>
                    <Image style={stil.slikaStyle} source={require("../assets/Skare.png")}></Image>
                </View>
            </TouchableOpacity>
        )
    }
    else if (props.odabir === "Papir") {
        return (
            <TouchableOpacity onPress={props.onPress}>
                <View>
                    <Image style={stil.slikaStyle} source={require("../assets/Papir.png")}></Image>
                </View>
            </TouchableOpacity>
        )
    }
    else {
        return (
            <TouchableOpacity onPress={props.onPress}>
                <View>
                    <Image style={stil.slikaStyle} source={require("../assets/Kamen.png")}></Image>
                </View>
            </TouchableOpacity>
        )
    }
}

const stil = StyleSheet.create({
    slikaStyle: {
        height: 170,
        width: 160,
    }
})

export default AppImgBtn;