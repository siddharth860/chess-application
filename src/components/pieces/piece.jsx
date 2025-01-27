import arbiter from "../arbiter/arbiter";
import {generateCandidateMoves} from '../reducer/actions/move'
import { useContextApp } from "../context/context";

const Piece=({rank,file,piece})=>{
    const {appState,dispatch}=useContextApp()
    const {turn,position}=appState
    const currentPosition=position[position.length-1]



    const handleDragStart = (e) => {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', `${piece},${rank},${file}`);
        window.setTimeout(() => {
            e.target.style.display = 'none';
        }, 0);
        if(turn===piece[0]){
            const candidateMoves=arbiter.getRegularMoves({position: currentPosition,piece,rank,file})
            console.log(candidateMoves)
            dispatch(generateCandidateMoves({candidateMoves}))    
        }
    }
    const handleDragEnd=(e)=>e.target.style.display='block'
    return <div className={`piece ${piece} p-${file}${rank}`} draggable={true} onDragStart={handleDragStart} onDragEnd={handleDragEnd} />
}

export default Piece