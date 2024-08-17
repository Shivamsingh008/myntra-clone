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
    <div className="bg-white shadow-lg">
      <div className="flex items-center justify-evenly ">
        <div>
          <img src={logo} className="w-[45px] aspect-auto" alt="logo" />
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
        <div className="md:static absolute bg-white  md:min-h-fit min-h-[30vh] left-0 top-[-100%] flex items-center  ">
          <div className="flex md:flex-row sm:flex-row flex-col md:items-center ">
            <h1 className="m-3">MEN</h1>
            <h1 className="m-3">WOMEN</h1>
            <h1 className="m-3">KIDS</h1>
            <h1 className="m-3">HOME & LIVING</h1>
            <h1 className="m-3">BEAUTY</h1>
            <h1 className="m-3">STUDIO</h1>
          </div>
        </div>

        <div className="border border-gray-500 flex items-center w-[20vw] ">
          <IoSearch className="h-8 ml-3" />
          <input
            type="text"
            className="outline-none rounded-sm  text-[.8rem] flex flex-wrap w-full items-center"
            placeholder="Search for products, Brand and more"
            required
          />
        </div>

        <div className="flex items-center  text-sm">
          <div className="flex items-center m-4">
            <MdOutlinePersonOutline className="h-5 " />
            <h1>Profile</h1>
          </div>
          <div className="flex items-center m-4">
            <GrFavorite className="h-4  " />
            <h1>Wishlist</h1>
          </div>
          <div className="flex items-center m-4">
            <HiOutlineShoppingBag className="h-4 " />
            <h1>Bag</h1>
          </div>
        {
          menu ? <div className="flex items-center cursor-pointer md:hidden">
            <IoClose
              onClick={() => setmenu(!menu)}
              className=" text-[40px]"
            />
          </div> : <div className="flex items-center cursor-pointer md:hidden">
            <CgMenuRightAlt
              onClick={() => setmenu(!menu)}
              className=" text-[40px]"
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
