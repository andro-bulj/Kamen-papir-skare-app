import React from 'react'
import { View,TouchableOpacity } from 'react-native'

const AppImgBtn = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View>
                {props.children}
            </View>
        </TouchableOpacity>
    )
}

export default AppImgBtn;