import "./Header.css";
import { NavLink } from "react-router-dom";
function Header(): JSX.Element {
    return (
        <ul className="Header">
			<NavLink to="/users"><li>Users</li></NavLink>
            <NavLink to="/posts"><li>Posts</li></NavLink>
            <NavLink to="/comments"><li>Comments</li></NavLink>
        </ul>
    );
}

export default Header;
