
import './App.css'
import Board from './components/board'
import './constants.css'
import contextApp from './components/context/context'
import { reducerApp } from './components/reducer/reducer'     
import { useReducer } from 'react'
import { initData } from './constant'
function App() {
   const [appState,dispatch]=useReducer(reducerApp,initData)
   const providerState={appState,dispatch}

  return (
    <contextApp.Provider value={providerState}>
    <div className='App'>
         <Board/>
    </div>
   </contextApp.Provider>
  )
}

export default App
