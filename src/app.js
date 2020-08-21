import React from 'react'
import ReactDOM from 'react-dom'

import './style.scss'
import Placeholder from './components/Placeholder'

const App = () => {

    return (
        <div className="App" >
            <Placeholder />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('App'))