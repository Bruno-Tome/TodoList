// src/Page2.js

import React, { Component } from 'react'
import { KeyboardAvoidingView, Text, TouchableOpacity, TextInput, StyleSheet, AsyncStorage } from 'react-native'
import 'react-navigation'
import 'console';



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
  }
})

export default class Login extends Component{
  constructor(props)
  { super(props);
    this.state = {
    nome : '',
    email : '',
    senha : '', 
    Data : '',
    cpf :  '',
    }
  }
  inputEmail = (text) => {
    this.setState({email: text})
  }
  inputSenha = (text) => {
    this.setState({senha: text})
  }
  GetUser = async (obj) => {
    let string = await this.retrieveData(obj);
    console.log(string);
    let rtvddata = JSON.parse(string);
    if(obj.senha == rtvddata.senha){
      obj = rtvddata;
      return 1;
    }else{
      alert('Senha incorreta');
      return -1;
    }
  }
  submitButton = async (obj) => {
    let auth = await this.GetUser(obj);
    if(auth != -1){this.props.navigation.navigate('TaskManager',{user: this.state.email});}
  }
  getAllKeys = async () => {
    let keys = []
    try {
      keys = await AsyncStorage.getAllKeys()
    } catch(e) {
      // read key error
    }
    
    console.log(keys)
    // example console.log result:
    // ['@MyApp_user', '@MyApp_key']
    return keys
  }
  retrieveData = async (obj) => {
      try {
        const value = await AsyncStorage.getItem(obj.email);
        if(value !== null) {
          console.log('Valor encontrado');
          console.log(value); 
          return  value;
        }
      } catch(e) {
        console.log('valor não encontrado');
        return -1;
      }
  }
  
  
  render(){
    this.getAllKeys()
    return(
      <KeyboardAvoidingView style = {styles.container} behavior="padding" enabled >
        
        <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.inputEmail}/>
        <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Senha"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.inputSenha}/>       
        
             <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.submitButton(this.state)
               }> 

               <Text style = {styles.submitButtonText}> Login </Text>
               </TouchableOpacity>
            
             
      </KeyboardAvoidingView>
    )
  }
}


Login.navigationOptions = {
  title: 'Login',
}


