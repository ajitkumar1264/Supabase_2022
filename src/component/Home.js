import React,{useState,useEffect} from 'react'
import supabase from '../Supabase'
import Data from './Data';

function Home() {
    console.log(supabase)

const [fetcherror, setfetcherror] = useState(null);
const [data, setdata] = useState(null);
const [filter, setfilter] = useState("created_at");


useEffect(() => {
 
    const fetchdata=async()=>{
        const {data,error}=await supabase
        .from("student")
        .select()
        .order(filter,{ascending:false})

        if(error)
        {
            setfetcherror("couldn't fetch data");
            console.log(error);
            setdata(null);
        }
        if(data)
        {
            setdata(data);
            setfetcherror(null);
            console.log(error);
        }
    }

    fetchdata();

}, [filter,data])


  return (
   <>
   <div className="p-10">
   <div className="px-20">
   <div className="mt-10 text-3xl mb-10">
   <h1>Total data</h1>
   </div>
   <div className='mx-10'>
   <div className="mb-10 flex gap-5">
  <div className="box rounded-lg text-black border-2 bg-red-400 px-3"> <button onClick={()=>setfilter("created_at")}>created_at</button></div>
  <div className="box rounded-lg text-black border-2 bg-red-400 px-3">  <button onClick={()=>setfilter("name")}>name</button></div>
  <div className="box rounded-lg text-black border-2 bg-red-400 px-3">   <button onClick={()=>setfilter("mark")}>Mark</button> </div>
  
   {filter}
   </div>
   
   {fetcherror && (
    <h2>{fetcherror}</h2>
   )}
   {data && (
    <div className='data'>
    {
        data.map(data=>(
            <Data key={data.id} dat={data}/>
            )
        )
    }
    </div>
   )}
   </div>
   </div>
   </div>
   </>

  )
}

export default Home