import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

import NavigationService from '../services/NavigationService';
import { white, colorSecondary } from '../constants/colors';

import settingBluetooth from './assets/actionBar/settingBluetooth.png';
import styles from './styles';

const ConfigButton = () => (
  <TouchableOpacity onPress={() => NavigationService.navigate('Config')}>
    <Image source={settingBluetooth} style={styles.configBluetoothIcon} />
  </TouchableOpacity>
);

export function stackNavigator() {
  return {
    headerTitleStyle: styles.navTitle
  };
}

export function initialLoading() {
  return {
    header: null
  };
}

export function home() {
  return {
    title: 'GPS Tracker Map',
    headerRight: ConfigButton(),
    headerStyle: {
      height: 50,
      backgroundColor: colorSecondary
    },
    headerTitleStyle: {
      color: white,
      fontSize: 18,
      fontWeight: '600'
    }
  };
}

export function config() {
  return {
    title: 'Bluetooth Configuration',
    headerStyle: {
      height: 50,
      backgroundColor: colorSecondary
    },
    headerTitleStyle: {
      color: white,
      fontSize: 18,
      fontWeight: '600'
    }
  };
}

export function withoutHeader() {
  return {
    header: null
  };
}
