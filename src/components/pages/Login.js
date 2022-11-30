import classes from '../assets/css/module/signup.module.css';
import Button from '../Button';
import Form from '../Form';
import LoginImage from '../LoginImg';
import TextInput from '../TextInput';
export default function Login(){
    return(
        <div className={classes.createAccount}>
            <div className={classes.loginWrapper}>
                <LoginImage />
                <Form className={`${classes.form}`}>
                    <TextInput type="text" placeholder="Enter Email" icon='@' />
                    <TextInput type="password" placeholder="Enter password" icon=<i class="fa-solid fa-lock"></i> />
                    <Button text="Submit Now"/>
                </Form>
            </div>
        </div>
    );
}