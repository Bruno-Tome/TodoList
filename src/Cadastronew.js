
import React, { Component } from 'react'
import { AsyncStorage, View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import 'react-navigation'
import {storeData,SaveNewUser} from './utils'




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

export default class Inputs extends Component{
  constructor(props)
  { super(props);
    this.state = {
    nome : '',
    email : '',
    senha : '', 
    Data : '',
    cpf :  '',
  }}
  inputNome = (text) => {
    this.setState({nome: text})
  }
  inputEmail = (text) => {
    this.setState({email: text})
  }
  inputSenha = (text) => {
    this.setState({senha: text})
  }
  inputData = (text) => {
    this.setState({data: text})
  }
  inputCpf = (text) => {
    this.setState({cpf: text})
  }
  submitButton = async () => {
    var auth = await SaveNewUser(this.email, this.state);
    console.log("auth: " + auth);
    if (auth != -1) {
      console.log('Validação');
      this.props.navigation.navigate('TaskManager',{user: this.state.email}); 
    }
  }

  

  render(){
    return(
      <View style = {styles.container}>
        <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Nome"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.inputNome}/>
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
        <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Data de Nascimento"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.inputData}/>
        <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "CPF"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.inputCpf}/>
             <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.submitButton()
               }> 

               <Text style = {styles.submitButtonText}> Cadastrar </Text>
               </TouchableOpacity>
            
             
      </View>
    )
  }
}


Inputs.navigationOptions = {
  title: 'Inputs',
}


