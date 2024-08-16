import React, { useState } from "react";
import logo from "../components/images/logo.png";
import { IoSearch } from "react-icons/io5";
import { MdOutlinePersonOutline } from "react-icons/md";
import { GrFavorite } from "react-icons/gr";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [menu, setmenu] = useState(false);

  return (
    <div className="bg-white shadow-lg  md:w-full ">
      <div className="flex items-center justify-between p-2  w-full ">
        <div>
          <img src={logo} className="md:w-[90px] md:h-[60px] w-[800px] h-[60px] md:ml-2 ml-1 " alt="logo" />
         </div>  {/* //md:w-16 md:h-16 w-[400px] h-[60px] md:ml-5 ml-1 */}

        {
          menu && <div className="md:static absolute z-20 bg-gray-200  md:min-h-fit min-h-[30vh] left-0 top-[10%] md:w-auto w-[382px] flex items-center px-2 ">
          <div className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-6">
            <h1 className="ml-6">MEN</h1>
            <h1 className="ml-6">WOMEN</h1>
            <h1 className="ml-6">KIDS</h1>
            <h1 className="ml-6">HOME & LIVING</h1>
            <h1 className="ml-6">BEAUTY</h1>
            <h1 className="ml-6">STUDIO</h1>
          </div>
        </div>
        }
        <div className="md:static absolute bg-white  md:min-h-fit min-h-[30vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-2 ">
          <div className="flex md:flex-row sm:flex-row flex-col md:items-center md:gap-[2vw] gap-6">
            <h1 className="ml-2">MEN</h1>
            <h1 className="ml-4">WOMEN</h1>
            <h1 className="ml-4">KIDS</h1>
            <h1 className="ml-4 text-sm">HOME & LIVING</h1>
            <h1 className="ml-2">BEAUTY</h1>
            <h1 className="ml-2">STUDIO</h1>
          </div>
        </div>

        <div className="border border-gray-100 flex items-center bg-gray-100 w-64 h-10 ml-2  md:ml-4">
          <IoSearch className="h-8 w-6 ml-3" />
          <input
            type="text"
            className="bg-gray-100  text-gray-900 font-normal outline-none sm:text-sm rounded-sm block w-full p-2.5 text-[12px] items-center"
            placeholder="Search for products,Brand and more"
            required
          />
        </div>

        <div className="flex items-center md:ml-4 justify-between  mr-[-5px] space-x-2 p-1 text-sm">
          <div className="flex items-center">
            <MdOutlinePersonOutline className="h-5 w-5" />
            <h1>Profile</h1>
          </div>
          <div className="flex items-center">
            <GrFavorite className="h-4 w-6 " />
            <h1>Wishlist</h1>
          </div>
          <div className="flex items-center">
            <HiOutlineShoppingBag className="h-4 w-4" />
            <h1>Bag</h1>
          </div>
        {
          menu ? <div className="flex items-center gap-6 cursor-pointer md:hidden">
            <IoClose
              onClick={() => setmenu(!menu)}
              className="ml-4 md:ml-1 text-[40px]"
            />
          </div> : <div className="flex items-center gap-6 cursor-pointer md:hidden">
            <CgMenuRightAlt
              onClick={() => setmenu(!menu)}
              className="ml-4 md:ml-1 text-[40px]"
            />
          </div>
        }
        
          
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Navbar;
