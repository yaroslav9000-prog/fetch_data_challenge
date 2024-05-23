import { useState, useEffect } from "react";
import "./Comments.css";

function Comments(): JSX.Element {
    const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";
    const [comments, setComments] = useState([]);
    
    useEffect(()=>{
        const fetchData = async () =>{
            
            try{
                const result = await fetch(COMMENTS_URL);
                const readyData = await result.json();
                console.log(readyData)
                setComments(readyData);
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
            <ul style={{display: "flex", flexDirection: "column", listStyle: "initial"}}>
                {comments.map((item, index)=>(<li key={index} style={{paddingBottom: "1em"}}>{JSON.stringify(item)}</li>))}
            </ul>
        </div>
    );
}

export default Comments;
