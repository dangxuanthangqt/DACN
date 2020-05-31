import firebase from "firebase/app";
import "firebase/storage";

var config = {

    
    apiKey: "AIzaSyBWUXEwvkZO0xs4tik5CUdmAkb5KvSfnXU",
    authDomain: "thang1-265415.firebaseapp.com",
    databaseURL: "https://thang1-265415.firebaseio.com",
    projectId: "thang1-265415",
    storageBucket: "thang1-265415.appspot.com",
    messagingSenderId: "749186653813",
    appId: "1:749186653813:web:85c5dcf1c935c93eabe23c",
    measurementId: "G-PFCKR3873J"
};

firebase.initializeApp(config);

export default firebase;

export const storage = firebase.storage();