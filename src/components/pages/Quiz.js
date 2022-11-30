import Answers from "../Answer";
import classes from '../assets/css/module/topics.module.css';
import MainProgress from "../MainProgress";
import MiniPlayer from "../MiniPlayer";

export default function Quiz(){
    return (
        <>
            <div className={classes.topics}>
                <h2>Pick three of your favorite Star Wars Flims</h2>
                <p>Question can havae multiple answers</p>
            </div>
            <Answers />
            <MainProgress buttonText="Next Question" complete="25% complete" />
            <MiniPlayer />
        </>
    );
}