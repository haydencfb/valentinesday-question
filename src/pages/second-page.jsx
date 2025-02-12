import classes from './second-page.module.css';
import { Link } from "react-router";

function SecondPage() {

    return (
        <>
            <h1 className={`${classes.h1}`}> Will you be my Valentine this year? </h1>

            <div className={`${classes.boxDiv}`}>
                <div className={`${classes.boxDiv1}`}>
                    <Link to="/Third" className={`${classes.buttonClass1}`}>
                        YES!
                    </Link>
                </div>
                <div className={`${classes.boxDiv1}`}>
                    <Link to="/Third" className={`${classes.buttonClass2}`}>
                        YES! (but red)
                    </Link>
                </div>
            </div>
        </>
    )

}

export default SecondPage;