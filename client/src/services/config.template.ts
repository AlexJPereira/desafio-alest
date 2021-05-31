export const serverConfig = {
    baseURL: 'http://localhost'
}

// essas sao as propriedades do projeto no firebase, essas informacoes podem ser publicas
// o firestore esta configurado para ninguem que nao seja admin conseguir ler ou editar
export const firebaseConfig = {
    apiKey: "AIzaSyA7kqRAjqSxhD-k3gjjENFO0SOaLI2x2L0",
    authDomain: "desafio-alest-a4ef6.firebaseapp.com",
    projectId: "desafio-alest-a4ef6",
    storageBucket: "desafio-alest-a4ef6.appspot.com",
    messagingSenderId: "630160827714",
    appId: "1:630160827714:web:021eeaa83414a31ffe54db"
}

const config = { serverConfig, firebaseConfig }
export default config
