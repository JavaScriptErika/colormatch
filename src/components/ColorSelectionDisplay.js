import React from 'react'

class ColorSelectionDisplay extends React.Component {
    
    render(){
         const {background, heading, subheading, paragraph, buttonBackground, buttonText, linkColor} = this.props


         const colors = {
            backgroundRGBAColorDisplay: `rgba(${background[0].r}, ${background[0].g}, ${background[0].b}, ${background[0].a})`,
            backgroundHEXColorDisplay: background[1],
            headingRGBAColorDisplay: `rgba(${heading[0].r}, ${heading[0].g}, ${heading[0].b}, ${heading[0].a})`,
            headingHEXColorDisplay: heading[1],

            subheadingRGBAColorDisplay:`rgba(${subheading[0].r}, ${subheading[0].g}, ${subheading[0].b}, ${subheading[0].a})`,
            subheadingHEXColorDisplay: subheading[1],

            paragraphRGBAColorDisplay:`rgba(${paragraph[0].r}, ${paragraph[0].g}, ${paragraph[0].b}, ${paragraph[0].a})`,
            paragraphHEXColorDisplay: paragraph[1],

            buttonTextRGBAColorDisplay: `rgba(${buttonText[0].r}, ${buttonText[0].g}, ${buttonText[0].b}, ${buttonText[0].a})`,
            buttonTextHEXColorDisplay: buttonText[1],

            buttonBackgroundRGBAColorDisplay: `rgba(${buttonBackground[0].r}, ${buttonBackground[0].g}, ${buttonBackground[0].b}, ${buttonBackground[0].a})`,
            buttonBackgroundHEXColorDisplay: buttonBackground[1],

            linkRGBAColorDisplay: `rgba(${linkColor[0].r}, ${linkColor[0].g}, ${linkColor[0].b}, ${linkColor[0].a})`,
            linkHexColorDisplay: linkColor[1]
         }

         console.log(this.props.background)
         
        return(
                <div className="my-3 columns" >
                    <div className="column is-half">
                        <h5>{this.props.title}</h5>
                        <div className="box" style={{backgroundColor: colors.backgroundRGBAColorDisplay}}>
                            <h1 className="title" style={{color: colors.headingRGBAColorDisplay}}>Human give me attention meow</h1>
                            <h2 className="subtitle" style={{color: colors.subheadingRGBAColorDisplay}}>I must find my catnip fish</h2>
                            <p style={{color: colors.paragraphRGBAColorDisplay}}>To Do: Bite the neighbor's bratty kid, attack the dog, then pretend like nothing happened</p>
                
                            <a 
                                onClick={e => e.preventDefault()}
                                href
                                className="button" 
                                style={{
                                    color: colors.buttonTextHEXColorDisplay,
                                    backgroundColor: colors.buttonBackgroundHEXColorDisplay,
                                    }}
                                >
                                Button
                            </a>

                            <br/>

                            <a 
                                href
                                onClick={e => e.preventDefault()}
                                style={{color: colors.linkRGBAColorDisplay}}
                                >
                                This is a link
                            </a>
        
                        </div>
                    </div>

                    <div className="column is-half">
                        <h5>Code Output</h5>
                        <div className="box">
                            <p>.background: {colors.backgroundRGBAColorDisplay}</p>
                            <p>.background-hex: {colors.backgroundHEXColorDisplay}</p>

                            <p>.heading: {colors.headingRGBAColorDisplay}</p>
                            <p>.heading-hex: {colors.headingHEXColorDisplay}</p>

                            
                            <p>.subheading: {colors.subheadingRGBAColorDisplay}</p>
                            <p>.subheading-hex: {colors.subheadingHEXColorDisplay}</p>

                                                        
                            <p>.paragraph: {colors.paragraphRGBAColorDisplay}</p>
                            <p>.paragraph-hex: {colors.paragraphHEXColorDisplay}</p>

                            <p>.btnText: {colors.buttonTextRGBAColorDisplay}</p>
                            <p>.btnText-hex: {colors.buttonTextHEXColorDisplay}</p>

                            
                            <p>.btnBackground: {colors.buttonBackgroundRGBAColorDisplay}</p>
                            <p>.btnBackground-hex: {colors.buttonBackgroundHEXColorDisplay}</p>

                            <p>.link: {colors.linkRGBAColorDisplay}</p>
                            <p>.link-hex: {colors.linkHexColorDisplay}</p>
                        </div>
                    </div>

                </div>


                
        )
    }
}

export default ColorSelectionDisplay