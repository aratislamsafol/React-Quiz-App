import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import classes from './assets/css/module/account.module.css';
export default function Account(){
    const {currentUser,Logout}=useAuth();
    return(
        <div className={classes.signUp}>
            <div class={classes.icon}>
                {currentUser ? <>
                    <span className=''><i className="fa-regular fa-user"></i></span>
                    <span>{currentUser.displayName}</span>
                    <Link href="" onClick={Logout} className={classes.logout}><i className="fa-solid fa-arrow-right-from-bracket"></i></Link>
                    </>:<>
                    <Link to="./signup"><i className="fa-regular fa-user">&nbsp;Signup</i></Link>&nbsp; &nbsp;
                    <Link to="./login"><i className="fa-regular fa-user">&nbsp;Login</i></Link>
                </>}
                
            </div>
            {/* <div className={classes.logout}>
                <Link href=""><i className="fa-solid fa-arrow-right-from-bracket"></i></Link>
            </div> */}
            
        </div>
    );
}