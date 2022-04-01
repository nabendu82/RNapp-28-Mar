import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Pressable, View, Text, SafeAreaView, TextInput, Image, ImageBackground } from 'react-native'
import React, { useState, useEffect} from 'react'
import ModalComp from './components/ModalComp'
import CustomButton from './components/CustomButton'
import FirstScreen from './components/FirstScreen';
import SecondScreen from './components/SecondScreen';
import LoginComponent from './components/LoginComponent';
import HomeComponent from './components/HomeComponent';
import { Provider } from 'react-redux';
import { Store } from './redux/store';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// const Drawer = createDrawerNavigator();
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

const App = () => {
  // const [items, setItems] = useState([
  //   { id: 1, text: 'Learn React Native' },
  //   { id: 2, text: 'Learn PostgreSQL' },
  //   { id: 3, text: 'Learn GraphQL' },
  //   { id: 4, text: 'Learn Node.js' },
  //   { id: 5, text: 'Learn Express.js' },
  //   { id: 6, text: 'Learn MongoDB' },
  //   { id: 7, text: 'Learn GraphQL' },
  //   { id: 8, text: 'Learn Rust' },
  //   { id: 9, text: 'Learn Swift' },
  //   { id: 10, text: 'Learn Kotlin' }
  // ])

  // const [refresh, setRefresh] = useState(false)

  // const onRefresh = () => {
  //   setRefresh(true)
  //   setItems([...items, { id: items.length + 1, text: `Learn Tech ${items.length}` }])
  //   setRefresh(false)
  // }

  // const DATA = [
  //   { title: 'Learn React Native', data: ['Item 1', 'Item 2', 'Item 3'] },
  //   { title: 'Learn PostgreSQL', data: ['Item 1', 'Item 2', 'Item 3'] },
  //   { title: 'Learn GraphQL', data: ['Item 1'] },
  //   { title: 'Learn Node.js', data: ['Item 1', 'Item 2'] },
  // ]

  // const languages = [
  //   { name: 'Pascal', key: 1 },
  //   { name: 'C', key: 2 },
  //   { name: 'C++', key: 3 },
  //   { name: 'Java', key: 4 },
  //   { name: 'JavaScript', key: 5 },
  //   { name: 'Python', key: 6 },
  //   { name: 'Rust', key: 7 },
  //   { name: 'Swift', key: 8 },
  // ]

  // const [data, setData] = useState(null)

  // const [name, setName] = useState('')
  // const [submitted, setSubmitted] = useState(false)
  // const onPressHandler = () => setSubmitted(!submitted)
  // useEffect(() => {
  //   const getData = async () => {
  //     const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  //     const json = await response.json()
  //     setData(json)
  //   }
  //   getData()
  // }, [])

  return (
    // <SafeAreaView style={{ flex: 1 }}>
    //   <ImageBackground style={styles.container} source={{ uri: 'https://i.pinimg.com/originals/45/ce/29/45ce2986d79fc7cd05014bd522a88834.jpg' }}>
    //   <Text style={styles.text}>Enter Name:</Text>
    //   <TextInput
    //     style={styles.inputBox}
    //     placeholder="Enter your four digit OTP"
    //     onChangeText={text => setName(text)}
    //     keyboardType="numeric"
    //     maxLength={4}
    //     secureTextEntry={true}
    //   />
    //   <Button
    //     title={submitted ? 'Clear' : 'Submit'}
    //     onPress={() => setSubmitted(!submitted)}
    //     color='darkblue'
    //   />
    //   <TouchableWithoutFeedback onPress={() => setSubmitted(!submitted)}>
    //     <View style={styles.buttonStyle}>
    //       <Text style={styles.buttonText}>{submitted ? 'Clear' : 'Submit'}</Text>
    //     </View>
    //   </TouchableWithoutFeedback>
    //   <CustomButton pressFunction={onPressHandler} title={submitted ? 'Clear' : 'Submit'} />
    //   { submitted ? 
    //     <View style={styles.container}>
    //       <Text style={styles.text}>Name: {name}</Text>
    //       <Image style={styles.image} source={require('./assets/done.png')} resizeMode='cover' />
    //     </View>
    //     :
    //     <Image style={styles.image} source={require('./assets/error.png')} resizeMode='stretch' />
    //   }
    //   <FlatList
    //     data={data}
    //     keyExtractor={item => item.id.toString()}
    //     renderItem={({ item }) => <Text style={styles.text}>{item.title}</Text>}
    //   />
    //   <ScrollView
    //     refreshControl={
    //       <RefreshControl
    //         refreshing={refresh}
    //         onRefresh={onRefresh}
    //         colors={['darkmagenta']}
    //       />
    //     }>
    //     {items.map(item => (
    //       <View key={item.id} style={styles.item}>
    //         <Text style={styles.text}>{item.text}</Text>
    //       </View>
    //     ))}
    //   </ScrollView>
    //   <ModalComp />
    //   </ImageBackground>
    // </SafeAreaView>
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerTitleAlign: 'center'} }
        >
          <Stack.Screen name='Login' component={LoginComponent} options= {{ headerShown: false }} />
          <Stack.Screen name='Home' component={HomeComponent} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   alignItems: 'center',
  // },
  // inputBox: {
  //   width: 300,
  //   borderWidth: 1,
  //   borderColor: '#555',
  //   borderRadius: 5,
  //   textAlign: 'center',
  //   fontSize: 20,
  //   padding: 10,
  //   marginBottom: 10
  // },


  // image: {
  //   width: 100,
  //   height: 100,
  //   margin: 10
  // }
})

export default App