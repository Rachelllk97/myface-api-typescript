import  {useState, useEffect} from "react";
import './CreateUser.scss'

function CreateUser () {

const [name, setName] = useState("")
const [userName, setUserName] = useState("");
const [email, setEmail] = useState("")
const [coverImageUrl, setCoverImageUrl] = useState("");
const [profileImageUrl, setProfileImageUrl] = useState("");
const [isSubmitted, setIsSubmitted] = useState(false);
const [errors, setErrors] = useState({});
const [isFormValid, setIsFormValid] = useState(false);

//figure out how to not show the error until someone has started typing


type Errors = {
    name: string;
    username: string;
    email: string;
    coverImageUrl: string;
    profileImageUrl: string;
}




useEffect(() => {
validateForm();
}, [name, userName, email, coverImageUrl, profileImageUrl]);

const validateForm = () => {
const newErrors: Errors = {} as Errors;
if (!name) newErrors.name = 'Name is required.';
if (!email) newErrors.email = 'Email is required.';
else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid.';
if (!coverImageUrl) newErrors.coverImageUrl = 'Cover image url is required';
if (!profileImageUrl) newErrors.profileImageUrl = 'Profile image url is required';
if (!userName) newErrors.username = 'Username is required.'
else if (!/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(userName)) newErrors.username = 'Username is invalid.'
setErrors({...newErrors});
setIsFormValid(Object.keys(newErrors).length === 0);
};


const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (isFormValid) {
    console.log('Form submitted successfully!');
    } else {
    console.log('Form has errors. Please correct them.');
    }

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
         {console.log("User created:", data)
        setIsSubmitted(true)
        setName("")
        setUserName("")
        setEmail("")
        setCoverImageUrl("")
        setProfileImageUrl("")}
)
.catch(error => console.error("Error creating user:", error));
}        


    return (
        <>
            <h1>In create user page </h1>
            <form onSubmit={handleSubmit}>

                <label>Name
                    <input type = "text" value ={name} name = "Name" color={colour} onChange = {(e) => setName(e.target.value)}></input> 
                </label>
                <label>Username
                    <input type = "text" value ={userName} name = "Username" onChange = {(e) => {setUserName(e.target.value)}}></input>
                </label>
                <label>Email
                    <input type = "text" value ={email} name = "Email" onChange = {(e) => {setEmail(e.target.value)}}></input>
                </label>
                <label>Cover Image URL
                    <input type = "text" value ={coverImageUrl} name = "Cover Image URL" onChange = {(e) => {setCoverImageUrl(e.target.value)}}></input>
                </label>
                <label>Profile image URL
                    <input type = "text" value ={profileImageUrl} name = "Profile Image URL" onChange = {(e) => {setProfileImageUrl(e.target.value)}}></input>
                </label>
                    <button type = "submit" >Submit</button>
            </form>
            <div>
                {isSubmitted ? 'User Created Successfully' : null }
            </div>
            <div>
               {Object.values<string>(errors).map((error, index) => (
                <p key={index}>{error}</p>
))}
            </div>
 
        </>
    )
}


export default CreateUser;