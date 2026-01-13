import React, {useEffect, useState} from 'react';
import Input from "../UI/Input.jsx";
import Button from "../UI/Button.jsx";
import LottieLoader from "../UI/LottieLoader.jsx";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import Logo from '../../assets/logoBlack.png'
import {Link} from "react-router-dom";
import {PATH_AUTH} from "../../routes/paths.jsx";
import Map from "../Maps.js";
const SignupForm =()=> {
    const [isMarkerShown, setIsMarkerShown] = useState(false);
    const [user,setUser] = useState({
        role:'',
        name:null,
        email:'',
        phone:'',
        b_name:'',
        lastname:'',
        password:''
    })
    const onChange =(name,value)=>{
        console.log('name',name,value)
        setUser({...user,[name]:value})
    }

    useEffect(() => {
        delayedShowMarker()
    }, []);
   const delayedShowMarker = () => {
        setTimeout(() => {
            setIsMarkerShown(true)
        }, 3000)
    }
    const handleMarkerClick = () => {
        setIsMarkerShown(false)
        delayedShowMarker()
    }
    return (
        <div className="login-wrap">
            <div className="login-form">
                <div className='logo'>
                    <img src={Logo} alt="logo"/>
                </div>
                <div className={'login-form-container'}>
                    <p>Sign up to RoundX Transport</p>
                    <Map  isMarkerShown={isMarkerShown}
                          onMarkerClick={handleMarkerClick}/>
                    <Input label={"What's your name?"} placeholder='Name' type='text' value={user?.name} setValue={(e)=>onChange('name',e)}/>
                    <Input label={"What's your lastname?"} placeholder='Lastname' type='text' value={user?.lastname} setValue={(e)=>onChange('lastname',e)}/>
                    <Input label={"What's your Email?"} placeholder='Email' type='text' value={user?.email} setValue={(e)=>onChange('email',e)}/>
                    <Input placeholder='Password' type='password' value={user?.password} setValue={(e)=>onChange('password',e)}/>
                    <PhoneInput
                        inputStyle={{width:'100%'}}
                        style={{height:'40px'}}
                        defaultCountry="us"
                        value={user?.phone}
                        onChange={(phone) => onChange('phone',phone)}
                    />
                    <Button color={'#4F2CFF'} title='Sign up'/>
                    <div className='hr-title'>
                        <div></div>
                        <span>Don't have account</span>
                        <div></div>
                    </div>
                    <Link to={PATH_AUTH.signin}>
                        <Button color={'#000000'} title='Sign in'/>
                    </Link>
                </div>
            </div>
            <div className="login-info">
                <LottieLoader/>
            </div>
        </div>
    );
}
export default SignupForm
