import _ from "lodash";
import { useLocation, useParams } from 'react-router-dom';
import AnswerResult from './hook/AnswerResult';
import Question from './Question';
import SuccessImage from './SuccessImage';

export default function Result(){
    const {state}=useLocation();
    const {qna}=state;
    const {id}=useParams();
    const {loading,error,answers}=AnswerResult(id);
    console.log(qna);

    function calculate(){
        let score=0;
        answers.forEach((questions,index1)=>{
            let checkedData=[],
            correctData=[];
            questions.options.forEach((option,index2)=>{
                if(option.correct) correctData.push(index2);
                if(qna[index1].options[index2].checked){
                    checkedData.push(index2);
                    option.checked=true;
                } ;
            });
            if (_.isEqual(checkedData, correctData)) {
                score = score + 5;
              }
        });
        return score;
    }

    const userScore=calculate();
    // console.log(answers)

    return(
        <>
            {loading && <div>Loading ...</div>}
            {error && <div>There Was An Error</div>}
            {answers && answers.length > 0 && (
                <>
                    <SuccessImage score={userScore} answer={answers.length}/>
                    <h1>Question Analysis</h1>
                    <p>You answered {userScore} Out of {answers.length*5} Questions correctly</p>
                    <Question answers={answers}/>
                </>
            )}
        </> 
    );
}