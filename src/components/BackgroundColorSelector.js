import React from 'react'
import { SketchPicker } from 'react-color'

class BackgroundColorSelector extends React.Component {

    state = { 
        background : '#fff',
        displayColorPicker: false,
        rgba : {
            r: '255',
            g: '255',
            b: '255',
            a: '1'
        }
    }


    handleChangeComplete = (color) => {
        this.setState({ 
            background: color.hex,
            rgba: color.rgb
        })

        console.log(color.rgb)
    }

    handleClick = () => {
        this.setState(prevState => { 
            return {
            displayColorPicker: !prevState.displayColorPicker 
            }
        })

        console.log(this.state.displayColorPicker)
    }

    render(){

        let showPicker;

        if (this.state.displayColorPicker) {
            showPicker = <SketchPicker color={this.state.rgba} onChangeComplete={this.handleChangeComplete} style={{ position: 'absolute'}}/>
        }

        return(
                <div className="column is-one-quarter">
                    <p>click the box to get started</p>
                    <h5>Background Color</h5>
                    <div className="box" 
                            style={{backgroundColor: `rgba(${this.state.rgba.r}, ${this.state.rgba.g}, ${this.state.rgba.b}, ${this.state.rgba.a})`}}
                            onClick={this.handleClick}
                    >
                    </div>
                    {showPicker}
                    <input 
                        value={this.state.background}
                    />
                    <br/>
                    <input 
                        value={`rgba(${this.state.rgba.r}, ${this.state.rgba.g}, ${this.state.rgba.b}, ${this.state.rgba.a})`}
                        readOnly
                    />
                    
                </div>

        )
    }
}

export default BackgroundColorSelector