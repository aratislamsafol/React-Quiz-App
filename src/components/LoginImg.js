import classes from './assets/css/module/signupimage.module.css';
import loginImg from './assets/images/login.svg';
import Image from './Image';
export default function LoginImage(){
    return (
        <div className={classes.leftSide}>
            <h2>Create an account</h2>
            <Image src={loginImg} alt=""/>
        </div>
    );
}