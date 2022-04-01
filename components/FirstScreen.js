import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from './CustomButton'

const FirstScreen = ({ navigation, route }) => {
    const { name, id } = route.params;
    const onPressHandler = () => navigation.navigate('Second')

    return (
        <View style={styles.body}>
            <Text style={styles.text}>First Screen</Text>
            <CustomButton pressFunction={onPressHandler} title='Go Second' />
            <Text style={styles.secondaryText}>Name: {name}</Text>
            <Text style={styles.secondaryText}>ID: {id}</Text>
        </View>
    )
}

export default FirstScreen

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
    secondaryText: {
        fontSize: 20,
        margin: 10
    }
})