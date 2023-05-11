import {initializeApp}from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
export const conf = initializeApp({
    apiKey: "AIzaSyDSGZrnh_hKIHhzqqDy--MnS3iTiQUEBvs",
    authDomain: "my-chat-bfdcb.firebaseapp.com",
    projectId: "my-chat-bfdcb",
    storageBucket: "my-chat-bfdcb.appspot.com",
    messagingSenderId: "158486525621",
    appId: "1:158486525621:web:43404dd89c506ce303f0fc",
    measurementId: "G-DV0H9D80NL",
   })

export const auth = getAuth(conf)
export const provaider = new GoogleAuthProvider();