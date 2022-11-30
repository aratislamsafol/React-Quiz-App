import classes from '../components/assets/css/module/answer.module.css';
import QuizCheckBox from "./QuizCheckbox";

export default function Answers(){
    return (
        <div className={classes.answers}>
            <QuizCheckBox/>
            <QuizCheckBox/>
            <QuizCheckBox/>
            <QuizCheckBox/>
            <QuizCheckBox/>
            <QuizCheckBox/>
            <QuizCheckBox/>
            <QuizCheckBox/>
            <QuizCheckBox/>
            <QuizCheckBox/>
        </div>
        
    );
}