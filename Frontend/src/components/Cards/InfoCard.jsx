import React from 'react'

const InfoCard = ({ icon, label, value, color }) => {
    return (
        <div className='flex gap-6 bg-white p-6 rounded-2xl shodow-md shodow-gray-100 border border-gray-200/50'>
            <div className={`w-14 h-14 flex items-center justify-center text-[26px] text-white ${color} rounded-full drop-shadow-xl`}>
                {icon}
            </div>
            <div className='mt-3'>
                <p className='text-sm text-gray-500 mb-1'>{label}</p>
                <h2 className='text-lg font-semibold'>{value}</h2>
            </div>
        </div>
    )
}

export default InfoCard
