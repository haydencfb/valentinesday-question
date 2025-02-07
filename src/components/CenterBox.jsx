import classes from './CenterBox.module.css';
import heartImg from '../assets/heart.webp';

function CenterBox() {

    return (
        <>
            <div className={`${classes.boxDiv}`}>
                <div className={`${classes.boxDiv1}`}>
                    <button className={`${classes.buttonClass}`}>
                        Click Me!
                    </button>
                </div>
                <div className={`${classes.boxDiv2}`}>
                    <img src={heartImg} alt="heart" className={`${classes.heartImg}`}/>
                </div>
            </div>
        </>
    )

}

export default CenterBox;