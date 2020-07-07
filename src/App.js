import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './footer';
import MessageSend from './message-send';

function App() {
  const [messages,setMessages] = useState([])
  return (
    <main class="main">
  <header>
    <span>Chatty Patty </span>
  </header>
  {messages.map((m, i) => <MessageSend key={i} text ={m} />)}
  <Footer onSend = {(text)=> setMessages([...messages,text])} />
</main>


  )
}

export default App;
