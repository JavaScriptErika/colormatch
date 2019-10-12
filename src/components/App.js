import React from 'react'
import Header from './Header'
import BackgroundColorSelector from './BackgroundColorSelector'
import TextColorSelector from './TextColorSelector'

class App extends React.Component {

    state = {
        background: [],
        heading: [],
        subheading: [],
        paragraph: [],
        buttonBackground: [],
        buttonText: [],
        linkColor: []
    }

    handleOnColorChange = (type, colorSelectionRgba, colorSelectionHex) => {

        this.setState({ [type] :  [colorSelectionRgba, colorSelectionHex] })

        console.log( this.state.background, this.state.heading, this.state.subheading, this.state.paragraph)

    }

    render() {
        return(
            <div>
                <Header />

                <div className="container mt-5">
                    <div className="columns">
                        <div className="column is-one-quarter">
                            <BackgroundColorSelector title="Background Color" name="background" assignColorChange = {this.handleOnColorChange} />
                        </div>
                        <div className="column is-one-quarter">
                            <BackgroundColorSelector title="Heading Text Color" name="heading" assignColorChange = {this.handleOnColorChange} />
                            <BackgroundColorSelector title="Subheading Text Color" name="subheading" assignColorChange = {this.handleOnColorChange} />
                            <BackgroundColorSelector title="Paragraph Text Color" name="paragraph" assignColorChange = {this.handleOnColorChange}  />
                        </div>

                        <div className="column is-one-quarter">
                            <BackgroundColorSelector title="Button Background Color" name="buttonBackground" assignColorChange = {this.handleOnColorChange} />
                            <BackgroundColorSelector title="Button Text Color" name="buttonText" assignColorChange = {this.handleOnColorChange} />
                        </div>

                        <div className="column is-one-quarter">
                            <BackgroundColorSelector title="Link Color" name="linkColor" assignColorChange = {this.handleOnColorChange} />
                        </div>

                        {/* <TextColorSelector /> */}
                    </div>
                    <div className="columns">
                        
                    </div>
                </div>

            </div>
        )
    }
}

export default App