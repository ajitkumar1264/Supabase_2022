
import { Link,useNavigate} from "react-router-dom"
import supabase from "../Supabase"
const Data=({dat})=>{

  const nav=useNavigate();

  const deletenode=async()=>{

    const {data,error}= await supabase
    .from("student")
    .delete()
    .eq("id",dat.id);

    if(data)
    {
      console.log(data);
      alert("data successfully deleted");
      nav("/")

    }
    if(error)
    {
      alert("error is generated")
    }


  }
  return (
                <div className="mb-10" >
                <div className="mb-5 ">
                <div className="box border-4 p-5 space-y-4  rounded-xl border-green-500 text-center flex-raw m-auto w-1/3">
                <h3 className="text-3xl">{dat.name}</h3>
                <h3 className="">{dat.mark}</h3>

                <img src={`https://filjnazecwpzqqslkkoj.supabase.co/storage/v1/object/public/${dat.imagetrip}`} alt="" />
                
                <div className=" border-2 border-blue-500 px-2 w-1/2 rounded-xl m-auto">
                <Link to={`/${dat.id}`}><button>update</button></Link>
                </div>
                
                <br />
             <div className=" border-2 border-blue-500 px-2 w-1/2 rounded-xl m-auto">
             <div className="w-1/2 text-center m-auto"><button onClick={deletenode}>delete</button>
             </div></div>
                </div>
                </div>
                </div>
  )
}

export default Data