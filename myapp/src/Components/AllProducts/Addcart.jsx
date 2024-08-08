import axios from "axios"

export const AddCarts  =async(e)=>{
    const user =  localStorage.getItem("id")
   if(user){
    try{
        const res = await axios.get(`http://localhost:3000/users/${user}`)
        const cart = res.data.cart
        const updateCart ={
          ...cart,
          [e.id]:e,
        }
        await axios.patch(`http://localhost:3000/users/${user}`,{cart : updateCart})
        console.log(updateCart);
    
       }catch(err){
          console.log(err);
          
       }
   }else{
    alert("pleas LogIn")
   }
}
 
export const RemovCart =async(e)=>{
    const user =  localStorage.getItem("id")
    const res = await axios.get(`http://localhost:3000/users/${user}`)
    const cart = res.data.cart
    const {[e.id]:remove,...news} = cart
    
    
    await axios.patch(`http://localhost:3000/users/${user}`,{cart : news})
}