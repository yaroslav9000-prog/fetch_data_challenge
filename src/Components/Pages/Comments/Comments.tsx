import { useState } from "react";
import "./Comments.css";

function Comments(): JSX.Element {
    const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";
    const [comments, setComments] = useState<String>("Comments");
    
    return (
        <div className="Comments">

        </div>
    );
}

export default Comments;
