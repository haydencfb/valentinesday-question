import classes from './CenterBox.module.css';
import heartImg from '../assets/heart.webp';
import { Link, NavLink } from 'react-router-dom';

function CenterBox() {

    return (
        <>
            <div className={`${classes.boxDiv}`}>
                <div className={`${classes.boxDiv1}`}>
                    <Link to="/Second" className={`${classes.buttonClass}`}>
                        Click Me!
                    </Link>
                </div>
                <div className={`${classes.boxDiv2}`}>
                    <img src={heartImg} alt="heart" className={`${classes.heartImg}`}/>
                </div>
            </div>
        </>
    )

}

export default CenterBox;