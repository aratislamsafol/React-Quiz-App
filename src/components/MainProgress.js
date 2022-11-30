import classes from './assets/css/module/progress.module.css';
import {Link} from 'react-router-dom';
export default function MainProgress({buttonText,complete}){
    return(
        <div className={classes.mainProgress}>
            <div className={classes.progressBar}>
                <div className={classes.progress}>
                    <span className={classes.toolTip}>{complete}</span>
                </div>
            </div>
            <Link to="/success">
                <button type="button" className={classes.progressButton}>{buttonText}</button>
            </Link>
        </div>
    );
}