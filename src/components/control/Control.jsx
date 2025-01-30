import './Control.css'

const Control = ({children}) => {
    
    return <div className='control'>
        <div className='player'><div className='p1'>P1</div><div className='p2'>P2</div></div>
        {children}
    </div>
}

export default Control