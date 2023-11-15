import { useState } from "react";

const EditUser=()=>{
    

    
    
    const [name,setName]=useState();
  const [email,setEmail]=useState();
    const handleSubmit=()=>{
        
    }
    return (
        <>
        
        <div className="flex items-center justify-center h-screen">
      <div className="w-full p-8 bg-white shadow-md md:w-3/5 lg:ml-4">
        <div className="p-6 rounded shadow">
            <form onSubmit={handleSubmit}>
          <div className="pb-6">
            <label htmlFor="name" className="block pb-1 font-semibold text-gray-700">
              Name
            </label>
            <div className="flex">
              <input
               
                id="username"
                className="w-full px-4 py-2 rounded-r border-1"
                type="text"
                value={name}
                onChange={(e)=>setName(e.target.value)}
              />
            </div>
          </div>
          <div className="pb-4">
            <label htmlFor="about" className="block pb-1 font-semibold text-gray-700">
              Email
            </label>
            <input
            
              id="email"
              className="w-full px-4 py-2 rounded-r border-1"
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
            
          </div>
         
        
        
         
          
          
            
          <button type="submit" className="px-4 py-2 text-white bg-gray-500 rounded-md">Edit</button>

          </form>
        </div>
     
      </div>
    </div>
        </>



    )
}

export default EditUser