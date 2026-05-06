import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../../components/Layout/DashboardLayout';
import { useUserAuthCheck } from '../../hooks/useUserAuthCheck';
import { axiosInstance } from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apipath';
import { IoMdCard } from 'react-icons/io';
import InfoCard from '../../components/Cards/InfoCard';
import { addThousandSeparator } from '../../utils/helper';
import { LuHandCoins, LuWalletMinimal } from 'react-icons/lu';

const Home = () => {
    useUserAuthCheck();
    const navigate = useNavigate();
    const [dashboardData, setDashboardData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            try {
                const res = await axiosInstance.get(API_PATHS.DASHBOARD.GET_DATA);

                if (isMounted && res?.data) {
                    setDashboardData(res.data);
                }
            } catch (err) {
                console.error("Failed to fetch dashboard data:", err);
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        fetchData();

        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <DashboardLayout activeMenu="dashboard">
            <div className='my-5 mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    <InfoCard
                        icon={<IoMdCard />}
                        label="Total balance"
                        value={loading ? "Loading..." : addThousandSeparator(dashboardData?.totalBalance || 0)}
                        color="bg-primary"
                    />

                    <InfoCard
                        icon={<LuWalletMinimal />}
                        label="Total Income"
                        value={loading ? "Loading..." : addThousandSeparator(dashboardData?.totalIncome || 0)}
                        color="bg-primary"
                    />

                    <InfoCard
                        icon={<LuHandCoins />}
                        label="Total Expense"
                        value={loading ? "Loading..." : addThousandSeparator(dashboardData?.totalExpense || 0)}
                        color="bg-primary"
                    />
                </div>

                <div className='grid grid-col-1 md:grid-col-2 gap-6 mt-6'>
                    <RecentTransactions transactions={dashboardData?.recentTransactions || []} onSeeMore={() => navigate('/expense')} loading={loading} />
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Home;