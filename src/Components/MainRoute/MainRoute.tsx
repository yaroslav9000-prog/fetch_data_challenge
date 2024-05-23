import Comments from "../Pages/Comments/Comments";
import MainPage from "../Pages/MainPage/MainPage";
import Posts from "../Pages/Posts/Posts";
import Users from "../Pages/Users/Users";
import "./MainRoute.css";
import {Route, Routes} from "react-router-dom";
function MainRoute(): JSX.Element {
    return (
        <div className="MainRoute">
			<Routes>
                <Route path="/users" element={<Users/>}/>
                <Route path="/posts" element={<Posts/>}/>
                <Route path="/comments" element={<Comments/>}/>
                <Route path="/" element={<MainPage/>}/>
            </Routes>
        </div>
    );
}

export default MainRoute;
