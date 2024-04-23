// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getDocs, getFirestore, collection, query, where,addDoc} from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyARrkeix6iIzxzWQQd6HkoQ5yzgscsGbUU",
    authDomain: "indumentariamba-a1125.firebaseapp.com",
    projectId: "indumentariamba-a1125",
    storageBucket: "indumentariamba-a1125.appspot.com",
    messagingSenderId: "767316829604",
    appId: "1:767316829604:web:5473b7e26e9f22ee99cd31"
  };



// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

//consulta de los products, para obtener todos los products voy recorriendo a collection de querys//
export async function getProducts(){
    const response = await getDocs(collection(db,'products'));
    console.log(response);
    const productsList =[];
    response.forEach(doc => productsList.push({id:doc.id, ...doc.data()}));
    return productsList;
}

export async function getProductDetail(id) {
    const response = await getDocs(collection(db, "products"))
    const productsList = [];
    response.forEach(doc => productsList.push({ id: doc.id, ...doc.data() }));
    return productsList.find(product => product.id == id)
}

export async function getProductsByCategory(category) {
    const q = query(collection(db, "products"), where("category", "==", category))
    const querySnapshot = await getDocs(q)
    const filteredByCategoryList = [];
    querySnapshot.forEach(doc => filteredByCategoryList.push({ id: doc.id, ...doc.data() }));
    return filteredByCategoryList.map(product => {
        return {
            ...product,
            img: `../${product.image}`
        };
    })
}

export async function sendOrder(order){
    const orderCollection = collection(db,'orders');
    const docRef = await addDoc(orderCollection, order)
    console.log('docRef generado: ' + JSON.stringify(docRef))
    console.log('id generado: ' + docRef.id)
    return docRef.id
}