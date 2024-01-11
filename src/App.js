import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import ChatList from './ChatList';
import Header from './Header';
import IndividualChat from './IndividualChat';
import SwipeButtons from './SwipeButtons';
import TinderCards from './TinderCards';

const App = () => {
  return (
  
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" 
          element={
            <>
              <Header />
              <TinderCards />
              <SwipeButtons />
            </>
          } 
          
          />
          <Route path="/chats" 
          element={ 
          <>
            <Header backButton="/" />
            <ChatList /> 
          </>
          } />
          <Route path="/chat/:id" 
          element={ 
          <>
            <Header backButton="/chats" />
            <IndividualChat /> 
          </>  
          } />
        </Routes>
      </Router>

    </div>
  );
}

export default App;

