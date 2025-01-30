import { useContextApp }from '../context/context.jsx'
import './MovesList.css'

const MovesList = () => {

    const { appState : {movesList} } = useContextApp();
    
    return <div className='moves-list'>
        {movesList.map((move,i) => 
            <div key={i} data-number={Math.floor(i/2)+1}>{move}</div>
        )}
    </div>
}

export default MovesList