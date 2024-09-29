import { useState } from 'react';
import './Login.scss'
import { useNavigate } from 'react-router-dom';
import { postLogin, postSignUp } from '../../services/apiServices';
import { toast } from 'react-toastify';

const SignUp = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [userName, setUserName] = useState("")
    const navigate = useNavigate()
    const handleSignUp = async () => {
        let data = await postSignUp(email, userName, password)
        if (data && +data.EC === 0) {
            toast.success(data.EM)
            navigate('/login')
        } else {
            toast.error(data.EM);
        }
    }


    return (
        <div className="login-container">
            <div className='header'>
                <span> Do have an account yet?</span>
                <button onClick={() => navigate('/login')}> Login</button>
            </div>
            <div className='title col-4 mx-auto'>
                Typeform
            </div>
            <div className='welcome col-4 mx-auto'>
                Hello, who's this?
            </div>
            <div className='content-form col-4 mx-auto'>

                <div className='form-group'>
                    <label >Email</label>
                    <input
                        type={'email'}
                        placeholder='Enter your email'
                        className='form-control'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label >useName</label>
                    <input
                        type={'useName'}
                        placeholder='Enter your userName'
                        className='form-control'
                        value={userName}
                        onChange={(event) => setUserName(event.target.value)}
                    />
                    <div className='form-group'>
                        <label >Password</label>
                        <input
                            type={'password'}
                            placeholder='Enter your password'
                            className='form-control'
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                    <div>
                        <button
                            className='btn-submit'
                            onClick={() => handleSignUp()}
                        >Sign up</button>
                    </div>
                    <div className='back'>
                        <span
                            className='back-span'
                            onClick={() => {
                                navigate('/')

                            }}>&#60; &#60; Go To HomePage</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SignUp