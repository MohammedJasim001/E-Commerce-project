import axios from "axios";

export const AddPersonTO = async(data)=>{
     try{
    
      await  axios.post("http://localhost:3000/person",data)
      
      
     }catch(err){
        console.log("errr");
        
     }
}

export const CheckUSer = async ()=> {

}