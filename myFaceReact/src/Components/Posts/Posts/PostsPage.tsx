import  {useState, useEffect} from "react";

 function PostsPage () {
    const [myData, setMyData] =  useState<post[]>([]);

type post = {
    id:number;
    message: string;
    postedBy: {name: string};
    imageUrl: string;
}


    useEffect (() => {
        fetch("http://localhost:3001/posts")
        .then(response => 
            response.json())
            .then(data => {
                console.log(data)
            setMyData(data.results)
    })
    .catch(error => console.error("error", error))}, []);

    return (
        <div>
             <h1>Posts</h1>
        {myData ? (
            <ul>
            {myData.map(post => (
                // <Postcard postName={post.name}/>
                    <li key={post.id} >
                        <div>
                            {post.message}
                            <br/>
                            Posted By: {post.postedBy.name}
                            <br/>
                        <img className="post-image" src={post.imageUrl}/>
                        </div>
                    </li>
            ))}
                </ul>
        ) : (
            <p>Loading...</p>
        )}
        </div>
)
 }

export default PostsPage;

