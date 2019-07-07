import 'react-navigation'
import React, { Component } from 'react'
import { AsyncStorage, View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'



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

   
export default class Task extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            user: '',
            nome: '',
            descricao: '',
            data:'',
            hora:'',
        }
    }
    key = {
        user : '',
        name : '',
    }
    inputNome = (text) => {
        this.setState({nome: text})
    }
    inputDescricao = (text) => {
        this.setState({descricao: text})
    }
    inputData = (text) => {
        this.setState({data: text})
    }
    inputHora = (text) => {
        this.setState({hora: text})
    }
    
    generateKey = () => {   
                this.key.user = this.state.user
     
                this.key.name = this.state.nome

        return this.key;
    }
    StoreTask = async () => {
        try {
            await AsyncStorage.setItem(JSON.stringify(this.generateKey()),JSON.stringify(this.info))
            return 1;
        } catch (e) {
            return -1;
        }

    }
    submitButton = async () => {
          await this.StoreTask;
          this.props.navigation.navigate('TaskManager',{user: this.state.email}); 
        }
    removeButton = async () => {
        await this.RemoveTask(this.generateKey)
        this.props.navigation.navigate('TaskManager',{user: this.state.email})
    }
      
    RemoveTask = async (key) => {
        try {
            await AsyncStorage.removeItem(JSON.stringify(key))
        } catch (e) {
            
        }

    }
render(){return (
    <View style = {styles.container}>
        
        <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Título da tarefa"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                onChangeText = {this.inputNome}/>
        <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Descrição da tarefa"
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                onChangeText = {this.inputDescricao}/>
        <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Data de conclusão da tarefa "
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                onChangeText = {this.inputData}/>
        <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Hora de conclusão da tarefa "
                placeholderTextColor = "#9a73ef"
                autoCapitalize = "none"
                onChangeText = {this.inputHora}/>
        <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.submitButton()
               }> 

               <Text style = {styles.submitButtonText}> Salvar </Text>
               </TouchableOpacity>
        <TouchableOpacity
            style = {styles.submitButton}
            onPress = {
                () => this.removeButton()
            }> 

              <Text style = {styles.submitButtonText}> Remover Task </Text>
              </TouchableOpacity>

    
    </View>
)}


}

Task.Navigationoptions = {
    title: 'Task',
    
}
