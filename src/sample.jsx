import { useState,useEffect } from "react";

export default function Imagechanger({Time,initialvalue,Mainpath,array}={}){
     let time , mainpath,value,ar;
      if(Number.isFinite(Time)==true){
       time = Time;
      }
      else{
        time =  5000;
      }
      if(Number.isFinite(initialvalue)==true){
      value = initialvalue;
      }
      else{
      value = 0;
      }
      if(typeof(mainpath)=="string"){
      //console.log("this is string")
      mainpath = Mainpath;
      }
      else{
      //console.log("sio string")
       mainpath="../samples/";
      }
      if(Array.isArray(array)){
      ar = array 
      }
      else{
      ar =['0.png', '1.png','2.png',"3.png",'4.png'] ;
      }
      
      const [thevalue,setthevalue]=useState("")
     
       
      useEffect(() => {
        const myinterval = setInterval(()=>{
      setthevalue(mainpath + ar[value]); 
      value++;
      if(value >= ar.length){
          value = 0 ;
      }

      },time)

        return () => {
          clearInterval(myinterval);
        }
      }, [])
    return thevalue;
}
