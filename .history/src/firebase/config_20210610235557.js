import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCt6YdUsxawmuyQgF2abwllQvUoCyyg7uM",
    authDomain: "neighbor-service.firebaseapp.com",
    databaseURL: "https://neighbor-service-default-rtdb.firebaseio.com",
    projectId: "neighbor-service",
    storageBucket: "neighbor-service.appspot.com",
    messagingSenderId: "802650997919",
    appId: "1:802650997919:web:eaf7c19a089edf23b04eaa",
    measurementId: "G-JMQ4RDQMJJ"
}
// if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
// }

export { firebase };