import React from 'react'
import LoginComponent from '../components/Login/LoginComponent'
import {useAuth0} from '@auth0/auth0-react'

export default function Login() {
    const { loginWithRedirect } = useAuth0();

    return (
        <div>
            <LoginComponent />
            <button onClick={() => loginWithRedirect()}>Log In</button>
        </div>
    )
}