import './board.css'
import Ranks from './bits/Ranks.jsx'
import Files from './bits/Files.jsx'
import Pieces from './pieces/pieces.jsx'
import Popup from './popup/popup.jsx'
import { useContextApp } from './context/context.jsx'
import arbiter from './arbiter/arbiter.js'
import { getKingPosition } from './arbiter/getMoves.js'
const Board = () =>{
    const ranks=Array(8).fill().map((x,i)=> 8-i)
    const files=Array(8).fill().map((x,i)=>i+1)

    const {appState}=useContextApp()
    const currentPosition=appState.position[appState.position.length-1]
    
    const isChecked=(()=>{
        const isInCheck=arbiter.isPlayerInCheck({
            positionAfterMove:currentPosition,
            player: appState.turn
        })
        if(isInCheck)
            return getKingPosition(position,appState.turn)
        return null
    })()


    const getClassName = (i,j) => {
        let c = 'tile'
        c+= (i+j)%2 === 0 ? ' dark-tile' : ' light-tile'
        if (appState.candidateMoves?.find(m => m[0] === i && m[1] === j)){
            console.log('helo')
            if (currentPosition[i][j])
                c+= ' attacking'
            else 
                c+= ' highlight'
        }

        if(isChecked && isChecked[0]=== i && isChecked[1]===j)
            c+=' checked'
        return c
    }
    return <div className='board'>
       <Ranks ranks={ranks}/>
        <div className='tiles'>
            {
                ranks.map((rank,i)=>files.map((file,j)=> 
                 <div key={file+'-'+rank} className={getClassName(7-i,j)}></div>
                ))
            }
        </div>
        <Pieces />
            <Popup />
            <Files files={files}/>    
          
    </div>  

}

export default Board