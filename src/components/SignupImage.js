import classes from './assets/css/module/signupimage.module.css';
import signupImg from './assets/images/signup.svg';
import Image from './Image';
export default function SignupImage(){
    return (
        <div className={classes.leftSide}>
            <h2>Create an account</h2>
            <Image src={signupImg} alt=""/>
        </div>
    );
}