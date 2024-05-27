import { User } from "../../../Model/userClass";
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
                setUsers(readyData.map((item:{address: any, company: any, email: string, id: number, name: string, phone: string, username: string, website: string})=>
                    new User(item.address, item.company, item.email, item.id, item.name, item.phone, item.username, item.website)
                ));
            }catch(err){
                console.log(err);
            }

        }
        fetchData();
        console.log(users)
    }
        ,[]
    )
    return (
        <div className="Users">
            <table>
			{users.map((item : User)=> <tr><td>{item.address.street}</td><td>{item.company.name}</td><td>{item.email}</td><td>{item.id}</td><td>{item.name}</td><td>{item.phone}</td><td>{item.username}</td><td>{item.website}</td></tr>)}
            </table>
        </div>
    );
}

export default Users;
