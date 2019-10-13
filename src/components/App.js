import React from 'react'
import Header from './Header'
import BackgroundColorSelector from './BackgroundColorSelector'
import ColorSelectionDisplay from './ColorSelectionDisplay'

const whiteStartingValues = [ {r: '255', g:'255', b: '255', a: '1'},'#ffffff']
const blackStartingValues = [{r: '0', g: '0', b: '0', a: '1'}, '#000000']


class App extends React.Component {

    state = {
        background: `${whiteStartingValues}`,
        heading: `${blackStartingValues}`,
        subheading: `${blackStartingValues}`,
        paragraph: `${blackStartingValues}`,
        buttonBackground: `${whiteStartingValues}`,
        buttonText: `${blackStartingValues}`,
        linkColor: `${blackStartingValues}`
    }

    handleOnColorChange = (type, colorSelectionRgba, colorSelectionHex) => this.setState({ [type] :  [colorSelectionRgba, colorSelectionHex] })

    render() {
        return(
            <div>
                <Header />

                <div className="container mt-5">
                    <div className="columns">
                        <div className="column is-one-quarter">
                            <BackgroundColorSelector 
                                title="Background Color" 
                                name="background" 
                                assignColorChange={this.handleOnColorChange} 
                            />
                        </div>
                        <div className="column is-one-quarter">
                            <BackgroundColorSelector 
                                title="Heading Text Color" 
                                name="heading" 
                                assignColorChange={this.handleOnColorChange} 
                            />
                            <BackgroundColorSelector 
                                title="Subheading Text Color" 
                                name="subheading" 
                                assignColorChange={this.handleOnColorChange} 
                            />
                            <BackgroundColorSelector 
                                title="Paragraph Text Color" 
                                name="paragraph" 
                                assignColorChange={this.handleOnColorChange}  
                            />
                        </div>

                        <div className="column is-one-quarter">
                            <BackgroundColorSelector 
                                title="Button Background Color" 
                                name="buttonBackground" 
                                assignColorChange={this.handleOnColorChange} 
                            />
                            <BackgroundColorSelector 
                                title="Button Text Color" 
                                name="buttonText" 
                                assignColorChange={this.handleOnColorChange} 
                            />
                        </div>

                        <div className="column is-one-quarter">
                            <BackgroundColorSelector 
                                title="Link Color" 
                                name="linkColor" 
                                assignColorChange = {this.handleOnColorChange} 
                            />
                        </div>
                    </div>

                    <div className="columns">
                        <div className="column is-half">
                            <ColorSelectionDisplay 
                                title="Display" 
                                background={this.state.background[0]}
                                heading={this.state.heading[0]}
                                subheading={this.state.subheading[0]}
                                paragraph={this.state.paragraph[0]}
                                buttonBackground={this.state.buttonBackground[0]}
                                buttonText={this.state.buttonText[0]}
                                linkColor={this.state.linkColor[0]} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App