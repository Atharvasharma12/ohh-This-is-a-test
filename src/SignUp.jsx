import React, {useState} from "react";
import "./SignUp.css";

function SignUp(){

const [userData,setuserData] = useState({name:"", userName:"", userpassword:""});


let key,value;
const handle_Input=(e)=>{
    console.log(userData    );
    key = e.target.id;
    value = e.target.value;
    setuserData({...userData, [key] : value });
}

return(
    
        <form action="" className="SignUpForm">
            <div className="signUpBox">
        <h3>SIGN UP</h3>
        <span>Name</span><br />
        <input type="text" name="" class="namebox" placeholder="Your good name" id="name"
            value = {userData.name}
             onChange = {handle_Input}
        ></input><br />
        <span>Username</span><br />
        <input type="email" name="" class="username" placeholder="enter your email" id="userName"
        value = {userData.userName}
        onChange = {handle_Input}
        ></input><br />
        <span>Password</span><br />
        <input type="password" name="" class="box" placeholder="enter your password" id="userpassword"
             value = {userData.userpassword}
             onChange = {handle_Input}
             ></input><br />
        <input type="submit" value="Sign Up" class="btn" />
            </div>
        </form>
    
    
)


}
export default SignUp;