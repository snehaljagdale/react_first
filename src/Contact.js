import React,{useState} from 'react'
function Contact(props)
{ 
    const [val, setval]= useState("snehal")
    const test =(e)=>
    {
        console.warn("test function",e.target.value)
        setval(e.target.value)
    }
     return(
         <div> 
             <h1>Contact us page</h1>
             <input type="text" value={val} onChange={test}/> 
             <button onClick={()=>alert(val)}>Click me</button>
         </div>
     )
}
export default Contact;
