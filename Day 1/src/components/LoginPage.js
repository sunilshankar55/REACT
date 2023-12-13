import React from 'react';
import './LoginPage.css';

function LoginPage() {
    return (
        <body>
        <div>
            <form>
                <h2>Existing User</h2>
                <label htmlFor='username'>Email:</label>
                <input type="text" id='username' required/>

                <label htmlFor='password'>Password:</label>
                <input type="password" id='password' required/>

                <input type="submit" value="LogIn"/>
            </form>
        </div>
        </body>
    );
}

export default LoginPage;