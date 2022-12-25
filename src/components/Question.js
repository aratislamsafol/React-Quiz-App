import Answers from './Answer';
import classes from './assets/css/module/result.module.css';
export default function Question({answers=[]}){
    return answers.map((answer,index)=>(
        <div className={classes.answerArea} key={index}>
            <h4><span><i class="fa-solid fa-circle-question"></i></span>&nbsp; {answer.title} </h4>
            <Answers options={answer.options}/>
        </div>
    ));
}