import { AsyncStorage } from 'react-native';

import { actionCreators as authActions } from '../redux/tracker/actions';

export const getCurrentUser = async () => AsyncStorage.getItem('@Auth:currentUser').then(JSON.parse);
export const removeCurrentUser = async () => AsyncStorage.removeItem('@Auth:currentUser');

