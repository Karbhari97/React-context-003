import { createContext } from "react";
import { useState } from "react";
import App from "../App";

const ref=createContext();
export default ref;


export function Style(){
  let [color , setColor]=useState({bgcolor:"white",textcolor:"black",theme:"black"})

  const toggle=()=>{
    if(color.bgcolor==="white"){
        setColor({
            bgcolor:"black",textcolor:"white",theme:"white"
        })

    }else{
        setColor({
            bgcolor:"white",textcolor:"black",theme:"black"
        })

    }
  }

  



    return <div>
        <ref.Provider value={{color:color.bgcolor,textcolor:color.textcolor,toggle,theme:color.theme}} >
         <App/>
        </ref.Provider>
    </div>
}