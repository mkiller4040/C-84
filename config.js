import firebase from 'firebase'

require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCGoJQQYa3bXdXxseyn-ngoZVsui4LLEQE",
  authDomain: "book-santa-c-83.firebaseapp.com",
  projectId: "book-santa-c-83",
  storageBucket: "book-santa-c-83.appspot.com",
  messagingSenderId: "490284195058",
  appId: "1:490284195058:web:2a935741d589a1134d446b",
  measurementId: "G-0806KB2Z1W"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

  export default firebase.firestore()


  