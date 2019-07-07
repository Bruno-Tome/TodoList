
import React, { Component } from 'react';
import { AsyncStorage, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import 'react-navigation';


function authenticate(username,password){
    var authkeys= {};
    authkeys.usr = username;
    authkeys.pass = password;
    user = UserFn.GetUser;
    if(authkeys.usr == user.name && authkeys.pass == user.senha){
        //usuario autenticado com sucesso
        return 1;
    }else{
        //usuario nao autenticado
        return 0;
    }
}

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
    var auth = await  this.SaveNewUser(this.state);
    console.log("auth: " + auth);
    
      console.log('Validação');
      this.props.navigation.navigate('TaskManager',{user: this.state.email}); 
    
  }

  storeData = async (obj) => {
    console.log('dados :' + obj);
      try {
        await AsyncStorage.setItem(obj.email, JSON.stringify(obj));
        console.log('armazenamento executado com sucesso');
        return 1;
        
      } catch (e) {
        
        return -1;
      }
    }
  SaveNewUser = async (obj) => {
    console.log('dados :' + obj);
    //if(obj.email != ""){
    return await this.storeData(obj);
   // }else{
   // return -1;}
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


