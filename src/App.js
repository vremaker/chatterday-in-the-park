import React, {useEffect} from 'react';
import './App.css';
import Footer from './footer'
import Message from './message'
import {initialize, useDatu} from 'datu'
import {BrowserRouter, Route} from 'react-router-dom'

function App() {
  useEffect(()=>{
    const path = window.location.pathname
    if(path.length<2) window.location.pathname='/home'
  }, [])
  return <BrowserRouter>
    <Route path="/:room" component={Room} />
  </BrowserRouter>
}

function Room(props) {
  const room = props.match.params.room
  const {messages, send} = useDatu(room)
  return (
    <main className="main">
  
      <header>
        <img src="/gorrilla.jpg" alt="logo" />
        <span>Chat App</span>
      </header>

      <div className="messages">
        {messages.map((m,i)=> {
          return <Message key={i} text={m.text} />
        })}
      </div>

      <Footer
        onSend={text=> send({text, room})} 
      />

    </main>
  )
}

export default App;

const firebaseConfig = {
  apiKey: "AIzaSyBuGbdLzBcYQ13c9fH_Z4WY6atDCj01DVw",
  authDomain: "chatterday-in-the-park.firebaseapp.com",
  databaseURL: "https://chatterday-in-the-park.firebaseio.com",
  projectId: "chatterday-in-the-park",
  storageBucket: "chatterday-in-the-park.appspot.com",
  messagingSenderId: "730527791815",
  appId: "1:730527791815:web:8b6a9c2e237690e3af1ce2"
};
initialize(firebaseConfig)