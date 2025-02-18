import { useTranslation } from "react-i18next";
import CategoriesList from "./CategoriesList";
import HeaderNav from "./header/HeaderNav";

export default function SideMenu({ active, setActive }) {

    const {i18n} = useTranslation();

    const translate = i18n.language === "en" ? "opacity-0 translate-x-[-100%]" : "opacity-0 translate-x-[100%]"

    return (
        <>
            <div onClick={() => setActive(!active)} className={`${active ? "flex" : "hidden"} absolute top-0 start-0 w-dvw h-full bg-black/60 backdrop-blur-xs z-40`}></div>
            <div className={`${active ? "opacity-100 translate-x-0" : translate} fixed top-0 bg-white h-dvh z-50 p-10 min-w-[300px] transition duration-500 flex justify-between flex-col`}>
                <div>
                    <h2 className="text-xl font-bold mb-2">Categories</h2>
                    <CategoriesList mainUlStyle=" flex flex-col gap-4 relative" subUlStyle="ps-8 text-black/70" subMenuArrow={false} />
                </div>
                <HeaderNav className="flex flex-col md:hidden md:items-center h-full gap-2" />
            </div>
        </>
    );
}
