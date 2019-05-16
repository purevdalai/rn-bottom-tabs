import React from 'react';
import { Text, View, TextInput, Button, Picker, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Input } from 'react-native-elements';
import * as coinService from '../services/coin';

export default class WithdrawScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      coin: null, 
      address: '', 
      amount: 0,
      myCoins: [],
    };
  }
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    coinService.getOwnCoins().then((resp) => resp.json())
    .then((response => {
      console.log('my coins => ', response);
      this.setState({myCoins: response});
    }))
  }

  generateCoinPicker() {
    const picker = [];
    if ( this.myCoins.length > 0 ) {
      this.myCoins.map((coin, index) => {
        {
          index === 0 &&
          <Picker.Item label="Select coin" value={null}/>
        }
        {
          index > 0 &&
          <Picker.Item label={coin.name} value={coin.name}/>
        }
      })
    }
    return picker;
  }
    
  render() { 
    return (
      <View style={styles.container}>
        <Picker
          selectedValue={this.state.coin}
          onValueChange={(itemValue, itemIndex) =>
              this.setState({coin: itemValue})
          }>
          { this.generateCoinPicker() }
        </Picker>

        <TextInput
          placeholder='Address' 
          onChangeText={text => this.setState({ address: text })}
        />

        <TextInput 
          placeholder='Amount' 
          onChangeText={text => this.setState({ amount: text })}
        />
        <Button 
          title={'Send'} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 10,
      paddingLeft: 10,
      paddingRight: 10,
    },
});