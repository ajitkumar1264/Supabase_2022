import React,{useState,useEffect} from 'react'
import {useParams,useNavigate} from "react-router-dom"
import supabase from '../Supabase';


function Update() {

  const {id} =useParams();
  const nav=useNavigate();
const [name, setname] = useState("");
const [mark, setmark] = useState("");
const [fetcherror, setfetcherror] = useState(null);


const handlesubmit=async(e)=>{
 e.preventDefault();
 if(!name || !mark)
 {
  return setfetcherror("some fileds are missing in this document");
 }

 const {data,error}=await supabase
 .from("student")
 .update({name,mark})
 .eq("id",id)

 if(data)
 {
  console.log(data);
  alert("successfully data updated")
  nav("/")
 }
 if(error)
 {
  return setfetcherror("error getting while fetching document");
 }
}


const submitdata=async()=>{

  const {data,error}=await supabase
  .from("student")
  .select()
  .eq("id",id)
  .single()


  if(data)
  {
    setname(data.name);
    setmark(data.mark);
    console.log(data);
    
     
  }
  if(error)
  {  nav("/")
     setfetcherror("error fetching document");
  }

}

useEffect(() => {

  submitdata();
  

 
}, [id])

  return (
    <>
    <h1>{id}</h1>

    <form onSubmit={handlesubmit} >
    
    <input type="text" id="name" value={name}  className="text-black"  placeholder="enter name here" onChange={(e)=>setname(e.target.value)} />
    <input type="Number" id="mark" value={mark}  className="text-black place-content-center"  placeholder="enter mark here" onChange={(e)=>setmark(e.target.value)} />
    <button>submit data</button>
    {fetcherror && (
        <h2>{fetcherror}</h2>
    )}
    </form>

    
    </>
  )
}

export default Update