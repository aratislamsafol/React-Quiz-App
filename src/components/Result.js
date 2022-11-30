import Question from './Question';
import SuccessImage from './SuccessImage';
export default function Result(){
    return(
        <>
            <SuccessImage/>
            <h1>Question Analysis</h1>
            <p>You answered 5 Out of 10 Questions correctly</p>
            <Question/>
            <Question/>
            <Question/>
            <Question/>
            <Question/>
        </>
    );
}