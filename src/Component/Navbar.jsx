import { useContext } from "react"
import { AuthContext } from "../Context/AuthContextProvider"

export default function Navbar(){

    const [{isAuth},toggleAuth]= useContext(AuthContext);
    return (
         <div>
             This is a Navbar
             <div>
             {
                isAuth ? (
                <button onClick={()=>toggleAuth(true)}>Login</button>
                ):(<button onClick={()=>toggleAuth(false)}>Logout</button>)
             }
             </div>
         </div>
    )
}