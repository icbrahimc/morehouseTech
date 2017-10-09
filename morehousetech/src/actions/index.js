import firebase from '../firebase';
import { Platform } from 'react-native';

export const setUserName = (name) => ({
    type: 'SET_USER_NAME',
    name
});

export const setUserEmail = (email) => ({
    type: 'SET_USER_EMAIL',
    email
});

export const setUserUID = (uid) => ({
    type: 'SET_USER_UID',
    uid
});

export const startAuthorizing = () => ({
    type: 'USER_START_AUTHORIZING'
});

export const userAuthorized = () => ({
    type: 'USER_AUTHORIZED'
});

export const userNoExist = () => ({
    type: 'USER_NO_EXIST'
});
