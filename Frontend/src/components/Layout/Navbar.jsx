import React, { useState } from 'react'
import Sidebar from './SideMenu'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

const Navbar = () => {
    const [openSideMenu, setOpenSideMenu] = useState(false)
    return (
        <div className='flex gap-5 bg-white border border-b border-gray-200/3 backdrop-blur-[2px] px-7 py-4 sticky top-0 z-300'>
            <button className='block lg-hidden text-black  hover:cursor-pointer' onClick={() => { setOpenSideMenu(!openSideMenu) }}>
                {openSideMenu ? <HiOutlineX className="text-2xl" /> : <HiOutlineMenu className='text-2xl' />}
            </button>
            <h2 className='text-lg font-medium text-black'>Expense Tracker</h2>

            {openSideMenu && (
                <div className="fixed top-15 bg-white">
                    <Sidebar activeMenu="activeMenu" />
                </div>
            )}
        </div>
    )
}

export default Navbar