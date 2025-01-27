const Piece=({rank,file,piece})=>{
    const handleDragStart = (e) => {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', `${piece},${rank},${file}`);
        window.setTimeout(() => {
            e.target.style.display = 'none';
        }, 0);
    }
    const handleDragEnd=(e)=>e.target.style.display='block'
    return <div className={`piece ${piece} p-${file}${rank}`} draggable={true} onDragStart={handleDragStart} onDragEnd={handleDragEnd} />
}

export default Piece