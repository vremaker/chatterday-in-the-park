import React, {useState} from 'react';
import App from './App'


function Footer(props){
    const [text, setText] = useState('')

    return <footer className="footer">
    <input className="text-input" value={text} 
        onChange={e=>setText(e.target.value)}
        placeholder="Your Message"
    />
    <button className="send-button"
    onClick={()=>{props.onSend(text) 
    setText('') }}
    >send
    </button>
 
  </footer>
}

export default Footer

