import React from 'react'
import { StackNavigator } from 'react-navigation'

// Screens
import Home from '../screens/home.js'
import CreateWallet from '../screens/createWallet.js'
//xxx import all remaining screens

const defaultOptions = {
    // default options for the StackNavigator
    headerTintColor: 'white',
    headerStyle: {
        backgroundColor: '#4D933B',
        borderBottomColor: '#979797',
        borderBottomWidth: 1
    }
}

const routeConfiguration = {
    Home: {
        screen: Home,
        navigationOptions: {
            ...defaultOptions,
            header: null,
            headerTitle: 'Home'
        }
    },
    CreateWallet: {
        screen: CreateWallet,
        navigationOptions: {
            ...defaultOptions,
            headerTitle: 'Create New Wallet'
            // tabBarVisible: false
        }
    }
}

const StackNavigatorConfiguration = {
    initialRoute: 'Home',
    mode: 'modal',
    cardStyle: {
        backgroundColor: 'white'
    }
}

export const RootStackNavigator = StackNavigator(routeConfiguration, StackNavigatorConfiguration)