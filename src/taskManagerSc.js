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
    }
  })


export default class TaskManager extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: '',
            tasks: [{}]
        }
        
        amt = 0
    }

    loadTasks = async () => {
        this.user = await this.getRouteParams()
        let chaves = []
        chaves = await this.getAllKeys()
        let alldata = {
            keys: [],
            content: [{}],
        }
        let count = 0 
        console.log('load check');
        
        for (let index = 0; index < chaves.length; index++) {
            const element = chaves[index];

            console.log('for check');
            console.log('user: '+ this.user)
            if(element == this.user){
                alldata.keys[index] = this.user
                alldata.content[index] =  JSON.parse(await this.retrieveData(this.user))
                count++;
                
                console.log('if check');
            }
        }
        this.amt = count
        this.dados = JSON.parse(this.alldata.content)
        
        
        return await JSON.parse(alldata)
    }
    retrieveData = async (text) => {
        try {
          const value = await AsyncStorage.getItem(text);
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
    getRouteParams = () => {
       let user = this.props.navigation.getParam('user');  
       return user
    } 
   
    
    render() {
       
        this.getAllKeys()
        this.state.tasks =  this.loadTasks()
        return(
            <View >
                <FlatList
                    data={this.state.tasks}
                    renderItem={({item}) => <Text>{this.state.tasks}</Text>}
                    />
                <Text>Placeholder</Text>
                <TouchableOpacity 
                onPress = {
                    () => this.props.navigation.navigate('Task',{user: this.state.user})
                }
                style = {styles.submitButton}
                >
                    <Text style = {styles.submitButtonText}> Adicionar Task </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress = {
                    () => this.props.navigation.navigate('TaskDesc',{user: this.state.user})
                }
                style = {styles.submitButton}
                >
                    <Text style = {styles.submitButtonText}> descricao Task </Text>
                </TouchableOpacity>
            </View>

        )
    }

}

TaskManager.Navigationoptions = {
    title: 'TaskManager',
    
}



