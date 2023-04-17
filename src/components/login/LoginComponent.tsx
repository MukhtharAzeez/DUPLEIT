import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function LoginComponent() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleLogin = async () => {
        if (email.length > 0 && password.length > 0) {
            try {
                const result:any = await axios.post("http://localhost:4000/login", { email, password })
                localStorage.setItem("userId", result.data.userId)
                localStorage.setItem("token", result.data.token)
                navigate('/')
            } catch (error:any) {
                setError(error.response.data.message)
            }
        }
    }

    return (
        <>
            <div className='error'>
                {error}
            </div>
            <div className='login'>
                <div>
                    <div>
                        <label htmlFor="">Email</label>
                        <input type="text" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="">Password</label>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button onClick={handleLogin}>Login</button>
                </div>
                <div className='move' onClick={() => navigate('/signup')}>Go to Signup</div>
            </div>
        </>
    )
}

export default LoginComponent
