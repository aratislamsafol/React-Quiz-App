import {Link} from 'react-router-dom';
import classes from './assets/css/module/account.module.css';
export default function Account(){
    return(
        <div className={classes.signUp}>
            <div class={classes.icon}>
                <Link to="./signup"><i className="fa-regular fa-user">&nbsp;Signup</i></Link>
                &nbsp;
                &nbsp;
                <Link to="./login"><i className="fa-regular fa-user">&nbsp;Login</i></Link>
            </div>
            {/* <div class={classes.logout}>
                <Link href=""><i className="fa-solid fa-arrow-right-from-bracket"></i></Link>
            </div> */}
            
        </div>
    );
}