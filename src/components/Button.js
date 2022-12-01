import classes from './assets/css/module/submitBtn.module.css';
export default function Button({text}){
    return <button type="submit" className={classes.submit_btn}>{text}</button>;
}