
import { GiGemNecklace } from "react-icons/gi";
// import { ImageArr } from "../imagearr/ImageArr";
import { useContext, useEffect, useState } from "react";
import { Context } from "../Context/Context";
import { UseType } from "../TypeScript/Type";

export default function Sidebar() {

  let { categories,setCategory,isopen,setIsOpen}=useContext<UseType>(Context)
  

  const [categories1,setCategories1]=useState([])
    useEffect(()=>{
      fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            
            .then((data)=>{
              setCategories1(data)
            })
    },[])

    
    
  return (
    <div className=" ">
        <ul className={`bg-slate-200  h-full  text-black font-[500]  px-1  mt-[70px]  w-[200px] fixed `}> 
          <p>Category</p>
          {
            categories.map((val)=>{
              
              return (
                <li key={val} className="py-1 px-4 hover:text-red-500  flex"><GiGemNecklace className="pt-1 pr-2 text-[25px]"/><p className="pr-2" onClick={()=>setCategory(val)}>{val}</p>  </li>
              )
            })
          }
         <li  className="py-1 px-4 hover:text-red-500  flex"><GiGemNecklace className="pt-1 pr-2 text-[25px]"/><p className="pr-2" onClick={()=>setCategory(null)}>All Data</p>  </li>
         <li  className="py-1 px-4 hover:text-red-500  flex"><GiGemNecklace className="pt-1 pr-2 text-[25px]"/><p className="pr-2" onClick={()=>setIsOpen(!isopen)}>Close</p>  </li>
          
        </ul>
    </div>
  )
}
