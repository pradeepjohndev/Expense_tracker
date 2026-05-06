import React, { Children, useContext } from 'react'
import { UserContext } from '../../context/UserContext';
import Navbar from './Navbar';

const DashboardLayout = ({ Children, activeMenu }) => {
    const { user } = useContext(UserContext)

    return (
        <div className=''>
            <Navbar activeMenu={activeMenu} />

            {user && (
                <div className="flex">
                    <div className='max-[1080]:hidden'>
                        <Sidebar activeMenu={activeMenu} />
                    </div>

                    <div className='grow:mx-5'>{Children}</div>
                </div>
            )}
        </div>
    )
}

export default DashboardLayout
