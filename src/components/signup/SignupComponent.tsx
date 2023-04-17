import React, { useState } from 'react'
import './Signup.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function SignupComponent() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSignup = async() => {
        if(email.length > 0 && password.length > 0){
            try {
                await axios.post("http://localhost:4000/signup", { email, password })
                navigate('/login')
            } catch (error:any) {
                setError(error.response.data.message)
                console.log(error)
            }
        }
    }

    return (
        <div>
            <div className='error'>
                {error}
            </div>
            <div className='signup'>
                <div>
                    <div>
                        <label htmlFor="">Email</label>
                        <input type="text" onChange={(e) => {
                            setError('')
                            setEmail(e.target.value)
                        }} />
                    </div>
                    <div>
                        <label htmlFor="">Password</label>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button onClick={handleSignup}>Signup</button>
                </div>


            <div className='move' onClick={() => navigate('/login')}>Go to Login</div>  
            </div>
        </div>
    )
}

export default SignupComponent;
