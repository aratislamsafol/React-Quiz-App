import classes from './assets/css/module/form.module.css';
export default function Form({children,...rest}){
    return (
        <div className={classes.rightSide}>
             <form className={classes.form} action="#" {...rest}>
                {children}
             </form>
        </div>
    );
}