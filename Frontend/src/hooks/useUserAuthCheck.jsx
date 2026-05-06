import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import axiosInstance from "../utils/axiosInstance";
import { API_PATHS } from "../utils/apipath";

export const useUserAuthCheck = () => {
    const { user, updateUser, clearUser } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) return;

        let isMounted = true;
        const fetchUser = async () => {
            try {
                const res = await axiosInstance.get(API_PATHS.AUTH.GET_USER_INFO);

                if (isMounted && res?.data) {
                    updateUser(res.data);
                }
            } catch (err) {
                console.error("Failed to fetch user info:", err);

                if (isMounted) {
                    clearUser();
                    navigate("/login", { replace: true });
                }
            }
        };

        fetchUser();

        return () => {
            isMounted = false;
        };
    }, [user, updateUser, clearUser, navigate]);
};