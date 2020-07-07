import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './footer';
import MessageSend from './message-send';
import MessageRecieved from './message-recieved';

function App() {
  return (
    <main class="main">
  <header>
    <span>Chatty Patty </span>
  </header>
  <div id="messages">
    <MessageSend />
    <MessageRecieved />
  </div>
  <Footer />
</main>


  )
}

export default App;
