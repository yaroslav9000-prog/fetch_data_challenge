import { useState, useEffect } from "react";
import "./Comments.css";
import {Comment} from "../../../Model/commentsClass"
function Comments(): JSX.Element {
    const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";
    const [comments, setComments] = useState([]);
    
    useEffect(()=>{
        const fetchData = async () =>{
            
            try{
                const result = await fetch(COMMENTS_URL);
                const readyData = await result.json();
                console.log(readyData)
                setComments(readyData.map((item: {postId: number, id: number, name: string, email: string, body: string})=>new Comment(item.postId, item.id, item.name, item.email, item.body)));
            }catch(err){
                console.log(err);
            }

        }
        fetchData();
        
    }
        ,[]
    )


    return (
        <div className="Comments">
            <table>
                {comments.map((item: Comment)=><tr><td>{item.body}</td><td>{item.email}</td><td>{item.id}</td><td>{item.name}</td><td>{item.postId}</td></tr>)}
            </table>
        </div>
    );
}

export default Comments;
