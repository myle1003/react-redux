import { useState } from 'react';
import './Login.scss'
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../../services/apiServices';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { doLogin, FETCH_USER_LOGIN_SUCCESS } from '../../redux/action/userAction';
import { ImSpinner10 } from "react-icons/im";

const Login = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogin = async () => {
        setLoading(true)
        let data = await postLogin(email, password)
        if (data && +data.EC === 0) {
            dispatch(doLogin(data))
            toast.success(data.EM)
            setLoading(false)
            navigate('/')
        } else {
            toast.error(data.EM);
            setLoading(false)
        }
    }


    return (
        <div className="login-container">
            <div className='header'>
                <span> Don't have an account yet?</span>
                <button onClick={() => navigate('/signup')}> Sign up</button>
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
                    <span className='forgot-password'>Forgot password ?</span>
                </div>
                <div>
                    <button
                        className='btn-submit'
                        onClick={() => handleLogin()}
                        disabled={loading}
                    >
                        {loading && <ImSpinner10 className="loader-icon" />}
                        <span>
                            Login
                        </span>
                    </button>
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
    )
}

export default Login;