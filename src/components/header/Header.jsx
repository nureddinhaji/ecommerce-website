import { Link } from "react-router-dom";
import useUser from "../../contexts/UserContext";
import Search from "./SearchForm";
import HeaderNav from "./HeaderNav";
import HeaderTopBar from "./HeaderTopBar";
import UserButton from "./UserButton";
import WishlistCartButtons from "./WishlistCartButtons";
import SideMenu from "../SideMenu";
import { useState } from "react";

export default function Header() {
    const { user } = useUser();
    const [activeSideMenu, setActiveSideMenu] = useState(false);

    return (
        <>
            <header>
                {/* Header Top Bar */}
                <HeaderTopBar />
                {/* Header Bottom Bar */}
                <div className="flex flex-col gap-7 pt-10 pb-4 border-b-[0.5px] border-black/30">
                    <div className="container relative flex justify-between">
                        <button className="lg:hidden" onClick={() => setActiveSideMenu(true)}>
                            <svg width="28px" height="28px" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 7C4 6.44771 4.44772 6 5 6H24C24.5523 6 25 6.44771 25 7C25 7.55229 24.5523 8 24 8H5C4.44772 8 4 7.55229 4 7Z" fill="#000000" />
                                <path d="M4 13.9998C4 13.4475 4.44772 12.9997 5 12.9997L16 13C16.5523 13 17 13.4477 17 14C17 14.5523 16.5523 15 16 15L5 14.9998C4.44772 14.9998 4 14.552 4 13.9998Z" fill="#000000" />
                                <path d="M5 19.9998C4.44772 19.9998 4 20.4475 4 20.9998C4 21.552 4.44772 21.9997 5 21.9997H22C22.5523 21.9997 23 21.552 23 20.9998C23 20.4475 22.5523 19.9998 22 19.9998H5Z" fill="#000000" />
                            </svg>
                        </button>
                        <h1 className="flex-1 ms-5 md:flex-none lg:ms-0">
                            <Link to="/" className="a_special font-inter text-2xl font-bold">
                                Exclusive
                            </Link>
                        </h1>
                        <HeaderNav className="hidden md:flex md:items-center h-full gap-12" />
                        <div className="flex gap-6">
                            {/* Desktop Search Form */}
                            <div className="hidden lg:flex">
                                <Search />
                            </div>
                            <div className="flex gap-4">
                                <WishlistCartButtons />
                                {user && <UserButton />}
                            </div>
                        </div>
                    </div>
                    <div className="container lg:hidden">
                        {/* Mobile and Tablet Search Menu */}
                        <Search />
                    </div>
                </div>
            </header>
            <SideMenu active={activeSideMenu} setActive={setActiveSideMenu} />
        </>
    );
}
