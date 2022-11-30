import classes from '../assets/css/module/main.module.css';
import Wrapper from "../Wrapper";

export default function Layout({children}){
    return(
        <>
            <Wrapper />
            <div className={classes.main}>
                <div className={classes.container}>
                    {children}
                </div>
            </div>
        </>
    );
}