import "./Posts.css";
import {useState, useEffect} from "react";

import { Post } from "../../../Model/postClass";
function Posts(): JSX.Element {
    const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
    
    const [posts, setPosts] = useState<Post[]>([]);
    
    useEffect(()=>{
        const fetchData = async () =>{
            
            try{
                const result = await fetch(POSTS_URL);
                const readyData = await result.json();
                console.log(readyData)
                setPosts(readyData.map((item:{body: string, id: number, title: string, userId: string})=> {return new Post(item.body, item.id, item.title, item.userId)}));
                  console.log(posts);
            }catch(err){
                console.log(err);
            }

        }
        fetchData();
        console.log(posts);
    }
        ,[]
    )

    return (
        <div className="Posts">
            <table>
                {posts.map(item=> <tr><td>{item.body}</td><td>{item.id}</td><td>{item.title}</td><td>{item.userId}</td></tr>)}    
            </table>            
        </div>
    );
}

export default Posts;
