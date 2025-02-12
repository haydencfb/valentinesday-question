import classes from './third-page.module.css';
import { Link } from "react-router";

function ThirdPage() {

    return (
        <>
            <h1 className={`${classes.h1}`}> YOU HAD NO CHOICE !!!!! </h1>

            <div className={`${classes.boxDiv}`}>
                {/* <div className={`${classes.boxDiv2}`}>
                    <img src={usImg} alt="us" className={`${classes.heartImg}`}/>
                </div> */}
                <div className={`${classes.boxDiv1}`}>
                    <Link to="https://www.pexels.com/search/cat/" className={`${classes.buttonClass1}`}>
                        click for cats lol
                    </Link>
                </div>
            </div>
        </>
    )

}

export default ThirdPage;