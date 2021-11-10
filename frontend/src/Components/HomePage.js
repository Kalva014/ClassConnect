import React from 'react'
import { Link } from 'react-router-dom'
import ChatBox from './Chat'

class HomePage extends React.Component {
    render() {
        return(
            <div>
                <ChatBox />
            </div>
        )      
    }
}

export default HomePage