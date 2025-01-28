import './pieces.css'
import Piece from './piece.jsx'
import {copyPosition,createPosition} from '../bits/helper.js'
import { useState ,useRef} from 'react'
import { useContextApp } from '../context/context.jsx'
import { makeNewMove,clearCandidates } from '../reducer/actions/move.jsx'
import arbiter from '../arbiter/arbiter.js'

const Pieces =()=>{
   const {appState,dispatch}=useContextApp()
   const currentPosition=appState.position[appState.position.length-1]
   const ref=useRef()
  

   const calcCoords=(e)=>{
      const {width,left,top}=ref.current.getBoundingClientRect()
      const size=width/8
      const y=Math.floor((e.clientX-left)/size)
      const x=7-Math.floor((e.clientY-top)/size)
      return {x,y}
   }

   const move=(e)=>{
      const {x,y}=calcCoords(e)
      const [piece,rank,file]=e.dataTransfer.getData('text').split(',')
      if (appState.candidateMoves?.find(m => m[0] === x && m[1] === y)){
         const newPosition=arbiter.performMove({
            position:currentPosition,
            piece,rank,file,x,y}
         )
         dispatch(makeNewMove({newPosition}))
      }
      dispatch(clearCandidates())
   }


   const onDropState=(e)=>{
    
      move(e)
      
   
   }
   const OnDragOverState=(e)=> e.preventDefault()
    return(
        <div className='pieces' ref={ref} onDragOver={OnDragOverState} onDrop={onDropState}>
          { currentPosition.map((r,rank)=>
            r.map((f,file)=>
          currentPosition[rank][file]?<Piece key={rank+'-'+file} rank={rank} file={file} piece={currentPosition[rank][file]}> 

           </Piece>:null
        )
           )}
        </div>
    )
}

export default Pieces