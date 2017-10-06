import firebase from '../firebase';

/**
  user actions.
*/
export const setUserName = (name) => ({
    type: 'SET_USER_NAME',
    name
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
