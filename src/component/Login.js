import React, { useEffect,useState } from 'react'
import supabase from '../Supabase'

function Login() {

  const [upemail, setupemail] = useState(null);
  const [uppassword, setuppassword] = useState(null)

    const signwith=async()=>{
      if(!uppassword || !upemail)
      {
        alert("fileds are missing in the signup form")
      }
    
      const {user,session,error}=await supabase.auth.signUp({
        email:upemail,
        password:uppassword
    
      })
    
      if(user)
      {
        alert("successfully sign up")
      }
      if(error)
      {
        alert(error.message)
      }
    }
  return (
    <div>
    
    <h1>signup with email and password </h1>
   <input type="email" placeholder='enter your email' className='text-black' onChange={(e)=>setupemail(e.target.value)} value={upemail} /><br/>
   <input type="password" placeholder='enter the password here' className='text-black' onChange={(e)=>{setuppassword(e.target.value)}} value={uppassword} />
   <button onClick={signwith}>siup with </button>
    
    
    </div>
  )
}

export default Login