import logo from './assets/images/logo2.png';
import classes from './assets/css/module/brand.module.css';
import Image from "./Image";
import {Link} from 'react-router-dom';
export default function Brand(){
    return(
        <div className={classes.logo}>
            <Link to="/">
                <Image src={logo} logoImg={classes.logoImg} />
            </Link>
           
        </div>
    )
}