import { useRef,useState } from 'react';
import classes from './assets/css/module/minplayer.module.css';
import ReactPlayer from 'react-player/youtube';
export default function MiniPlayer({id,title}){
    const [status,setStatus]=useState(false);
    const buttonRef=useRef();
    const videoUrl=`http://www.youtube.com/watch?v=${id}`

    function togglePlayer(){
        if(!status){
            buttonRef.current.classList.remove(classes.floatingBtn);
            setStatus(true);
        }else{
            buttonRef.current.classList.add(classes.floatingBtn);
            setStatus(false);
        }
    }

    return (
        <div className={`${classes.miniPlayer} ${classes.floatingBtn}`} ref={buttonRef} onClick={togglePlayer} >
            <span className={classes.open}> {<i class="fa-solid fa-play"></i>} </span>
            <span className={classes.close} onClick={togglePlayer}> <i className="fa-solid fa-xmark" ></i> </span>
            <ReactPlayer className={classes.player} url={videoUrl} width="300px" height="168px" playing={status} controls/>
            <p>{title}</p>
        </div>
    );
}