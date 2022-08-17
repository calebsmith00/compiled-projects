import styles from './Login.module.scss'
import React from 'react'
import router, {useRouter} from 'next/router'

class LoginComponent extends React.Component {
    constructor(props) {
        super(props)
    }
    
    formSubmit = e => {
        e.preventDefault()
        
        let username = this.state.username;
        let password = this.state.password;
        let data = {username, password}
        // VALIDATE INPUT
        if (username && password) {
            fetch('/api/request-login', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            })
            .then(response => router.push('/'))
            .catch(err => console.log(err))
        }

        router.push({pathName: '/'})
    }

    onChangeInput = e => {
        e.preventDefault()
        let text = e.target.value
        let property = e.target.name
        this.setState({
            [property]: text
        })
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                {/* Form container */}
                <div className={styles.formContainer}>
                    <form onSubmit={this.formSubmit}>
                        {/* Containers for the inputs */}
                        <div className={styles.inputContainer}>
                            <label htmlFor="username" >Username</label>
                            <input type="text" name="username" onChange={this.onChangeInput} />

                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" onChange={this.onChangeInput} />

                            <button type="submit">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginComponent;