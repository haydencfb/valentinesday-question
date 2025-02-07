import CenterBox from "../components/centerBox";
import classes from './third-page.module.css';
import usImg from '../assets/us2.jpg';

function ThirdPage() {

    return (
        <>
            <h1 className={`${classes.h1}`}> YOU HAD NO CHOICE !!!!! </h1>

            <div className={`${classes.boxDiv}`}>
                {/* <div className={`${classes.boxDiv2}`}>
                    <img src={usImg} alt="us" className={`${classes.heartImg}`}/>
                </div> */}
                <div className={`${classes.boxDiv1}`}>
                    <button className={`${classes.buttonClass1}`}>
                        click for cats lol
                    </button>
                </div>
            </div>
        </>
    )

}

export default ThirdPage;