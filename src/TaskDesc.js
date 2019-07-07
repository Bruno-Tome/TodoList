import React, { Component } from 'react'
import { View, Text, FlatList,TouchableOpacity, TextInput, StyleSheet , AsyncStorage } from 'react-native'
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

export default class TaskDesc extends Component{
  constructor(props){
    super(props)
    this.state = {
      user: 'teste',
      nome: 'teste',
      descricao: 'teste',
      data:'teste',
      hora:'teste',
    }
  }
  render(){
    return (
    <View>
      <Text style = {styles.text}>{this.state.user}</Text>
      <Text>{this.state.nome}</Text>
      <Text>{this.state.descricao}</Text>
      <Text>{this.state.data}</Text>
      <Text>{this.state.hora}</Text>
      <TouchableOpacity 
                onPress = {
                    () => this.props.navigation.navigate('TaskManager',{user: this.state.user})
                }
                style = {styles.submitButton}
                >
                    <Text style = {styles.submitButtonText}> Voltar </Text>
                </TouchableOpacity>
      



    </View>









  )
  }
}
  
  TaskDesc.navigationOptions = {
    title: 'TaskDesc',
  }
  

