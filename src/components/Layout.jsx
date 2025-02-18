import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./header/Header";
import GoTopButton from "./GoTopButton";

export default function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
            <GoTopButton />
        </>
    );
}
