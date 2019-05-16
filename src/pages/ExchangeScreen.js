import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { Input } from 'react-native-elements';

export default class ExchangeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Registration</Text>

        <Input
          placeholder="Your name"
          rightIcon={
            <Icon
              name='ios-qr-scanner'
              size={20}
              color='black'
              onPress={() => alert('clicked bro')}
            />
          }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: '#36485f',
    paddingLeft: 10,
    paddingRight: 10,
  },

  header: {
    fontSize: 24,
    // color: '#fff',
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#199187',
    borderBottomWidth: 1,
  },

  textinput: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 30,
    // color: '#fff',
    borderBottomColor: '#f8f8f8',
    borderBottomWidth: 1,
  }
});