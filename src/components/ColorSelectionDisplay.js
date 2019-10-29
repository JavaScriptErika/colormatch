import React from 'react'

class ColorSelectionDisplay extends React.Component {
    
    render(){
         const {background, heading, subheading, paragraph, buttonBackground, buttonText, linkColor} = this.props
         
        return(
                <div className="my-3" >
                    <h5>{this.props.title}</h5>
                    <div className="box" style={{backgroundColor: `rgba(${background.r}, ${background.g}, ${background.b}, ${background.a})`}}>
                        <h1 className="title" style={{color: `rgba(${heading.r}, ${heading.g}, ${heading.b}, ${heading.a})`}}>Human give me attention meow</h1>
                        <h2 className="subtitle" style={{color: `rgba(${subheading.r}, ${subheading.g}, ${subheading.b}, ${subheading.a})`}}>I must find my catnip fish</h2>
                        <p style={{color: `rgba(${paragraph.r}, ${paragraph.g}, ${paragraph.b}, ${paragraph.a})`}}>To Do: Bite the neighbor's bratty kid, attack the dog, then pretend like nothing happened</p>
            
                        <a 
                            onClick={e => e.preventDefault()}
                            href
                            className="button" 
                            style={{
                                color: `rgba(${buttonText.r}, ${buttonText.g}, ${buttonText.b}, ${buttonText.a})`,
                                backgroundColor: `rgba(${buttonBackground.r}, ${buttonBackground.g}, ${buttonBackground.b}, ${buttonBackground.a})`,
                                }}
                            >
                            Button
                        </a>

                        <br/>

                        <a 
                            href
                            onClick={e => e.preventDefault()}
                            style={{color: `rgba(${linkColor.r}, ${linkColor.g}, ${linkColor.b}, ${linkColor.a})`}}
                            >
                            This is a link
                        </a>
      
                    </div>
                </div>
                
        )
    }
}

export default ColorSelectionDisplay