import React from 'react'
import { Link} from 'react-router-dom'


function Navbar() {
  return (
    <>
    <div className=" bg-green-500 p-10">
    <div className=" flex justify-between items-baseline">
    <div className='text-4xl font-semibold'>
        <h1>Supabase_2022</h1>
        </div>

<div className="flex justify-start gap-10 font-sans text-xl">
    <Link to="/"><h2>Home page</h2></Link>
    <Link to="/new"><h2>add new entry</h2></Link>
    <Link to="/login"><h2>LOGIN</h2></Link>
    <Link to="/loginwin"><h2>Sign Up</h2></Link>
    
    </div>
    </div>
    </div>
    </>
  )
}

export default Navbar