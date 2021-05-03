//import firebase from 'firebase';
//require('@firebase/firestore')
import firebase from '@firebase/app'; 


//import firebase from 'firebase';
//require('@firebase/firestore')
import '@firebase/firestore'
  var firebaseConfig = { 
apiKey: "AIzaSyD2uPxYxJ13QLkzQCZ9rte8LGtRZ_1mUjM", 
authDomain: "booksanta2-e63b0.firebaseapp.com", 
databaseURL: "https://booksanta2-e63b0.firebaseio.com",
projectId: "booksanta2-e63b0", 
storageBucket: "booksanta2-e63b0.appspot.com", 
messagingSenderId: "541869278204", 
appId: "1:541869278204:web:810983680021a7d64c2879", 
measurementId: "G-3B13P3KRMF" 
};
  // Initialize Firebase
 
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  
  export default firebase.firestore();



/*const firebaseConfig = {
    apiKey: "AIzaSyDvcS9mG_PkbU_YDsriTg8yFpqZhHLcCPY",
    authDomain: "booksanta-34599.firebaseapp.com",
    databaseURL: "https://booksanta-34599.firebaseio.com",
    projectId: "booksanta-34599",
    storageBucket: "booksanta-34599.appspot.com",
    messagingSenderId: "997462096518",
    appId: "1:997462096518:web:6f45ae604ae555d3916f07"
  };

  //firebase.initializeApp(firebaseConfig);

 if(!firebase.apps.length){

    firebase.initializeApp(firebaseConfig);
    }
  

  export default firebase.firestore();*/