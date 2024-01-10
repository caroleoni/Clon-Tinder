import React, { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';
import { collection, onSnapshot } from 'firebase/firestore';
import './TinderCards.css';
import database from './firebase';

const TinderCards = () => {

    // const [ person, setPerson ] = useState([
    //     {
    //         name: "Carolina",
    //         url: "https://img.freepik.com/foto-gratis/joven-confiado_1098-20868.jpg"
    //     },
    //     {
    //         name: "Guada",
    //         url: "https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_640.jpg"
    //     },
    // ]);

    const [ person, setPerson ] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(database, 'people'), (snapshot) => {
          setPerson(snapshot.docs.map((doc) => doc.data()));
        });
    
        return () => unsubscribe();
      }, []);
      
    

  return (
    <div className='tinderCards'>
        <div className='tinderCards__container'>
            {
                person.map(p => (
                    <TinderCard
                        className='swipe'
                        key={p.name}
                        preventSwipe={['up', 'down']} //no puede ir para arriba ni para abajo
                    >
                        <div 
                            className='card'
                            style={{backgroundImage: `url(${p.url})`}}
                        >
                            <h2>{p.name}</h2>
                        </div>
                    </TinderCard>
                ))
            }
        </div>
    </div>
  )
}

export default TinderCards;