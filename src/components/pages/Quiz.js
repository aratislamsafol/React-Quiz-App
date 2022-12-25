import _ from 'lodash';
import { useEffect, useReducer, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import Answers from "../Answer";
import QuizQuestionHook from "../hook/QuizQuestionHook";
import MainProgress from "../MainProgress";
import MiniPlayer from "../MiniPlayer";
import {useAuth} from '../../contexts/AuthContext';
import { getDatabase, ref, set } from 'firebase/database';

const initialState=null;

const reducer=(state,action)=>{
    switch(action.type){
        case "questions":
            action.value.forEach((question) => {
                question.options.forEach((option)=>{
                    option.checked=false;
                });
            });
            return action.value;
        case "answers":
            const questions=_.cloneDeep(state); 
            questions[action.questionId].options[action.optionIndex].checked=action.value;
            
            return questions;
        default:
            return state;
    }
}
export default function Quiz(){
    const {id}=useParams();
    const { loading,error,questions}=QuizQuestionHook(id);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    // console.log(questions);
    const [qna,dispatch]=useReducer(reducer,initialState);
    const navigate=useNavigate();
    const {currentUser}=useAuth();
    // console.log(currentUser)

    useEffect(() => {
        dispatch({
            type:"questions",
            value:questions
        })
    }, [questions]);

    function handelChange(e,index){
        dispatch({
            type:"answers",
            questionId:currentQuestion,
            optionIndex:index,
            value:e.target.checked
        })
    }

    function nextQuestion(){
        if(currentQuestion+1<questions.length){
            setCurrentQuestion((prevQuestions)=>prevQuestions+1);
        }
    }

    function prevQuestion(){
        if(currentQuestion+1<questions.length){
            setCurrentQuestion((prevQuestions)=>prevQuestions-1);
        }
    }

    async function submit(){
        const {uid}=currentUser;
        const db=getDatabase();
        const resultRef=ref(db,`result/${uid}`);
        
        await set(resultRef,{
            [id]:qna
        });

        navigate(`/success/${id}`,{
            state:{
                qna
            }
        })
    }

    const complete=questions.length>0?((currentQuestion+1)/questions.length)*100:0;
    
    console.log(currentQuestion);
    return(
        <>
            {loading && <div>Loading ...</div>}
            {error && <div>There was an error!</div>}
            {!loading && !error && qna && qna.length>0 && (
                <>
                    {/* {console.log(qna[currentQuestion].options)} */}
                    <h1>{qna[currentQuestion].title}</h1>
                    <h4>Question can have multiple answers</h4>
                    <Answers handeler={handelChange} options={qna[currentQuestion].options} input={true}/>
                    <MainProgress buttonText="next Button" complete={complete} next={nextQuestion} prev={prevQuestion} submit={submit} />
                    <MiniPlayer/>
                </>
            )}
        </>
    );
}