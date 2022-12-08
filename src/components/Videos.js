import classes from './assets/css/module/videos.module.css';
import Card from "./Card";
import CustomHook from './CustomHook';

export default function Videos(){
    const {error,loading,videos}=CustomHook();
    return(
        <div className={classes.videos} key={videos.youtubeID}>
            {videos.length>0 && videos.map((video)=>(
                <Card title={video.title} id={video.youtubeID
                } noq={video.noq
                }/>
            ))}
            {!loading && videos.length === 0 && (
            <div className=''>
                No Data Found
            </div>)}
            {error && <div>Error Occured</div>}
            {loading && <div>Loading ...</div>}
        </div>
    );
}