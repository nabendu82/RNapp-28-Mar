import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'

const CustomButton = (props) => {
    return (
        <Pressable
            onPress={props.pressFunction}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            style={styles.buttonStyle}
        >
            <Text style={styles.buttonText}>{props.title}</Text>
        </Pressable>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    buttonStyle: {
        width: 120,
        height: 50,
        backgroundColor: 'darkmagenta',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
    },
})