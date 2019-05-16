import React from 'react';
import { Button, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation';
import WalletScreen from './src/pages/WalletScreen';
import ContractScreen from './src/pages/ContractScreen';
import WithdrawScreen from './src/pages/WithdrawScreen';
import ExchangeScreen from './src/pages/ExchangeScreen';
import TxHistoryScreen from './src/pages/TxHistoryScreen';

const WalletStack = createStackNavigator(
  {
    Wallet: { screen: WalletScreen },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#42f44b',
      },
      headerTintColor: '#FFFFFF',
      title: 'Wallet'
    },
  }
);

const ContractStack = createStackNavigator(
  {
    Contract: { screen: ContractScreen },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#42f44b',
      },
      headerTintColor: '#FFFFFF',
      title: 'Contract'
    },
  }
);

const WithdrawStack = createStackNavigator(
  {
    Withdraw: { screen: WithdrawScreen },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#42f44b',
      },
      headerTintColor: '#FFFFFF',
      title: 'Withdraw'
    },
  }
);

const ExchangeStack = createStackNavigator(
  {
    Exchange: { screen: ExchangeScreen },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#42f44b',
      },
      headerTintColor: '#FFFFFF',
      title: 'Exchange'
    },
  }
);

const TxHistoryStack = createStackNavigator(
  {
    TxHistory: { screen: TxHistoryScreen },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#42f44b',
      },
      headerTintColor: '#FFFFFF',
      title: 'Transaction History'
    },
  }
);


const App = createBottomTabNavigator(
  {
    Wallet: { screen: WalletStack },
    Contract: { screen: ContractStack },
    Withdraw: { screen: WithdrawStack },
    Exchange: { screen: ExchangeStack },
    TxHistory: { screen: TxHistoryStack },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Wallet') {
          iconName = 'home';
        } else if (routeName === 'Contract') {
          iconName = 'file';
        } else if (routeName === 'Exchange') {
          iconName = 'random';
        } else if (routeName === 'Withdraw') {
          iconName = 'exchange';
        } else if (routeName === 'TxHistory') {
          iconName = 'history';
        }
        return <Icon
          name={iconName}
          type='font-awesome'
          color={tintColor}
          size={25} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#42f44b',
      inactiveTintColor: 'gray',
    },
  }
);

export default createAppContainer(App);