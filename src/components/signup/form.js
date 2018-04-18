import React, { Component } from 'react';

class FormSignUp extends Component {
    render() {
        return (
            <form style={{border: '1px solid black', padding: '10px', width: '10em', margin:'10px'}}>
                <span style={{fontSize: '2em', fontWeight: 'bold'}}>Sign up</span>
                <p>
                    <label>Name:</label><br />
                    <input type="text" />
                </p>
                <p>
                    <label>Email:</label><br />
                    <input type="text" />
                </p>
                <p>
                    <label>Password:</label><br />
                    <input type="password" />
                </p>
                <p>
                    <label>Age:</label><br />
                    <input type="text" />
                </p>
                    <input type="submit" value="Send" />
            </form>
        );
    }
}

export default FormSignUp;