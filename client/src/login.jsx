
import { useState } from "react";
import axios from "axios";


function Login(){
const [name,setname]=useState("")
const [password,setPassword]=useState("")

const handlesubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3034/register',{name,password})
    .then(result=>{console.log(result)})
    .catch(err=>console.log(err))
}
return (
    <div>
        <div>
            <center><h2>Register</h2></center>
            <br>
            </br>
            
            <form onSubmit={handlesubmit}><center>
                <table>
                    <div>
                <tr>
                    <td>
                    <label htmlFor="UserName">
                        <strong>UserName</strong></label></td>
               
                    <td><input type="text" placeholder="UserName" autoComplete="off"
                    name="UserName" onChange={(e)=> setname(e.target.value)} required/></td>
                    </tr>
                    <tr>
                    <td>
                    <label htmlFor="Password">
                        <strong>Password</strong></label></td>
               
                    <td><input type="text" placeholder="Set Password" autoComplete="off"
                    name="Password" onChange={(e)=> setPassword(e.target.value)} required/></td>
                    </tr>
                    </div>
                </table>
                <div>
                    <br></br>
                <center><button type="submit" className="submit" >Register</button></center>
            </div>
            </center></form>
            <br>
            </br>
            <hr/>
            <center><div>Already have an account</div></center>
            <div>
            <center><Link to="/log" className="submit">login</Link></center>
            </div>

        </div>
    </div>
);
}
export default Login;