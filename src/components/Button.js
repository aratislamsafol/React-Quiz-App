import classes from './assets/css/module/submitBtn.module.css';
export default function Button({text}){
    return <button className={classes.submit_btn} type="button">{text}</button>;
}