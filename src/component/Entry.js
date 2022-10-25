import React, { useState } from 'react'
import supabase from '../Supabase';

function Entry() {



const [name, setname] = useState(null);
const [mark, setmark] = useState(null);
const [fetcherror, setfetcherror] = useState(null)
const [imageka, setimageka] = useState(null)
const [image, setimage] = useState("")


const submitdata=async(e)=>{
    e.preventDefault();
    let imagetrip=""
    if(!name || !mark)
    {
      return setfetcherror("some fileds are missing in this entry");
    }
    if(imageka)
    {
      const {data,error}=await supabase.storage.from("ajx").upload(`${Date.now()}_${imageka.name}`,imageka)
     
      if(error)
      {
        alert(error.message);
      }
      
      if(data)
      {
        setimage(data.Key)
        imagetrip=data.Key
       console.log(imagetrip)
       
      }

    }

    const {data,error}=await supabase
    .from("student")
    .insert([{name,mark,imagetrip}])

    if(data)
    {
      return  setfetcherror("your data is successfully uploaded ");
    }
    if(error)
    {
      return 
       setfetcherror("fetching data failed")
        console.log(error);
    }

  
    
}

  return (
    <div>
    
    <div>
    <h1>add new entry here</h1>
    <form onSubmit={submitdata}>
    
    <input type="text" className='text-black' id="name" value={name}  placeholder="enter name here" onChange={(e)=>setname(e.target.value)} />
    <input type="Number" id="mark" className='text-black' value={mark} placeholder="enter mark here" onChange={(e)=>setmark(e.target.value)} />
    <input type="file" onChange={(e)=>setimageka(e.target.files[0])} />
    <button>submit data</button>
    {fetcherror && (
        <h2>{fetcherror}</h2>
    )}
    </form>
    </div>
    
    </div>
  )
}

export default Entry