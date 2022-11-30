import Account from "./Account";
import Brand from "./Brand";

export default function Wrapper({children}){
    return (
        <div className="wrapper">
            <div className="navbar">
                <Brand />
                <Account />
            </div>
        </div>
    );
}