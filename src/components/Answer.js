import { Fragment } from 'react';
import classes from '../components/assets/css/module/answer.module.css';
import QuizCheckBox from "./QuizCheckbox";

export default function Answers({handeler,options=[],input}){
    return (
        <div className={classes.answers}>
            {options.map((option,index)=>(
                <Fragment key={index}>
                    {
                        input?(<QuizCheckBox handel={handeler} index={index} option={option} input={input}/>)
                        :(<QuizCheckBox index={index} option={option} input={input} />)
                    }
                </Fragment>
            ))}
        </div>
    )
}
