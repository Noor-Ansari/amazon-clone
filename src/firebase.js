import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBxHPbqihCwR8bgL6-iGov5DWnQPbgR9ls",
    authDomain: "clone-97134.firebaseapp.com",
    projectId: "clone-97134",
    storageBucket: "clone-97134.appspot.com",
    messagingSenderId: "88025544692",
    appId: "1:88025544692:web:df10836bc7e00adc126ba1",
    measurementId: "G-ZQPJXF34PV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = firebaseApp.auth()

  