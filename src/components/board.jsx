import './board.css'
import Ranks from './bits/Ranks.jsx'
import Files from './bits/Files.jsx'
import Pieces from './pieces/pieces.jsx'
import Popup from './popup/popup.jsx'
import { useContextApp } from './context/context.jsx'
const Board = () =>{
    const ranks=Array(8).fill().map((x,i)=> 8-i)
    const files=Array(8).fill().map((x,i)=>i+1)

    const {appState}=useContextApp()
    const currentPosition=appState.position[appState.position.length-1]
    
    const getClassName = (i,j) => {
        let c = 'tile'
        c+= (i+j)%2 === 0 ? ' dark-tile' : ' light-tile'
        if (appState.candidateMoves?.find(m => m[0] === i && m[1] === j)){
            if (currentPosition[i][j])
                c+= ' attacking'
            else 
                c+= ' highlight'
        }

      
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