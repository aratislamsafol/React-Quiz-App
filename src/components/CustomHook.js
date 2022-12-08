import { get, getDatabase, orderByKey, query, ref } from 'firebase/database';
import { useEffect, useState } from "react";

export default function CustomHook(){
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(false);
    const [videos,setVideos]=useState([]);
    useEffect(()=>{
        async function FetchVideos(){
            const db=getDatabase();
            const videosRef=ref(db,"videos"); 
            const viedoQuery=query(
                videosRef,
                orderByKey()
            );

            try{
                // Ager State e error thakte pare ei jonno setError False
                setError(false);
                setLoading(true);
                // req firebase database
                // Get function for Read Data from Realtime Firebase Database
                const snapshot=await get(viedoQuery);
                setLoading(false);
               
                // exists namey ekta boolean return kore ,data paile 
                if(snapshot.exists()){
                    // jodi data pai tahole amra local videos namey ekta array localhost e rakhte hobe
                    setVideos((prevVideos)=>{
                        return [...prevVideos,...Object.values(snapshot.val())];
                    });         
                }else{
                    //
                }
            }catch(err){
                console.log(err);
                setLoading(false);
                setError(true)
            }
        }

        FetchVideos();
    },[]);

    return{
            loading,
            error,
            videos
        }
    ;
}