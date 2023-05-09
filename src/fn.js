import { useState,useEffect } from "react"
import "./App.css";
import axios from "axios"
import { response } from "express";

const eshop = {

name: '',
number: '',
gender :'',


}

const [shop,setvshop] = useState([]);
const [mode, setmode] = useState(add);
const [eeshop,setEEshop] = useState(eshop);
 useEffect(()=>{
try {
      async function fectchData() {
            
    const response = await  axios.put('')
    setvshop(response.data);


    } catch (err) {
        console.error(err)
    
    }

 fectchData();

},[]);

const handlesubmit =async (e) => {

if(mode === add)
try {
const response =await axios.post('')

setvshop(shop == response.data)
setshop(vshop)
setmode(add)
}catch(err) {

    console.log(err)

}
else (mode === delete){



    const response = awat axios.delete('') 

    const shop = shop.filter [ s=>s_id === ! response.vshop  ] 
    setmode(add);
    setshop(vshop);
    















}

}






}





const fn = () => {


  return (
    <>
      

    </>
  )

  }
export default fn
