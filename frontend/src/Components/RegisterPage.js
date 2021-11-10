import React from 'react'
import { Link } from 'react-router-dom'

class RegisterPage extends React.Component {
    render() {
        return(
            <div>
                <div className="Register">
                    <body>First Name</body>
                    <input type="text"></input>
                    <body>Last Name</body>
                    <input type="text"></input>
                    <body>School Email</body>
                    <input type="text"></input>
                    <body>Password</body>
                    <input type="text"></input>
                    <body>University/College</body>
                    <input type="text"></input>
                    
                    <button type="button"><Link to="/CreateProfile">Create Account</Link></button>
                </div>
            </div>
        )
    }
}

export default RegisterPage