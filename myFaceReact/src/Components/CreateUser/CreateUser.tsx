import  {useState, useEffect, type ChangeEvent} from "react";
import {useForm} from 'react-hook-form';

function CreateUser () {

const [name, setName] = useState("")
const [userName, setUserName] = useState("");
const [email, setEmail] = useState("")
const [coverImageUrl, setCoverImageUrl] = useState("");
const [profileImageUrl, setProfileImageUrl] = useState("");
const [isSubmitted, setIsSubmitted] = useState(false);
const [error, setError] = useState(false);
const [inputName, setInputName] = useState("");


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
    .then(isSubmitted => {
        setIsSubmitted(true)
        setName("")
        setUserName("")
        setEmail("")
        setCoverImageUrl("")
        setProfileImageUrl("")
})
    
    .catch(error => console.error("Error creating user:", error));
};
            
 

function isEmpty(event) {
    if(!event.target.value){
        console.log(event.target.name + " should not be empty");
        setError(true);
        setInputName(event.target.name);
    }
}

    return (
        <>
            <h1>In create user page </h1>
            <form onSubmit={handleSubmit}>

                <label>Name
                    <input type = "text" value ={name} name = "Name" onChange = {(e) => setName(e.target.value)} onMouseOut={(e) => isEmpty(e)}></input> 
                </label>
                <label>Username
                    <input type = "text" value ={userName} name = "Username" onChange = {(e) => {setUserName(e.target.value); isEmpty(e)}}></input>
                </label>
                <label>Email
                    <input type = "text" value ={email} name = "Email" onChange = {(e) => {setEmail(e.target.value); isEmpty(e)}}></input>
                </label>
                <label>Cover Image URL
                    <input type = "text" value ={coverImageUrl} name = "Cover Image URL" onChange = {(e) => {setCoverImageUrl(e.target.value); isEmpty(e)}}></input>
                </label>
                <label>Profile image URL
                    <input type = "text" value ={profileImageUrl} name = "Profile Image URL" onChange = {(e) => {setProfileImageUrl(e.target.value); isEmpty(e)}}></input>
                </label>
                    <button type = "submit" onClick={handleSubmit} >Submit</button>
            </form>
            <div>
                {isSubmitted ? 'User Created Successfully' : null }
            </div>
            <div>
                {error ? `${inputName} should not be empty` : null}
            </div>
 
        </>
    )
}


export default CreateUser;