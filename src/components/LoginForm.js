import { useState } from 'react'
import { useHistory } from "react-router-dom"

const LoginForm = () => {
    const [usernameLogin, setUsernameLogin] = useState('')
    const [passwordLogin, setPasswordLogin] = useState('')
    const [successMessageLogin, setSuccessMessageLogin] = useState(null)

    const loginBody = {
        "username": usernameLogin,
        "password": passwordLogin
    }

    const history = useHistory()

    const handleUsernameChange = (e) => {
        setUsernameLogin(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPasswordLogin(e.target.value)
    }

    const handleSubmitClick = (e) => {
        e.preventDefault()
        sendLoginDetailsToServer()
    }

    const sendLoginDetailsToServer = () => {
        if (!(usernameLogin.length && passwordLogin.length)) {
            alert('Missing Values')
            setSuccessMessageLogin('Please fill in the missing values.')
            return
        } else if (passwordLogin.length < 8) {
            alert('Password must be at least 8 characters long')
            setSuccessMessageLogin('Password must be at least 8 characters long.')
            setPasswordLogin('')
            return
        } else {
            const loginOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(loginBody)
            }
            fetch('/api/v1/dj-rest-auth/login/', loginOptions)
            .then(
                function (response) {
                    if (response.status === 200) {
                        alert(`Login successful. Hello ${usernameLogin}!`)
                        setSuccessMessageLogin(`Login successful. Hello ${usernameLogin}!`)
                        setUsernameLogin('')
                        setPasswordLogin('')
                        history.push('/')
                    } else if (response.status === 400) {
                        alert('Login unsuccessful. Username and/or Password incorrect')
                        setSuccessMessageLogin('Login unsuccessful. Username and/or Password incorrect')
                        setPasswordLogin('')
                    } else {
                        alert('Sorry, an error has occurred.')
                        setSuccessMessageLogin('Sorry, an error has occurred')
                        setPasswordLogin('')                       
                    }
                }
            )
        }
    }
    
    return(
        <div className="Login">
            <form>
                <div >
                <label className="LoginLabel"><h3>Username:</h3></label>
              
                <input className="Input" 
                       type="text"  
                       id="usernameLogin"  
                       placeholder="enter username" 
                       value={usernameLogin}
                       onChange={handleUsernameChange}
                />
                </div>
                <br/>
                <div>
                <label className="LoginLabel"><h3>Password:</h3></label>
                
                <input className="Input" type="password"  
                       id="passwordLogin" 
                       placeholder="enter password"
                       value={passwordLogin}
                       onChange={handlePasswordChange} 
                />
                </div>
                <br/>
                <br/>
                <br/>
                <button 
                    className="Btn"
                    type="submit" 
                    onClick={handleSubmitClick}
                >Login</button>
            </form>
            <div className='SuccessMessage'>
                {successMessageLogin}
            </div>
        </div>
    )
}


export default LoginForm