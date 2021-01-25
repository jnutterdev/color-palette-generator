const Colors = props => {
    
    let { colors, toggle } = props;
    let { hex, isLocked } = colors;

    return (
        <div style={{ backgroundColor: hex }} className="w-100 d-flex flex-column align-items-center justify-content-center">
            <h1>{hex}</h1>
            <button onClick={toggle} className={isLocked ? 'btn btn-dark' : 'btn btn-outline-dark'}>{isLocked ? 'UNLOCK' : 'LOCK'}</button>
        </div>
    )
}