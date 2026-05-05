import { LuLayoutDashboard, LuHandCoins, LuWalletMinimal, LuLogOut } from 'react-icons/lu';

export const sideMenuData = [
    {
        id: "01",
        name: "Dashboard",
        icon: LuLayoutDashboard,
        path: "/home",
    },
    {
        id: "02",
        name: "income",
        icon: LuHandCoins,
        path: "/income",
    },
    {
        id: "03",
        name: "expense",
        icon: LuWalletMinimal,
        path: "/expense",
    },
    {
        id: "05",
        name: "logout",
        icon: LuLogOut,
        path: "/logout",
    }
]