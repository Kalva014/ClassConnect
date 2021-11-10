import React from 'react'
import { Link } from 'react-router-dom'

class CreateProfilePage extends React.Component {
    render() {
        return(
            <div>
                <div className="Create Profile">
                    <form action="/action_page.php">
                        <label for="img">Upload Profile Picture</label>
                        <input type="file" id="img" name="img" accept="image/*"></input>
                        {/* <input type="submit"></input> */}
                        
                        <body>Interests:</body>
                        <select name="skills" multiple="" class="ui fluid dropdown">
                            <option value="">Sports</option>
                            <option value="angular">Music</option>
                            <option value="css">Art</option>
                        </select>

                        <body>School Standing:</body>
                        <input type="text"></input>
                        <body>Major:</body>
                        <input type="text"></input>
                    </form>
                    <button type="button"><Link to="/Matched">Create Account</Link></button>
                </div>
            </div>
        )
    }
}
    
export default CreateProfilePage