import React, { Component } from 'react'
import 'react-navigation'
import {AsyncStorage} from 'react-native'



export async function storeData (key,obj)  {
        console.log('dados :' + obj);
          try {
            
            await AsyncStorage.setItem(key, JSON.stringify(obj));
            console.log('armazenamento executado com sucesso');
            return 1;
            
          } catch (e) {
            console.log(e);
            
            return -1;
          };
        }

export async function SaveNewUser(key,obj)  {
        console.log('dados :' + obj);
        //if(obj.email != ""){
        return  storeData(key,obj);
        // }else{
        // return -1;}
        };
export async function getAllKeys() {
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

   
