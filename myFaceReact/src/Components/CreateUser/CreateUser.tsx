import  {useState, useEffect} from "react";

function CreateUser () {

const [name, setName] = useState("")
const [userName, setUserName] = useState("");
const [email, setEmail] = useState("")
  const [value, setValue] = useState("");
    const [result, setResult] = useState("");


console.log(value)

// type CreateUserRequest = {
//     name: string;
//     username: string;
//     email: string;
//     coverImageUrl: string;
//     profileImageUrl: string;
// }

 useEffect (() => {
        fetch("http://localhost:3001/users/create", {method: 'POST',
            body: JSON.stringify({
            "userName": value})}

        /*.then(response => 
            response.json())
            .then(data => {
                console.log(data)
            setMyData(data)
    })
    .catch(error => console.error("error", error))}, []);*/



// router.post('/create/',
//     body('name').notEmpty(),
//     body('username').notEmpty().isLowercase().not().contains(" "),
//     body('email').notEmpty().isEmail(),
//     body('coverImageUrl').notEmpty(),
//     body('profileImageUrl').notEmpty(),
//     async (request, response) => {

const handleSubmit = (event) => {
        event.preventDefault();

        if (!value.trim()) {
            alert("Input cannot be empty!");
        } else {
            setResult(value);
            alert("Form submitted successfully!");
        }
    };

    const handleChange = (event) => {
            (event.target.value);
        setResult(""); 
    };



    return (
        <>
          <h1>In create user page </h1>
          <form onSubmit={handleSubmit}>
            <label>Name
            <input type = "text" name={name} setName={setName} onChange={handleChange}></input> 
            </label>
            <label>Username
            <input type = "text" username={userName} setUserName={setUserName} onChange={handleChange}></input> 
            </label>
            <label>Email
            <input type = "text" email={email} setEmail={setEmail} onChange={handleChange}></input> 
            </label>
            <label>Cover Image URL 
            <input type = "text" email={email} setEmail={setEmail} onChange={handleChange}></input> 
            </label>

            <button type = "submit" >Submit</button>
          </form>
                <p>Result: {result}</p>
        </>
    )
}


export default CreateUser;