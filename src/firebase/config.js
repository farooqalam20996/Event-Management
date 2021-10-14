import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDFrcbz31dPZ9hs6OSJTRD9ZlhfCQ3d8_w",
    authDomain: "jacob-57cd8.firebaseapp.com",
    projectId: "jacob-57cd8",
    storageBucket: "jacob-57cd8.appspot.com",
    messagingSenderId: "231287788012",
    appId: "1:231287788012:web:0915858073f27fa074b0c9",
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

class FirebaseConfig {
    auth = firebase.auth();
    firestore = firebase.firestore();
}

export { FirebaseConfig };

// if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
//     firebase.firestore().settings({ experimentalForceLongPolling: true });
// }

// export { firebase };