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



let ediney = {
    nome: "Ediney"
};

let alunThiago = {
    nome: "Thiago",
    ra: "123456",
    dtaNasc: 2006,
};

let alunThiagoSilva = {
    nome:"Thiago Silva",
    ra: "98765",
    dtaNasc: 2006,
};

let Curso = {
    nome: "DS",
    coordenador: ediney,
    alunos: [alunThiago, alunThiagoSilva],
};

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

// fbAddDoc(window.fbDb,ediney, "professores", fbAddDocCbFn);
fbAddDoc(fbDb,alunThiago, "Alunos", fbAddDocCbFn);
fbAddDoc(fbDb,alunThiagoSilva, "Alunos", fbAddDocCbFn);
fbAddDoc(fbDb,Curso, "Cursos", fbAddDocCbFn);




 //let fbListDocsCbFn = async (doc) => {
   // console.log("Document ID: ", doc.id);
  //  console.log("Document data:", doc.data());
//}

