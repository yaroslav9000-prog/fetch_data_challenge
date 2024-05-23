import "./Users.css";
import {useEffect, useState} from "react";

function Users(): JSX.Element {
    const USERS_URL = "https://jsonplaceholder.typicode.com/users"
    
    const [users, setUsers] = useState([]);
    
    useEffect(()=>{
        const fetchData = async () =>{
            
            try{
                const result = await fetch(USERS_URL);
                const readyData = await result.json();
                console.log(readyData)
                setUsers(readyData);
            }catch(err){
                console.log(err);
            }

        }
        fetchData();
    }
        ,[]
    )
    return (
        <div className="Users">
			<ul style={{display: "flex", flexDirection: "column", listStyle: "initial"}}>
                {users.map((item, index)=>(<li key={index} style={{paddingBottom: "1em"}}>{JSON.stringify(item)}</li>))}
            </ul>
        </div>
    );
}

export default Users;
