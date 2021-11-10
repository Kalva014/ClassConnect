import React from 'react'
import { Link } from 'react-router-dom'

class LandingPage extends React.Component {
    render() {
        return(
            <div>
                <div className="white-box">
                    <div className="Title">
                        <h1>Class Connect</h1>
                    </div>
                </div>
                <div className="Summary">
                    <p>Connect and meet with other students in your classes!</p>
                </div>
                <div className="Login">
                    <form>
                        <body>Email</body>
                        <input type="text"></input>
                        <body>Password</body>
                        <input type="text"></input>
                    </form>
                    
                    <button type="button"><Link to="/Home">Login</Link></button>
                </div>
                <div className="vertical"></div>
                <div className="SignIn">
                    <body>Don't have an account?</body>
                    <Link to="/Register">SignUp</Link>
                </div>
            </div>
        )
    }      
}

export default LandingPage