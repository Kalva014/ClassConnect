import React from 'react'
import { Link } from 'react-router-dom'

class MatchedPage extends React.Component {
    render() {
        return(
            <div>
                <h1>You matched with... </h1>
                <button type="button"><Link to="/Home">Say Hi!</Link></button>
                <button type="button"><Link to="/Matched">Find Another Match</Link></button>
            </div>
        )
    }      
}

export default MatchedPage