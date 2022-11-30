import classes from './assets/css/module/videos.module.css';
import Card from "./Card";

export default function Videos(){
    return(
        <div className={classes.videos}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    );
}