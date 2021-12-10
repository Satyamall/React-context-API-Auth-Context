import { useState } from "react"


export default function Form({onTask}){

    const [text,setText]=useState({
        email: "",
        password: ""
    });

    const handleChange=(e)=>{
        var {name,value}=e.target;
        setText({
            ...text,
            [name]: value
        })
    }

    const handleClick=(e)=>{
        e.preventDefault();
        onTask(text);
    }

    return(
        <form onSubmit={handleClick}>
            <input 
                placeholder='email' 
                name='email' 
                value={text.email} 
                onChange={handleChange} />
            <input 
                placeholder='password' 
                name='password' 
                value={text.password} 
                onChange={handleChange}/>
            <input type='submit' value="SUBMIT"/>
        </form>
    )
}