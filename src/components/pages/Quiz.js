import _ from 'lodash';
import { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";
import Answers from "../Answer";
import classes from '../assets/css/module/topics.module.css';
import QuizQuestionHook from "../hook/QuizQuestionHook";
import MainProgress from "../MainProgress";
import MiniPlayer from "../MiniPlayer";


const initialState=null;

const reducer = (state, action) => {
    switch (action.type) {
      case "questions":
        action.value.forEach((question) => {
          question.options.forEach((option) => {
            option.checked = false;
          });
        });
        return action.value;
      case "answer":
        const questions = _.cloneDeep(state);
        questions[action.questionID].options[action.optionIndex].checked =
          action.value;
  
        return questions;
      default:
        return state;
    }
  };
  

export default function Quiz(){
    const {id}=useParams();
    const {loading,error,questions}=QuizQuestionHook(id);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [questionAnswer,dispatch]=useReducer(reducer,initialState);

    useEffect(() => {
        dispatch({
          type: "questions",
          value: questions,
        });
      }, [questions]);

    return (
        <>
            {/* {console.log(questionAnswer)}    */}
            <div className={classes.topics}>
                {/* <h2>{questionAnswer[currentQuestion].title}</h2> */}
                <p>Question can havae multiple answers</p>
            </div>
            <Answers />
            <MainProgress buttonText="Next Question" complete="25% complete" />
            <MiniPlayer />
        </>
    );
}