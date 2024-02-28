// data is store in https://firebase.google.com/
import { initializeApp } from "firebase/app";
import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore/lite";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDIqc4vA0c_rFC7ef2-dT7ONzZPJasGTXU",
    authDomain: "react-vanlife-994dd.firebaseapp.com",
    projectId: "react-vanlife-994dd",
    storageBucket: "react-vanlife-994dd.appspot.com",
    messagingSenderId: "627777375079",
    appId: "1:627777375079:web:c916e480b83462d9ac3dc2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const vansCollection = collection(db, "vans");

export async function getVans() {
    try {
        const snapshot = await getDocs(vansCollection);
        const vans = snapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id
        }));
        console.log('vans from firebase', vans);
        return vans;
    }
    catch (err) {
        console.log('Error getting documents', err);
        throw err;
    }

}

export async function getVanById(id) {
    try {
        const docRef = doc(db, "vans", id);
        const snapshot = await getDoc(docRef);
        return { ...snapshot.data() };
    }
    catch (err) {
        console.log('Error getting document', err);
        throw err;
    }
}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    );
    const data = await res.json();

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        };
    }

    return data;
}