import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDW8oLSn6srzU5MVhPLjrgYgusD6yZKFe0",
  authDomain: "morehouse-tech.firebaseapp.com",
  databaseURL: "https://morehouse-tech.firebaseio.com",
  projectId: "morehouse-tech",
  storageBucket: "",
  messagingSenderId: "283849903445"
};
firebase.initializeApp(config);

export default firebase;
