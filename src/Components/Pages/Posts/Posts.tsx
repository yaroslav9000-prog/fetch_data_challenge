import "./Posts.css";
import {useState} from "react";
function Posts(): JSX.Element {
    const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
    
    const [posts, setPosts] = useState("Posts");

    return (
        <div className="Posts">
        </div>
    );
}

export default Posts;
