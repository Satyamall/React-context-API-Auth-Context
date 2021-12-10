
import axios, { useContext,useState } from "react";
import { AuthContext } from "../Context/AuthContextProvider";
import Form from "./Form";

export default function Login(){

    const [token,setToken]=useState([]);

    const handleTask=async({email,password})=>{

       try{

           const payload={
               email: email,
               password: password
           }
           const config={
               url: `https://reqres.in/api/login`,
               method: "post",
               data: payload
           }
           const data=await axios(config);
           setToken(data.data.token);
           console.log(data);
           console.log(token)
       }
       catch(err){

       }
    }


    const [{isAuth}]=useContext(AuthContext);

    if(isAuth)
    {
        return (
            <div>
               <Form onTask={handleTask}/>
            </div>
        );
    }
    else{
        return (
            <div>
              <h3>Please sign in to continue</h3>
            </div>
          );
    }
}