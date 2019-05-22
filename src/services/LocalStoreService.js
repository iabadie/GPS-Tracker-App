import AsyncStorage from '@react-native-community/async-storage';

const TRACKS_PATH = '@Tracker:tracks';

export const setTracks = async tracks => AsyncStorage.setItem(TRACKS_PATH, JSON.stringify(tracks));

export const getTracks = async () => AsyncStorage.getItem(TRACKS_PATH).then(JSON.parse);

export const removeTracks = async () => AsyncStorage.removeItem(TRACKS_PATH);
