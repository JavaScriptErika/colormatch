import React from 'react'

class FirstColumnColorSelector extends React.Component {

    render(){
        return(
            <div className="container mt-5">
                <div className="columns">
                    <div className="column is-one-quarter">
                        <div className="box"></div>
                        <input
                            type="color"
                            value="#000000"
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default FirstColumnColorSelector