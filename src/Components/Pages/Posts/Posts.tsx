import "./Posts.css";
import {useState, useEffect} from "react";
function Posts(): JSX.Element {
    const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
    
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        const fetchData = async () =>{
            
            try{
                const result = await fetch(POSTS_URL);
                const readyData = await result.json();
                console.log(readyData)
                setPosts(readyData);
            }catch(err){
                console.log(err);
            }

        }
        fetchData();
    }
        ,[]
    )

    return (
        <div className="Posts">
            <ul style={{display: "flex", flexDirection: "column", listStyle: "initial"}}>
                {posts.map((item, index)=>(<li key={index} style={{paddingBottom: "1em"}}>{JSON.stringify(item)}</li>))}
            </ul>
        </div>
    );
}

export default Posts;
