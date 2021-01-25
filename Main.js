class Main extends React.Component {
    constructor(props) {
        super(props);
        let initColorState = { // default color set on page load 
            colors: [
                {hex: "#494947", isLocked: false},
                {hex: "#35FF69", isLocked: false},
                {hex: "#44CCFF", isLocked: false},
                {hex: "#7494EA", isLocked: false},
                {hex: "#D138BF", isLocked: false}
            ]
        }
        
        this.state = initColorState;

    }

    toggleColorLock(i) { // takes in default colors from initColorState, loops over them 
        let getNewColors = this.state.colors.map((color, index) => {
            if (i === index) { 
                return {
                    ...color,
                    isLocked: !color.isLocked
                }
            } else {
                return color
            }
        })

        this.setState({
            colors: getNewColors
        });
    }
    
    randomizeColors() { // takes input from button event listener, generates a new color hex value
        let getNewColors = this.state.colors.map(colors => {
            if (!colors.isLocked) {
                return {
                    ...colors,
                    hex: '#' + Math.floor(Math.random() * 16777215).toString(16)
                }
            } else {
                return colors
            }
        })

        this.setState({
            colors: getNewColors
        });
    }
    
    render(){
        return (
<div className="container">
                <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand" href="#">Pick some colorz</a>
                </nav>
            
            <div className="container">
                <div className="row">
                    <div className="col-sm d-flex flex-wrap align-items-center justify-content-center">
                        <button type="button" className="btn btn-outline-primary" onClick={() => this.randomizeColors()}>Generate color</button>
                    </div>
                    <div>
                    {
                        this.state.colors.map((colors, i) => <Colors colors={colors} key={i} toggle={() => this.toggleColorLock(i)}/>)
                    }
                    </div>
                </div>
            </div>
</div>
        )
    }
}