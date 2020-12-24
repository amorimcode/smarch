import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header'


export default class App() extends React.Component {
  renderList() {
    const names [
      'Eddie Van Hallen',
      'Deleo',
      'Thiago Bit',
      'Slash'
    ]
  }




  return (
    <View>
      <Header title="Pessoas!" />
      { this.renderList() }
    </View>
  );
}



