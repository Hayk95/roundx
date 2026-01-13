import React from 'react';
import Lottie from 'react-lottie';
import AuthAnimation from './../../assets/lottie/auth.json'
import CheckEmail from './../../assets/lottie/checkEmail.json'
import NoteFound from './../../assets/lottie/404.json'

const LottieLoader =({title})=> {
    let lottieFile = AuthAnimation
    switch (title){
        case 'checkEmail':
            lottieFile = CheckEmail
        break;
        case '404':
             lottieFile = NoteFound
        break;
    }
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: lottieFile,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <div>
            <Lottie
                options={defaultOptions}
                height={'100%'}
                width={'100%'}
            />
        </div>
    );
}
export default LottieLoader
