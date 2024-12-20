import { useContext } from 'react';
// import logo from '../image/logo.jpeg'
import { FaCartArrowDown } from "react-icons/fa";
// import { FaUser } from "react-icons/fa";
import { Context } from '../Context/Context';
import {Outlet, Link } from 'react-router-dom';
import { MdAddToPhotos } from "react-icons/md";


export default function Header() {
  let {setfilterData,setIsOpen,isopen}:any=useContext(Context)
  const Values=(e:any)=>{
    setfilterData(e.target.value)
  }
  const HideSideBar=()=>{
    setIsOpen(!isopen)

  }
  return (
 
    <div>
      <div className="flex justify-between bg-slate-100 py-4 text-black fixed w-full z-50">
      <ul className="flex pl-5">
          {/* <li className="pr-5 hover:underline hover:text-blue-500"><img src={logo} className='w-[80px] mt-[5px]'/></li> */}
         
          <li className="pr-5 hover:underline hover:text-blue-500 font-semibold"><Link to='/' onClick={HideSideBar}><svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 hover:text-gray-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg></Link></li>
          <li className="pr-5 hover:underline hover:text-blue-500 font-semibold"><Link to='/'>Home</Link></li>
          
          <li className="pr-5 hover:underline hover:text-blue-500 font-semibold"><Link to="/blog">Blog</Link></li>
          <li className="pr-5 hover:underline hover:text-blue-500 font-semibold"><Link to="/service">Service</Link></li>
          <li className=" hover:underline hover:text-blue-500 font-semibold"><Link to="/contact">Contact</Link></li>
        </ul>
        <ul className='flex'>
        <input
            type="text"
            className={`rounded-[20px]  bg-slate-200 text-[15px] px-5 pt-2 pb-2  placeholder:pl-[8px] text-black w-full `}
            placeholder="Search Jewellary"
            onChange={Values}
          />
        </ul>
        <ul className="flex pl-5">
          <li className="pr-5  hover:underline hover:text-red-300 rounded-full"><Link to="/add"><MdAddToPhotos/></Link></li>
         
          <li className="pr-5 pl-5 hover:underline hover:text-red-300"><FaCartArrowDown/></li>
          
        </ul>
        <Outlet/>
      </div>
    </div>
  )
}
