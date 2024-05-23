import "./Users.css";
import {useState} from "react";

function Users(): JSX.Element {
    const USERS_URL = "https://jsonplaceholder.typicode.com/users"
    
    const [users, setUsers] = useState("Users");

    return (
        <div className="Users">
			
        </div>
    );
}

export default Users;
