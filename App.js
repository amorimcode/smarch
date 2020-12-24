import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import axios from 'axios';


export default class App extends React.Component {
  renderList() {
    // const textElements = names.map(name => { 
    //   return <Text key={ name }>{ name }</Text>

    // } )
    axios.get('https://randomuser.me/api/?nat-br&results=5')
         .then(response => {
           console.log(response.data);
         })


    // return textElements

  }



  render() {
    return (
      <View>
        <Header title="Pessoas!" />
        { this.renderList()}
      </View>
    );
  }
}




