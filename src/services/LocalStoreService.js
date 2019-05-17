import { AsyncStorage } from 'react-native';

export const setItemSelection = async modulesSelection =>
  AsyncStorage.setItem('@Modules:modulesSelection', JSON.stringify(modulesSelection));

export const getItemSelection = async () =>
  AsyncStorage.getItem('@Modules:modulesSelection').then(JSON.parse);
