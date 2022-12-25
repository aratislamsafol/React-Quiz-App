import classes from './assets/css/module/quizcheckbox.module.css';
export default function QuizCheckBox({handel,index,option,input}){
    return(
        input?(<label className={classes.answer} for="option1">  
        <input type="checkbox" value={index} onChange={(e)=>handel(e,index)} checked={option.checked} id="option1" />
        {option.title}
            </label>):(<label className={`${classes.answerSuccess} ${
                option.correct
                  ? classes.correct
                  : option.checked
                  ? classes.wrong
                  : null
              } `} for="option1">
            <input type="checkbox" defaultChecked={option.checked} disabled/>
            {option.title}
        </label>)
    );
}