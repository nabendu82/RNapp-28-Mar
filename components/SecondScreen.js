import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from './CustomButton'

const SecondScreen = ({ navigation }) => {
    const onPressHandler = () => navigation.goBack()

    return (
        <View style={styles.body}>
            <Text style={styles.text}>Second Screen</Text>
            <CustomButton pressFunction={onPressHandler} title='Go First' />
        </View>
    )
}

const styles = StyleSheet.create({
    body: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    text: {
        fontSize: 40,
        color: 'black',
        padding: 10
    },
})

export default SecondScreen