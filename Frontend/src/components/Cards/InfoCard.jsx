import React from 'react'

const InfoCard = ({ icon, label, value, color }) => {
    return (
        <div className={`p-6 rounded-lg shadow-md ${color}`}>
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-lg font-semibold">{label}</p>
                    <p className="text-2xl font-bold">${value}</p>
                </div>
                <div className="text-3xl">
                    {icon}
                </div>
            </div>
        </div>
    )
}

export default InfoCard
