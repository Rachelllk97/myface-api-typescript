import  {useState, useEffect} from "react";
import './UserPage.scss'
import { useParams } from "react-router"

 function UserPage () {
    const [myData, setMyData] =  useState<user>();
  const {userId} = useParams()


type user = {
    id: number;
    name: string;
    username: string;
    email: string;
    profileImageUrl: string;
    coverImageUrl: string;
}


    useEffect (() => {
        if(!userId) return;

        fetch(`http://localhost:3001/users/${userId}/`)
        .then(response => 
            response.json())
            .then(data => {
                console.log(data)
            setMyData(data)
    })
    .catch(error => console.error("error", error))},[userId] );

    return (
        <div>
        {myData && myData.id? (
        
        <>
             <h1 className="title">User</h1>
             <ul>
                    <li className='user-info' key={myData.id} >
                        <div>
                            {myData.name}
                            <br/>
                            Posted By: {myData.username}
                            <br/>
                        <img className="post-image" src={myData. profileImageUrl}/>
                        </div>
                    </li>
                    </ul>
        </>
            
) : (
<p> Loading ...</p>)
 }
 </div>
    )
 }
export default UserPage;

