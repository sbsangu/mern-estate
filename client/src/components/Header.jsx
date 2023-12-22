import React, { useEffect, useState } from "react";

import { Link,useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
 const [searchTerm, setSearchterm]=useState('');

 const navigate=useNavigate();

 const handleSubmit=(e)=>{
  e.preventDefault();
  const urlParams =new URLSearchParams();
  urlParams.set('searchTerm',searchTerm);
  const searchQuery=urlParams.toString();
  navigate(`/search?${searchQuery}`);



 }


 useEffect(() => {
   const urlParams =new URLSearchParams(location.search);
   const searchTermFromUrl = urlParams.get('searchTerm');
   if(searchTermFromUrl) {
    setSearchterm(searchTermFromUrl);
   }

 
   
 }, [location.search]);
 
 

  return (
    <div className="bg-slate-200 p-2 shadow-md ">
      <div className="max-w-6xl mx-auto  flex justify-between items-center">
        <h1 className="text-sm font-bold sm:text-xl flex flex-wrap  mx-2">
         <Link to="/">
         <span className="text-slate-500">Bahadur</span>
          <span className="text-slate-700">Estate</span>
         </Link>
        </h1>
        <form onSubmit={handleSubmit} className="bg-slate-100 flex items-center p-3 rounded-lg">
          <input
            className=" rounded-lg mx-2 bg-transparent focus:outline-none w-24 sm:w-64"
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e)=>setSearchterm(e.target.value)}
          />
          <button >
            <FaSearch/>
          </button>
        
        </form>
        <ul className="flex gap-4 mx-2">
          <Link to="/">
            <li className="hidden sm:inline  text-slate-700 hover:underline">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              About
            </li>
          </Link>
          <Link to='/profile'>
            {currentUser ? (
              <img
                className='rounded-full h-7 w-7 object-cover'
                src={currentUser.avatar}
                alt='profile'
              />
            ) : (
              <li className=' text-slate-700 hover:underline'> Sign in</li>
            )}
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
