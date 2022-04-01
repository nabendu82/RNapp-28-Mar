import { StyleSheet, Text, Pressable, Modal, Image } from 'react-native'
import React, { useState } from 'react'

const ModalComp = () => {
    const [modalVisible, setModalVisible] = useState(false)

    return (
        <>
            <Modal animationType="slide" transparent={true} visible={modalVisible}>
                <Image 
                    source={require('../assets/unsplash.jpg')}
                    style={styles.image}
                />
                <Text style={styles.text}>
                    React Native combines the best parts of native development with React.
                </Text>
                <Text style={styles.closeText} onPress={() => setModalVisible(!modalVisible)}>Close</Text>
            </Modal>
            <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
                <Text style={styles.buttonText}>About React Native</Text>
            </Pressable>
        </>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 60,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        backgroundColor: 'darkmagenta',
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    image: {
        marginTop: 150,
        marginBottom: 10,
        width: '100%',
        height: 350
    },
    text: {
        fontSize: 24,
        marginBottom: 10,
        width: '100%',
        padding: 40
    },
    closeText: {
        fontSize: 24,
        color: 'darkmagenta',
        textAlign: 'center',
    }
})

export default ModalComp