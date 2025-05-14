import  {useState, useEffect} from "react";
import {useForm} from 'react-hook-form';

function CreateUser () {

const [name, setName] = useState("")
const [userName, setUserName] = useState("");
const [email, setEmail] = useState("")
const[coverImageUrl, setCoverImageUrl] = useState("");
const [profileImageUrl, setProfileImageUrl] = useState("");


type CreateUserRequest = {
    name: string;
    username: string;
    email: string;
    coverImageUrl: string;
    profileImageUrl: string;
}



const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    fetch("http://localhost:3001/users/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: name,
            username: userName,
            email: email,
            coverImageUrl: coverImageUrl,
            profileImageUrl: profileImageUrl,
        }),
    })
    .then(data => 
         console.log("User created:", data))
    .catch(error => console.error("Error creating user:", error));
};
            
 const {reset} = useForm({name: '',
                    undefinedserName: '',
                    email:'',
                    coverImageUrl:'',
                    profileImageUrl:''});
 


    return (
        <>
          <h1>In create user page </h1>
          <form onSubmit={handleSubmit}>

            <label>Name
            <input type = "text" value ={name} onChange = {(e) => setName(e.target.value)} ></input> 
            </label>
            <label>Username
            <input type = "text" value ={userName} onChange = {(e) => setUserName(e.target.value)}></input>
            </label>
            <label>Email
            <input type = "text" value ={email} onChange = {(e) => setEmail(e.target.value)}></input>
            </label>
            <label>Cover Image URL
            <input type = "text" value ={coverImageUrl} onChange = {(e) => setCoverImageUrl(e.target.value)}></input>
            </label>
            <label>Profile image URL
            <input type = "text" value ={profileImageUrl} onChange = {(e) => setProfileImageUrl(e.target.value)}></input>
            </label>
            <button type = "submit" onClick={() => form.reset()} >Submit</button>
          </form>
        </>
    )
}


export default CreateUser;