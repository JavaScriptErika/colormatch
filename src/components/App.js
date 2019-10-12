import React from 'react'
import Header from './Header'
import BackgroundColorSelector from './BackgroundColorSelector'

const App = () => {
    return(
        <div>
            <Header />

            <div className="container mt-5">
                <div className="columns">
                    <BackgroundColorSelector />
                </div>
            </div>

        </div>
    )
}

export default App