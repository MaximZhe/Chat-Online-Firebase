import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {initializeApp}from 'firebase/app';
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
 const conf = initializeApp({
  apiKey: "AIzaSyDSGZrnh_hKIHhzqqDy--MnS3iTiQUEBvs",
  authDomain: "my-chat-bfdcb.firebaseapp.com",
  projectId: "my-chat-bfdcb",
  storageBucket: "my-chat-bfdcb.appspot.com",
  messagingSenderId: "158486525621",
  appId: "1:158486525621:web:43404dd89c506ce303f0fc",
  measurementId: "G-DV0H9D80NL"
 })

interface authConfig{
  initializeApp:() => void,
  auth:any,
  db:any,
}
const auth = getAuth(conf);
const db = getFirestore(conf);
export const authContext= createContext<Partial<authConfig>>({})
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
  <authContext.Provider value={{
    initializeApp:initializeApp,
    auth:auth,
    db:db,
  }
    
  }>
     <App />
  </authContext.Provider>
   
  </BrowserRouter>
);
