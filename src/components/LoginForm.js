import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext";
import classes from './assets/css/module/signup.module.css';
import Button from "./Button";
import Form from "./Form";
import TextInput from "./TextInput";

export default function LoginForm(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("");
    const [loading,setLoading]=useState();

    const {Login}=useAuth();
    const Navigate=useNavigate();

    async function handeler(e){
        e.preventDefault();
        try{
            setError("");
            setLoading(true);
            await Login(email,password);
            Navigate("/");
        }catch(err){
            setError("Password And Email Not Matched");
            setLoading(false);
            console.log(err);
        }
    }
    // const [email,setEmail]=useState("");
    // const [email,setEmail]=useState("");
    return(
        <>
            <Form onSubmit={handeler} className={`${classes.form}`}>
                <TextInput type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email" icon='@' />
                <TextInput type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter password" icon=<i class="fa-solid fa-lock"></i> />
                <Button disabled={loading} type="submit" text="Submit Now"/>
                {error && <p className='error' style={{color:'white', backgroundColor:'#F08080',padding:'10px',borderRadius:'6px',marginTop:'10px'}}>{error}</p>}
            </Form>
        </>
        
    );
}