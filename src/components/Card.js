import classes from './assets/css/module/card.module.css';
import {Link} from 'react-router-dom';
import Image from './Image';
export default function Card({title,id,noq}){
    return(
        <div className={classes.card} key={id}>
            {noq>0? 
            <Link to={`/quiz/${id}`}>
                <Image src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`} alt={title} />
                <div className={classes.content}>
                    <h4>{title}</h4>
                </div>
            </Link>:<div>
                <Image src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`} alt={title} />
                    <div className={classes.content}>
                        <h4>{title}</h4>
                    </div>
            </div>}
           
            <div className={classes.qmeta}>
                <p>{noq} Question</p>
                <p>Total Points : {noq *5}</p>
            </div>
        </div>
    );
}