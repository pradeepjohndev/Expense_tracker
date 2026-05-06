import React, { useEffect, useState } from 'react'
import DashboardLayout from '../../components/Layout/DashboardLayout';
import { useUserAuthCheck } from '../../hooks/useUserAuthCheck';
import { axiosInstance } from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apipath';
import { LuHandCoins, LuWalletMinimal } from 'react-icons/lu';
import { IoMdCard } from 'react-icons/io';
import InfoCard from '../../components/Cards/InfoCard';
import { addThousandSeparator } from '../../utils/helper';

const Home = () => {
    useUserAuthCheck();
    const [dashboardData, setDashboardData] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchDashboardData = async () => {
        if (loading) return;
        setLoading(true);
        try {
            const res = await axiosInstance.get(API_PATHS.DASHBOARD.GET_DATA);

            if (res?.data) {
                setDashboardData(res.data);
            }

        } catch (err) {
            console.error("Failed to fetch dashboard data:", err);
        }
        finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        fetchDashboardData();
        return () => { };
    }, []);

    return (
        <DashboardLayout activeMenu="dashboard">
            <div className='my-5 mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    <InfoCard icon={<IoMdCard />} label="Total balance"
                        value={addThousandSeparator(dashboardData?.totalBalance || 0)}
                        color="bg-primary" />
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Home;
