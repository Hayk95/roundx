import React, {useState} from 'react';
import Input from "../UI/Input.jsx";
import Button from "../UI/Button.jsx";
import LottieLoader from "../UI/LottieLoader.jsx";
import Logo from '../../assets/logo.svg'
import {Link} from "react-router-dom";
import {PATH_AUTH} from "../../routes/paths.jsx";
import VerificationInput from "react-verification-input";
const SignupForm =()=> {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div className="login-wrap">

            <div className="login-form">
                <div className='checkEmail'>
                    <LottieLoader title={'checkEmail'}/>
                </div>
                <div className={'verify-form-container'}>
                    <h2>Check your email</h2>
                    <h6>Verification code sending in your email </h6>
                    <VerificationInput
                        length={4}
                        placeholder={'·'}
                        classNames={{
                            container: "container",
                            character: "character",
                            characterInactive: "character--inactive",
                            characterSelected: "character--selected",
                            characterFilled: "character--filled",
                        }}
                    />
                    <Button color={'#000'} title='Verify'/>
                </div>
            </div>
            <div className="login-info">
                <LottieLoader/>
            </div>
        </div>
    );
}
export default SignupForm
