import  {useState, useEffect} from "react";
import './UserPage.scss'

 function UserPage () {
    const [myData, setMyData] =  useState<user[]>([]);


type user = {
    id: number;
    name: string;
    username: string;
    email: string;
    profileImageUrl: string;
    coverImageUrl: string;
}


    useEffect (() => {
        fetch("http://localhost:3001/users/1/")
        .then(response => 
            response.json())
            .then(data => {
                console.log(data)
            setMyData(data)
    })
    .catch(error => console.error("error", error))}, []);

    return (
        <div>
             <h1 className="title">User</h1>
                    <li className='user-info' key={myData.id} >
                        <div>
                            {myData.name}
                            <br/>
                            Posted By: {myData.username}
                            <br/>
                        <img className="post-image" src={myData. profileImageUrl}/>
                        </div>
                    </li>
        
                </div>
)
 }

export default UserPage;

