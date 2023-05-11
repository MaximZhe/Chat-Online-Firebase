import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {initializeApp}from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { auth,conf } from './firebase-config';

export interface authConfig{
  initializeApp:() => void,
  auth:any,
  db:any,
}
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
