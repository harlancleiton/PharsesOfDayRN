import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';

export default class App extends Component {
  render() {
    const { styleView, styleButton, styleTextButton } = styles;
    return (
      <View style={styleView}>
        <Image source={require('./app/images/logo.png')} />
        <TouchableOpacity style={styleButton} onPress={btnCliked}>
          <Text style={styleTextButton}>Nova frase</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const btnCliked = () => {
  let randomNumber = Math.random();
  randomNumber = Math.floor(randomNumber * 6);
  let pharses = Array();
  pharses[0] = 'AA';
  pharses[1] = 'BB';
  pharses[2] = 'CC';
  pharses[3] = 'DD';
  pharses[4] = 'EE';
  pharses[5] = 'FF';
  Alert.alert('Frase do dia', pharses[randomNumber]);
}

const styles = StyleSheet.create({
  styleView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  styleButton: {
    backgroundColor: '#538530',
    marginTop: 15,
    paddingVertical: 10,
    paddingHorizontal: 30
  },
  styleTextButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  }
});