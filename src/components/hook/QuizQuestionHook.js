import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function QuizQuestionHook(VideoId){
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(false);
    const [questions,setQuestions]=useState([]);

    useEffect(() => {
        async function fetchQuizData(){
            const db=getDatabase();
            const quizRef=ref(db,"quiz/"+VideoId+"/questions"); 
            const questionQuery=query(quizRef,orderByKey());
            try{
                setError(false);
                setLoading(true);
                const snapshot=await get(questionQuery);
               
                setLoading(false);

                if(snapshot.exists()){
                    // console.log(snapshot.val());
                    setQuestions((prevQuestions) => {
                        return [...prevQuestions, ...Object.values(snapshot.val())];
                    });
                }
            }catch(err){
                console.log(err);
                setLoading(false);
                setError(true);
            }
        }
        fetchQuizData();
    }, [VideoId]);

    return {
        loading,
        error,
        questions,
    };
}