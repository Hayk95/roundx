import React, {useState} from 'react';
import Input from "../UI/Input.jsx";
import Button from "../UI/Button.jsx";
import LottieLoader from "../UI/LottieLoader.jsx";
import Logo from '../../assets/logo.svg'
import {Link} from "react-router-dom";
import {PATH_AUTH} from "../../routes/paths.jsx";
import {useAuth} from "../../hooks/index.jsx";
const LoginForm =()=> {
    const {login} = useAuth()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async ()=>{
       const res = await login(email,password)
        console.log('res',res)
    }
    return (
        <div className="login-wrap">
            <div className="login-form">
                <div className='logo'>
                    <img src={Logo} alt="logo"/>
                </div>
                <div className={'login-form-container'}>
                    <p>Sign in to AgileMedix</p>
                    <Input placeholder='Email' type='text' value={email} setValue={setEmail}/>
                    <Input placeholder='Password' type='password' value={password} setValue={setPassword}/>
                    <div className='forgot-password' >
                        <p>Forgot Password</p>
                    </div>
                    <Button onClick={()=>handleLogin()} color={'#4F2CFF'} title='Sign in'/>
                    <div className='hr-title'>
                        <div></div>
                        <span>Don't have account</span>
                        <div></div>
                    </div>
                    <Link to={PATH_AUTH.signup}>
                        <Button  color={'#000000'} title='Create new account'/>
                    </Link>
                </div>
            </div>
            <div className="login-info">
                <LottieLoader/>
            </div>
        </div>
    );
}
export default LoginForm
