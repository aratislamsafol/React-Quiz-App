import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function AnswerResult(VideoId){
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(false);
    const [answers,setAnswers]=useState([]);

    useEffect(() => {
        async function fetchAnswerData(){
            const db=getDatabase();
            const answerRef=ref(db,"answers/"+VideoId+"/questions"); 
            const answerQuery=query(answerRef,orderByKey());
            try{
                setError(false);
                setLoading(true);
                const snapshot=await get(answerQuery);
               
                setLoading(false);

                if(snapshot.exists()){
                    console.log(snapshot.val());
                    setAnswers((prevAnswers) => {
                        return [...prevAnswers, ...Object.values(snapshot.val())];
                    });
                }
            }catch(err){
                console.log(err);
                setLoading(false);
                setError(true);
            }
        }
        fetchAnswerData();
    }, [VideoId]);

    return {
        loading,
        error,
        answers,
    };
}