import './pieces.css'
import Piece from './piece.jsx'
import {copyPosition,createPosition} from '../bits/helper.js'
import { useState ,useRef} from 'react'
import { useContextApp } from '../context/context.jsx'
import { makeNewMove } from '../reducer/actions/move.jsx'

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
   const onDropState=(e)=>{
      const newPosition=copyPosition(currentPosition)
      const {x,y}=calcCoords(e)
      const [piece,rank,file]=e.dataTransfer.getData('text').split(',')
      newPosition[rank][file]=''
      newPosition[x][y]=piece
      dispatch(makeNewMove({newPosition}))
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