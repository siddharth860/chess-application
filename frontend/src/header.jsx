import './header.css'
import chessimg from '../assets/chesslogo.png'

const Header=()=>{
    return(<div className="Header">
        <img src={chessimg} />
        <h1>Chess app</h1>
    </div>)
}

export default Header