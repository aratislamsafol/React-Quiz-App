import classes from './assets/css/module/result.module.css';
import successImg from './assets/images/success.png';
export default function SuccessImage(){
    return(
        <div className={classes.success}>
            <div className={classes.score}>
                <h1>Your score is <br /> 5 out of 10 </h1>
                <img src={successImg} alt="" />
            </div>
        </div>
    );
}