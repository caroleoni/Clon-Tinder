import React from 'react'
import ChatPreview from './ChatPreview';

const ChatList = () => {
  return (
    <div className='chatList'>
        <ChatPreview 
            nombre="Maria"
            mensaje="Hola que tal?"
            timestamp="hace 40seg"
            imgPerfil="https://previews.123rf.com/images/gmast3r/gmast3r1803/gmast3r180301637/98131469-icono-de-perfil-de-cara-joven-chica-sobre-fondo-de-chat-de-burbuja-de-chat-ilustraci%C3%B3n-vectorial.jpg"
        />
        <ChatPreview 
            nombre="Agus"
            mensaje="Eres un genio"
            timestamp="hace 1h"
            imgPerfil="https://previews.123rf.com/images/gmast3r/gmast3r1801/gmast3r180101037/94050281-icono-de-perfil-cabeza-masculina-en-la-burbuja-de-chat-aislada-ilustraci%C3%B3n-de-vector-plano-de.jpg"
        />
        <ChatPreview 
            nombre="Laura"
            mensaje="Yo tambien programo!!!"
            timestamp="hace 1 dia"
            imgPerfil="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkWWcsJqbju_S0boTAsW3ngpbLMrfEVrJe6-woGru_QvtWzJRP3EeTL0H9h4mniLf_AE4&usqp=CAU"
        />
        <ChatPreview 
            nombre="Pedro"
            mensaje="Eres el youtube ???? famoso???"
            timestamp="hace 1 semana"
            imgPerfil="https://c8.alamy.com/compes/m0wc8p/icono-de-perfil-alto-jefe-masculino-en-el-chat-burbuja-aislada-hombre-avatar-el-retrato-del-personaje-de-dibujos-animados-m0wc8p.jpg"
        />
    </div>
  )
}

export default ChatList;