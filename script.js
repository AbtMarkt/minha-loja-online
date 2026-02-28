import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, orderBy } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDWTvMQNPc27WJpQfKr1zwdvaw1LDMUxH0",
    authDomain: "abt-marketplace.firebaseapp.com",
    projectId: "abt-marketplace",
    storageBucket: "abt-marketplace.firebasestorage.app",
    messagingSenderId: "763460800092",
    appId: "1:763460800092:web:5ac1f341919c1fa02ea099"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Função para Navegação
window.irParaDetalhes = function(nome, preco, img) {
    const url = `produto.html?nome=${encodeURIComponent(nome)}&preco=${preco}&img=${encodeURIComponent(img)}`;
    window.location.href = url;
};

// Função para Enviar Pedido
window.enviarPedidoFirebase = async function(dadosPedido) {
    try {
        await addDoc(collection(db, "pedidos"), dadosPedido);
        return true;
    } catch (e) {
        console.error("Erro ao enviar pedido:", e);
        return false;
    }
};