import classes from './assets/css/module/progress.module.css';
export default function MainProgress({buttonText,complete,next,prev,submit}){
    return(
        <div className={classes.mainProgress}>
            <div className={classes.progressBar}>
                <div className={classes.progress} style={{width:`${complete}%`}}>
                    <span className={classes.toolTip}>{complete}%</span>
                </div>
            </div>
            {/* <Link to="/success"> */}
            <button type="button" className={classes.progressButton} onClick={complete===100?submit:next}>{complete===100?"Submit":buttonText}</button>
            {/* </Link> */}
        </div>
    );
}