import React, {useState} from 'react';
import App from './App'


function Footer(){
    const [text, setText] = useState('')

    return <footer class="footer">
    <input class="text-input" value={text} 
        onChange={e=>setText(e.target.value)}
        placeholder="Your Message"
    />
    <button>send</button>
  </footer>
}

export default Footer

