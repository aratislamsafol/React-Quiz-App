import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import classes from './assets/css/module/signup.module.css';
import Button from './Button';
import CheckBox from './Checkbox';
import Form from './Form';
import TextInput from './TextInput';

export default function SignUpForm(){
    const [username,setUsername] =useState("");
    const [email,setEmail] =useState("");
    const [password,setPassword] =useState("");
    const [confirmPassword,setconfirmPassword] =useState("");
    const [agree,setAgree]=useState("");

    const [error,setError]=useState();
    const [loading,setLoading]=useState();

    const {Signup}=useAuth();
    const Navigate=useNavigate();

    async function handleSubmit(e){
        e.preventDefault();

        if(password !== confirmPassword){
            return setError("Password Don't Matched");
        }

        try{
            setError("");
            setLoading(true);
            await Signup(email,password,username);
            Navigate.push("/");
        }catch(err){
            console.log(err);
            setLoading(false);
            setError("Failed to create or loading");
        }
    }

    return(
        <Form onSubmit={handleSubmit} className={`${classes.form}`}>
            <TextInput type="text" placeholder="Enter name" icon=<i className="fa-regular fa-user"></i> value={username} onChange={(e)=>setUsername(e.target.value)} required />

            <TextInput type="text" placeholder="Enter Email" icon='@' value={email} onChange={(e)=>setEmail(e.target.value)} required />

            <TextInput type="password" placeholder="Enter password" icon=<i class="fa-solid fa-lock"></i> value={password} onChange={(e)=>setPassword(e.target.value)} required />

            <TextInput type="password" placeholder="Confirm password" icon=<i class="fa-solid fa-user-lock"></i> value={confirmPassword} onChange={(e)=>setconfirmPassword(e.target.value)} required />

            <CheckBox value={agree} onChange={(e)=>setAgree(e.target.value)} text="&nbsp; I agree to the Terms & Conditions" required />

            <Button disabled={loading} type="submit" text="Submit Now"/>

            {error && <p className='error'>`Error Occured -${error}`</p>}
        </Form>
    );
}