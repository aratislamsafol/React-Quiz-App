import classes from './assets/css/module/minplayer.module.css';
import miniplayerImg from './assets/images/3.jpg';
export default function MiniPlayer(){
    return (
        <div className={`${classes.miniPlayer} ${classes.floatingBtn}`} >
            <span className={classes.open}> {<i class="fa-solid fa-play"></i>} </span>
            <span className={classes.close}> {<i class="fa-solid fa-xmark"></i>} </span>
            <img src={miniplayerImg} alt="" />
            <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        </div>
    );
}