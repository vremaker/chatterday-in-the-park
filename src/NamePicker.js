import React, {useState} from 'react'
import ReactDOM from "react-dom"
import { queries } from '@testing-library/react'

function NamePicker(props){
  const [editName, setEditName] = useState(false)
  const [name,setName] = useState('');
  const editable = () => setEditName(false);
  const nonEditable = () => setEditName(true) ;

  return <div id="add-username">
      <input id="username" className={editName ? "edit-mode" : "view-user"}
        placeholder="your name here!"
        value={name}
        onChange={e => setName(e.target.value)}
        onKeyPress={e=> {
          if(e.key === "Enter" && name) {
            props.onSend(name)
          }
        }}
      />      
      <>
          <img onClick={editName ? editable: nonEditable } id="tiddy-togg" src={editName? require('./done.png') : require('./edit.png')} />
     </>
     </div>
    
}

export default NamePicker