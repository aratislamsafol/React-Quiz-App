import classes from './assets/css/module/checkbox.module.css';
export default function CheckBox({text}){
    return(
        <>
            <span className={classes.checkboxSpan}> <input type="checkbox" checked="checked" />{text}</span>
        </>
    );
}