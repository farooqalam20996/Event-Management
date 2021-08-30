import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyByi705s9gkhgoPY2RGlMz-KCHfeMHnMdU",
    authDomain: "jacobanderson-ba357.firebaseapp.com",
    projectId: "jacobanderson-ba357",
    storageBucket: "jacobanderson-ba357.appspot.com",
    messagingSenderId: "887527998390",
    appId: "1:887527998390:web:464dce22759fd905d2f717",
    measurementId: "G-04V10L1G5W"
}
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

class FirebaseConfig {
    auth = firebase.auth();
    firestore = firebase.firestore();
}

export { FirebaseConfig };