  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";


  const firebaseConfig = {
    apiKey: "AIzaSyCM71vAdXIlTid1mTRfQKK34nYAuMEjDpY",
    authDomain: "guifirestore.firebaseapp.com",
    projectId: "guifirestore",
    storageBucket: "guifirestore.appspot.com",
    messagingSenderId: "880037972233",
    appId: "1:880037972233:web:abd75c5ff8e9999b7c6bd8"
  };

window.fbApp = initializeApp(firebaseConfig);
window.fdDb = getFirestore(fbApp);
