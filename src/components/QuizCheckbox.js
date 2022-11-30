import classes from './assets/css/module/quizcheckbox.module.css';
export default function QuizCheckBox(){
    return(
        <label class={classes.answer} for="option1">
            <input type="checkbox" id="option1" />
            A New Hope 1
        </label>
    );
}