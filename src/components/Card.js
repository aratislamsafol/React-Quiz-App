import classes from './assets/css/module/card.module.css';
import cardContent from './assets/images/3.jpg';
import {Link} from 'react-router-dom';
import Image from './Image';
export default function Card(){
    return(
        <div className={classes.card}>
            <Link to="/quiz">
                <Image src={cardContent} alt="" />
                <div className={classes.content}>
                    <h4>React Hook Bangla - React useReducer hook Bangla</h4>
                </div>
            </Link>
            <div className={classes.qmeta}>
                <p>10 Questions</p>
                <p>Score : Not taken yet</p>
            </div>
        </div>
    );
}