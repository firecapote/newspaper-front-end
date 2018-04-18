import React, { Component } from 'react';

class FormSignIn extends Component {
    render() {
        return (
            <form style={{border: '1px solid black', padding: '10px', width: '10em', margin:'10px'}}>
                <span style={{fontSize: '2em', fontWeight: 'bold'}}>Sign in</span>
                <p>
                    <label>Email:</label><br />
                    <input type="text" />
                </p>
                <p>
                    <label>Password:</label><br />
                    <input type="password" />
                </p>
                <input type="submit" value="Send" />
            </form>
        );
    }
}

export default FormSignIn;