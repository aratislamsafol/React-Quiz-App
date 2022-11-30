import classes from '../assets/css/module/signup.module.css';
import SignUpForm from '../SignupForm';
import SignupImage from '../SignupImage';
export default function Signup(){
    return(
        <div className={classes.createAccount}>
            <div className={classes.loginWrapper}>
                <SignupImage />
                <SignUpForm/>
            </div>
        </div>
    );
}