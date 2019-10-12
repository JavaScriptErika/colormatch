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

        this.props.assignColorChange(this.props.name, this.state.rgba, this.state.background)
    }

    handleClick = () => {
        this.setState(prevState => { 
            return {
            displayColorPicker: !prevState.displayColorPicker 
            }
        })
    }

    render(){

        let showPicker;

        if (this.state.displayColorPicker) {
            showPicker = <SketchPicker color={this.state.rgba} onChangeComplete={this.handleChangeComplete} style={{ position: 'absolute'}}/>
        }

        return(
                <div>
                    <h5>{this.props.title}</h5>
                    <div className="box" 
                            style={{backgroundColor: `rgba(${this.state.rgba.r}, ${this.state.rgba.g}, ${this.state.rgba.b}, ${this.state.rgba.a})`}}
                            onClick={this.handleClick}
                    >
                    </div>
                    {showPicker}

                    {/* <input 
                        value={this.state.background}
                    />
                    <br/>
                    <input 
                        value={`rgba(${this.state.rgba.r}, ${this.state.rgba.g}, ${this.state.rgba.b}, ${this.state.rgba.a})`}
                        readOnly
                    /> */}
                    
                </div>

        )
    }
}

export default BackgroundColorSelector