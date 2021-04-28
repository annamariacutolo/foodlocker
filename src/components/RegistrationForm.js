import { useState } from 'react'
import { useHistory } from "react-router-dom"

const RegistrationForm = () => {
    const [usernameReg, setUsernameReg] = useState('')
    const [emailReg, setEmailReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')
    const [confirmPasswordReg, setConfirmPasswordReg] = useState('')
    const [successMessageReg, setSuccessMessageReg] = useState(null)

    const body = {
        'username': usernameReg,
        'email': emailReg,
        'password1': passwordReg,
        'password2': confirmPasswordReg
    }

    const history = useHistory()

    const handleUsernameChange = (e) => {
        setUsernameReg(e.target.value)     
    }

    const handleEmailChange = (e) => {
        setEmailReg(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPasswordReg(e.target.value)
    }

    const handleConfirmPasswordChange = (e) => {
        setConfirmPasswordReg(e.target.value)
    }
    
    const sendDetailsToServer = () => {
        if (!(usernameReg.length && emailReg.length && passwordReg.length && confirmPasswordReg.length)) {
            alert('Missing Values');
            setSuccessMessageReg('Please fill in the missing values.')
            return
        } else if (passwordReg.length < 8) {
            alert('Password must be at least 8 characters long')
            setSuccessMessageReg('Password must be at least 8 characters long.')
            return
        } else if (passwordReg !== confirmPasswordReg) {
            alert('Passwords don\'t match')
            setSuccessMessageReg('Passwords don\'t match.')
            return
        } else {
            const Options = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            };
            fetch('/api/v1/dj-rest-auth/registration/', Options)
            .then(
                function (response) {
                    if (response.status === 201) {
                        alert(`Registration successful. Hello ${usernameReg}!`)
                        setSuccessMessageReg(`Registration successful. Hello ${usernameReg}!`)
                        setUsernameReg('')
                        setEmailReg('')
                        setPasswordReg('')
                        setConfirmPasswordReg('')
                        history.push('/')
                    } else if (response.status === 400) {
                        alert('Username or Email already exists.')
                        setSuccessMessageReg('Registration unsuccessful. Username or Email already exists')
                    }
                }
            )
        }
    }

    const handleSubmitClick = (e) => {
        e.preventDefault()
        sendDetailsToServer()    
    }

    return (
        <div>
            <div className="Login">
            <form>
                <label className="LoginLabel">
                    <h3>Username:</h3>
                    <input
                        className="Input" 
                        type="text"
                        id="usernameReg"
                        placeholder="enter username"   
                        value={usernameReg}
                        onChange={handleUsernameChange}
                    />
                </label>
                <label className="LoginLabel">
                    <h3>Email Address:</h3>
                    <input
                        className="Input" 
                        type="email"
                        id="emailReg"
                        placeholder="enter email" 
                        value={emailReg}
                        onChange={handleEmailChange}
                    />
                </label>
                <label className="LoginLabel">
                    <h3>Password:</h3>
                    <input className="Input"
                        type="password"  
                        id="passwordReg"
                        placeholder="password"
                        value={passwordReg}
                        onChange={handlePasswordChange} 
                    />
                </label>
                <label className="LoginLabel">
                    <h3>Confirm Password:</h3>
                    <input className="Input"
                        type="password"  
                        id="confirmPasswordReg" 
                        placeholder="confirm password"
                        value={confirmPasswordReg}
                        onChange={handleConfirmPasswordChange} 
                    />
                
                </label>
                <br/>
                <br/>
                <button 
                    type="submit" 
                    className="Btn"
                    onClick={handleSubmitClick}
                >
                    Register
                </button>
            </form>
            <div className='SuccessMessage'>
                {successMessageReg}
            </div>    
            </div>
        </div>
    )
}

export default RegistrationForm

