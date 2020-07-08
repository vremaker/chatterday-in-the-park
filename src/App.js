import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './footer';
import MessageSend from './message-send';
import {initialize, useDatu} from 'datu';

function App() {
  const {messages, send} = useDatu()
  console.log(messages)
  return (
    <main className="main">
  <header>
    <span>Chatty Patty </span>
  </header>
  <div className="messages">
  {messages.map((m, i) => <MessageSend key={i} text ={m.text} />)}
 
  </div>
  <Footer onSend = {text => send({text:text})} />
</main>


  );
}

export default App;

const firebaseConfig = {
  apiKey: "AIzaSyDWXVgUqm3xATyzqUqTxcpvsW7U804ctXI",
  authDomain: "chatter20202020.firebaseapp.com",
  databaseURL: "https://chatter20202020.firebaseio.com",
  projectId: "chatter20202020",
  storageBucket: "chatter20202020.appspot.com",
  messagingSenderId: "630230183323",
  appId: "1:630230183323:web:cc967f51fc79e394ca053e"
};

initialize(firebaseConfig)