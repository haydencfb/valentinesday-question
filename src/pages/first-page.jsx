import CenterBox from "../components/CenterBox.jsx";
import classes from './first-page.module.css';

function FirstPage() {

    return (
        <>
            <h1 className={`${classes.h1}`}> Hello Lovely </h1>
            <CenterBox />
        </>
    )

}

export default FirstPage;