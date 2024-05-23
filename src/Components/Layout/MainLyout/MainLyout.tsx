import Header from "../../Header/Header";
import MainRoute from "../../MainRoute/MainRoute";
import "./MainLyout.css";

function MainLyout(): JSX.Element {
    return (
        <div className="MainLyout">
			<header>
                <Header/>
            </header>
        <main>
            <MainRoute/>
        </main>
        </div>
    )
}

export default MainLyout;
