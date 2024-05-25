import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";



const firebaseConfig = {
    apiKey: "AIzaSyCM71vAdXIlTid1mTRfQKK34nYAuMEjDpY",
    authDomain: "guifirestore.firebaseapp.com",
    projectId: "guifirestore",
    storageBucket: "guifirestore.appspot.com",
    messagingSenderId: "880037972233",
    appId: "1:880037972233:web:abd75c5ff8e9999b7c6bd8"
  };

const app = initializeApp(firebaseConfig);
const fbDb = getFirestore(app);

let fbAddDocCbFn = (docRef) => {
    console.log("Document written with ID: ", docRef.id);
}

let fbAddDoc = async (fbDb, jsObj, strCollectionName, fbAddDocCbFn) => {
    try {
        const docRef = await addDoc(collection(fbDb, strCollectionName), jsObj);
        fbAddDocCbFn(docRef.id);
    } catch (e) {
        console.error("Error adding Document:", e);
    }
}

document.getElementById('alunoForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const ra = document.getElementById('ra').value;
    const dtaNasc = parseInt(document.getElementById('dtaNasc').value);
    
    const novoAluno = {
        nome: nome,
        ra: ra,
        dtaNasc: dtaNasc
    };
    
    await fbAddDoc(fbDb, novoAluno, "alunos", fbAddDocCbFn);
    
    document.getElementById('alunoForm').reset();
});