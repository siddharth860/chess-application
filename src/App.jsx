
import './App.css'
import Board from './components/board'
import './constants.css'
import contextApp from './components/context/context'
import { reducerApp } from './components/reducer/reducer'     
import { useReducer } from 'react'
import { initData } from './constant.jsx'
import Control from './components/control/Control.jsx'
import { useState } from 'react'
import Header from './header.jsx'
import Auth from './components/Auth.jsx';
import MovesList from './components/control/MovesList.jsx'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
function App() {
   const [appState,dispatch]=useReducer(reducerApp,initData)
   const [isAuthenticated, setIsAuthenticated] = useState(false);

   const providerState = {
       appState,
       dispatch,
       setIsAuthenticated
   };

  return (
    <contextApp.Provider value={providerState}>
    <Router>
      <Header/>
    <div className='App'>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={
        isAuthenticated ?(
         <>
       
         <Board/>
         <Control>
          <MovesList>

          </MovesList>
         </Control>
          </>
        ) :(
          <Navigate to="/auth" />
        )
        }/>
         </Routes>
    </div>
    </Router>
   </contextApp.Provider>
  )
}

export default App
