import { Link, Navigate, NavLink, Outlet } from "react-router-dom";
import useUser from "../contexts/UserContext";
import { useTranslation } from "react-i18next";

export default function MyAccount() {

    const {user, userData, isLoading} = useUser();
    const {t} = useTranslation();
    // const [userData, setUserData] = useState({});

    // Check if user is logged in and not loading
    if ( !isLoading && !user) {
        return <Navigate to="/login" replace />;
    }

    return (
        <main className="min-h-[670px] pt-20 pb-[140px]">
                    <div className="container flex flex-col gap-20">
                    <div className="flex justify-between">
                        <nav className="flex gap-3 text-sm">
                            <Link className="text-black/50" to="/">{t("topMenu.home")}</Link>
                            <span className="text-black/50">/</span>
                            <span>{t("myAccount")}</span>
                        </nav>
                        <div className="text-sm">{t("welcome")} <span className="text-s-red">{`${userData?.fname} ${userData?.lname}`}</span></div>
                    </div>
                    <div className="flex gap-12 w-full flex-col lg:flex-row">
                        <nav className="flex flex-col gap-4">
                                <h2 className="font-medium">{t("topUserMenu.manageAccount")}</h2>
                                <ul className="flex flex-col gap-2 ms-9 text-black/50">
                                    <li><NavLink className={({ isActive }) =>isActive ? "text-red-500" : ""} to="/myaccount/profile">{t("myProfile")}</NavLink></li>
                                    <li><NavLink className={({ isActive }) =>isActive ? "text-red-500" : ""} to="/myaccount/address">{t("addressBook")}</NavLink></li>
                                    <li><NavLink className={({ isActive }) =>isActive ? "text-red-500" : ""} to="/myaccount/payment-options">{t("myPaymentOptions")}</NavLink></li>
                                </ul>
                                <h2 className="font-medium"><NavLink className={({ isActive }) =>isActive ? "text-red-500" : ""} to="/myaccount/orders">{t("topUserMenu.orders")}</NavLink></h2>
                                <ul className="flex flex-col gap-2 ms-9 text-black/50">
                                    <li><NavLink className={({ isActive }) =>isActive ? "text-red-500" : ""} to="/myaccount/returns">{t("myReturns")}</NavLink></li>
                                    <li><NavLink className={({ isActive }) =>isActive ? "text-red-500" : ""} to="/myaccount/cancellations">{t("topUserMenu.cancel")}</NavLink></li>
                                </ul>
                                <h2 className="font-medium"><NavLink className={({ isActive }) =>isActive ? "text-red-500" : ""} to="/wishlist">{t("myWishlist")}</NavLink></h2>
                        </nav>
                        <div className="w-full flex-1 bg-white shadow-[0_1px_13px_0_#0000000D] py-10 px-7 lg:px-20">
                            <Outlet />
                        </div>
                    </div>
                    </div>
                </main>
    )
}