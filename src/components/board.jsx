import './board.css'
import Ranks from './bits/Ranks.jsx'
import Files from './bits/Files.jsx'
import Pieces from './pieces/pieces.jsx'
const Board = () =>{
    const ranks=Array(8).fill().map((x,i)=> 8-i)
    const files=Array(8).fill().map((x,i)=>i+1)
    const getClassName=(i,j)=>(i+j)%2===0?'light-tile':'dark-tile'
    return <div className='board'>
       <Ranks ranks={ranks}/>
        <div className='tiles'>
            {
                ranks.map((rank,i)=>files.map((file,j)=> 
                 <div key={file+'-'+rank} className={getClassName(9-i,j)}></div>
                ))
            }
        </div>
        <Pieces />
            <Files files={files}/>    
          
    </div>  

}

export default Board