import { Avatar } from '@mui/material';
import React, { useState } from 'react';
import './IndividualChat.css';

const IndividualChat = () => {
  //para enviar mensajes automatico
  const adminEnvio = e => {
    e.preventDefault();
    setMessages([...messages, {mensaje:input}])
    setInput("")
  };

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      nombre: "Maria",
      imagen: "....",
      mensaje: "heyyyy"

    },
    {
      nombre: "Maria",
      imagen: "....",
      mensaje: "Estas ahiii????? respondeeee"

    },
    {
      mensaje: "Hola!!! que tal??, perdon perdon, ya estoy!"
    }

  ]);
  
  return (
    <div className='individualChat'>
      <p className='individualChat__timestamp'>CONSEGUISTE UN MATCH EL 11-01-2024</p>
      {
        messages.map(message => (
          message.nombre ? (
            <div className='individualChat__message'>
              <Avatar className='individualChat__avatar' alt={message.nombre} src={message.imagen}/>
              <p className='individualChat__message__text'>{message.mensaje}</p>
            </div>
            
          ) : (
            <div className='individualChat__message'>
              <p className='individualChat__message__own'>{message.mensaje}</p>
            </div>
           
          )
        ))
      }
      <form className='individualChat__form'>
        <input type='text' 
               value={input} 
               className='individualChat__form__input'
               onChange={e => setInput(e.target.value)}
               placeholder='Escribe un mensaje' />
        <button type='submit' 
                 className='individualChat__form__send'
                onClick={adminEnvio}>
                   Enviar
        </button>        
      </form>
    </div>
  )
}

export default IndividualChat;