import Answers from './Answer';
import classes from './assets/css/module/result.module.css';
export default function Question(){
    return (
        <div className={classes.answerArea}>
            <h4><span><i class="fa-solid fa-circle-question"></i></span>&nbsp;Here Goes the question in learn with arat </h4>
            <Answers/>
        </div>
    );
}