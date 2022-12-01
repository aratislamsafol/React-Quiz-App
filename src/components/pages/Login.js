import classes from '../assets/css/module/signup.module.css';
import LoginForm from '../LoginForm';
import LoginImage from '../LoginImg';
export default function Login(){
    return(
        <div className={classes.createAccount}>
            <div className={classes.loginWrapper}>
                <LoginImage />
                <LoginForm/>
            </div>
        </div>
    );
}