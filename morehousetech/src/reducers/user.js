/**
* Reducers for set/get users.
*/
const defaultUser = {
  email: null,
  name: null,
  uid: null,
  avatar: "https://abs.twimg.com/sticky/default_profile_images/default_profile_3_400x400.png",
  authorizing: false,
  autorized: false
}

const user = (state=defaultUser, action) => {
  switch(action.type) {
      case 'SET_USER_NAME':
        return Object.assign({}, state, {
          name: action.name
        });
      case 'SET_USER_EMAIL':
        return Object.assign({}, state, {
          avatar: action.email
        });
      case 'SET_USER_UID':
        return Object.assign({}, state, {
          avatar: action.uid
        });
      case 'USER_START_AUTHORIZING':
        return Object.assign({}, state, {
            authorizing: true
        });
      case 'USER_AUTHORIZED':
        return Object.assign({}, state, {
            authorizing: false,
            authorized: true
        });
      case 'USER_NO_EXIST':
          return Object.assign({}, state, {
              authorizing: false,
              authorized: false
          });
      break;
  }
}
