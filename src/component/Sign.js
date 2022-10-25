import React, { useEffect,useState } from 'react'
import supabase from '../Supabase'



function Sign() {

  const [user, setuser] = useState(null);
  const [upemail, setupemail] = useState(null);
  const [uppassword, setuppassword] = useState(null);
  const [email, setemail] = useState(null);
  const [password, setpassword] = useState(null);
  const [username, setusername] = useState("");


const login=async()=>{
 
  const {data,error}=await supabase.auth.signIn({
    provider:"discord",
  })

}

const logingithub=async()=>{

  const {data,error}=await supabase.auth.signIn({
    provider:"github"
  })

}

const logout=async()=>{
  const {data,error}=await supabase.auth.signOut()
  setuser(null)
}
  
useEffect(()=>{

  const session=supabase.auth.session()
  console.log(session);

  setuser(session?.user)

},[user])



const signinwith=async()=>{
  if(!password || !email)
  {
    alert("fileds are missing in the signin form")
  }

  const {user,session,error}=await supabase.auth.signIn({
    email:email,
    password:password

  })

  if(error)
  {
    alert(error.message)
  }
  console.log(session.user)
  setuser(session.user)


}





  return (
    <>
    <div className='p-10'>
    <div className="px-20 mt-20">
  
    {user?
      <div><h1>user authenticated </h1>
      <button onClick={logout}>logout</button>
      </div>
  :(

    <div>
    <div className="box px-2 rounded-lg bg-red-300 m-auto w-1/4 text-center">
    <button onClick={login}  className='text-center  text-gray-900'>sign with discord </button>
    </div>
    <div className="box px-2 rounded-lg mt-5 bg-red-300 m-auto w-1/4 text-center">
    <button onClick={logingithub}  className='text-center text-gray-900'>sign with github </button>
   </div>
 


   <h1>signin with email and password </h1>
   <input type="email" placeholder='enter your email' className='text-black' onChange={(e)=>setemail(e.target.value)} value={email} /><br/>
   <input type="password" placeholder='enter the password here' className='text-black' onChange={(e)=>{setpassword(e.target.value)}} value={password} />
   <button onClick={signinwith}>sign with </button>


   </div>

   
    
   
    
  )}
  </div>
    
    </div>
    
    </>
  )
}

export default Sign