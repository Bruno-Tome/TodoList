 import React from 'react';
import { View, Button, Text } from 'react-native';





const Sobre = ({ navigation }) => (

  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text >Aplicativo de realizção de tarefas desenvolvido por Bruno, durante a semana teste.</Text>
    
    
  </View>
);

Sobre.navigationOptions = {
  title: 'Sobre',
}

export default Sobre;