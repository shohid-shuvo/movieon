import React, {useState, useRef} from 'react'
import Search from './Search'
import { BiSolidCategory } from 'react-icons/bi';
import Category from './menus/Category'
import { motion } from "framer-motion";


const Header = () => {

    const [catBtn, setCatBtn] =  useState(false);
    const catBtnTriggar = () => {
        setCatBtn(!catBtn) 
    }
    const menuRef = useRef(null)
    
    
  return (
    <div>
        <header className="py-3 bg-amber-300">
            <div className="container mx-auto">
                <div className="head_wrapper flex flex-wrap items-center justify-between">
                    <h4 className="text-[33px] font-bold text-gray-800" >MovieOn</h4>
                    <div className="searchBox w-[70%] flex justify-end items-center">
                        <div className="sdl_search w-[70%]" >
                            <Search />
                        </div>
                        <div className="sdl_menu relative items-center flex justify-end pl-8 transition-all duration-2000 ">
                            <BiSolidCategory className="text-2xl mr-1" />   
                            <button onClick={catBtnTriggar} className="text-2xl cursor-pointer font-semibold"> CATEGORY </button>
                            
                            {catBtn && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: -15 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <Category />
                                </motion.div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Header
