import { StyleSheet, TextInput, View, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import CustomButton from './CustomButton'
import SQLite from 'react-native-sqlite-storage'
import { useDispatch, useSelector } from 'react-redux'
import { setEmail, setName } from '../redux/actions'

const db = SQLite.openDatabase(
    { name: 'MainDB', location: 'default' },
    () => {},
    error => { console.log('Error: ', error) })

const LoginComponent = ({ navigation }) => {
    const { name, email } = useSelector(state => state.userReducer)
    const dispatch = useDispatch()
    
    useEffect(() => {
        createTable();
    }, [])

    const createTable = () => {
        db.transaction(tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS Users (id INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Email TEXT);',
            )
        })
    }

    const setData = async () => {
        if(name.length == 0 || email.length == 0){
            Alert.alert('Error', 'Please fill all the fields')
        } else {
            try {
                dispatch(setName(name))
                dispatch(setEmail(email))
                await db.transaction(async (tx) => {
                    await tx.executeSql("INSERT INTO Users (Name, Email) VALUES (?,?)", [name, email]);
                })
                navigation.navigate('Home');
            } catch (error) {
                console.log(error)
            }
        }
    }

    return (
        <View style={styles.body}>
            <TextInput style={styles.input} placeholder='Enter Name' onChangeText={value => dispatch(setName(value))}/>
            <TextInput style={styles.input} placeholder='Enter Email' onChangeText={value => dispatch(setEmail(value))}/>
            <CustomButton pressFunction={setData} title='Login' />
        </View>
    )
}

const styles = StyleSheet.create({
    body: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightyellow' },
    input: {
        width: 300,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 10,
        backgroundColor: '#fff',
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 10,
        padding: 10
    }
})

export default LoginComponent