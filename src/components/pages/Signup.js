import classes from '../assets/css/module/signup.module.css';
import Button from '../Button';
import CheckBox from '../Checkbox';
import Form from '../Form';
import SignupImage from '../SignupImage';
import TextInput from '../TextInput';
export default function Signup(){
    return(
        <div className={classes.createAccount}>
            <div className={classes.loginWrapper}>
                <SignupImage />
                <Form className={`${classes.form}`}>
                    <TextInput type="text" placeholder="Enter name" icon=<i className="fa-regular fa-user"></i> />

                    <TextInput type="text" placeholder="Enter Email" icon='@' />

                    <TextInput type="password" placeholder="Enter password" icon=<i class="fa-solid fa-lock"></i> />

                    <TextInput type="password" placeholder="Confirm password" icon=<i class="fa-solid fa-user-lock"></i> />

                    <CheckBox text="&nbsp; I agree to the Terms & Conditions" />

                    <Button text="Submit Now"/>
                </Form>
            </div>
        </div>
    );
}