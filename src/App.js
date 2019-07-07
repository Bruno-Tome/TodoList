/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import Home from './Home';
import Login from './login';
import Inputs from './cadastrolegado'
import Sobre from './Sobre'
import TaskManager from './taskManagerSc'
import Task from './TaskEdit'
import TaskDesc from './TaskDesc'

import { createAppContainer, createStackNavigator } from 'react-navigation';

const Routes = createAppContainer(
  createStackNavigator({
    Home: Home, //Tela de inicio
    Login : Login, //Tela de login
    Form: Inputs, //Tela de cadastro
    TaskManager: TaskManager, //Tela de Tarefas
    Sobre: Sobre, //About
    Task: Task, //Tela de edição de tasks
    TaskDesc: TaskDesc, //tela display tasks

  })
);


export default Routes;