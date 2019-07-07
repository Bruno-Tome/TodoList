// src/Page2.js
import 'react-navigation'
import React , { Component } from 'react';
import { View, Button, Text, AsyncStorage, StyleSheet,console,TouchableOpacity } from 'react-native';


const styles = StyleSheet.create({
  container: {
     paddingTop: 20
  },
  input: {
     margin: 15,
     height: 40,
     borderColor: '#7a42f4',
     borderWidth: 4
  },
  submitButton: {
     backgroundColor: '#7a42f4',
     padding: 10,
     margin: 15,
     height: 40,
  },
  submitButtonText:{
     color: 'white'
  },
  text:{
    fontSize: 20,
    margin: 15,
    height: 40,
    color: 'black',
    borderColor: '#7a42f4',
    borderWidth: 4



  }
})
export default class Home extends Component{
  constructor(){
    super()
  }
  render(){return(
  <View >
    <Text>cadastro ---- about</Text>
    <TouchableOpacity 
                onPress = {
                  () => this.props.navigation.navigate('Form')
                }
                style = {styles.submitButton}
                >
                    <Text style = {styles.submitButtonText}> Cadastre-se </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress = {
                    () => this.props.navigation.navigate('Login')
                }
                style = {styles.submitButton}
                >
                    <Text style = {styles.submitButtonText}> Login </Text>
                </TouchableOpacity>
  </View>
  )}
              }
Home.Navigationoptions = {
    title: 'Home',
    
}
