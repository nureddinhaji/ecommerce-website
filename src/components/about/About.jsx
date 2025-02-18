import { Link } from "react-router-dom";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Achievement from "./Achievement";
import MemberCard from "./MemberCard";

// Import images
import tomCruise from "../../images/tom-cruise.webp";
import emmaWatson from "../../images/emma-watson.webp";
import { useTranslation } from "react-i18next";

export default function About({ features }) {

    const {t, i18n} = useTranslation();

    const ACHIEVEMENTS = [
        {
            id: 1,
            desc: t("aboutAchievments.1"),
            title: "10.5k",
            icon: (
                <svg width="35" height="32" viewBox="0 0 35 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31.6416 1H24.9883L25.8216 9.33333C25.8216 9.33333 27.4883 11 29.9883 11C31.3006 11.0017 32.5684 10.524 33.5533 9.65667C33.6574 9.55938 33.735 9.43716 33.7787 9.30156C33.8224 9.16596 33.8309 9.02145 33.8033 8.88167L32.6266 1.83333C32.5873 1.60049 32.4668 1.38909 32.2865 1.23656C32.1062 1.08404 31.8778 1.00024 31.6416 1V1Z" stroke="currentColor" strokeWidth="2" />
                    <path d="M24.9883 1L25.8216 9.33333C25.8216 9.33333 24.1549 11 21.6549 11C19.1549 11 17.4883 9.33333 17.4883 9.33333V1H24.9883Z" stroke="currentColor" strokeWidth="2" />
                    <path d="M17.4886 1V9.33333C17.4886 9.33333 15.8219 11 13.3219 11C10.8219 11 9.15527 9.33333 9.15527 9.33333L9.98861 1H17.4886Z" stroke="currentColor" strokeWidth="2" />
                    <path d="M9.98827 1H3.3366C3.09993 0.999912 2.87089 1.08377 2.69023 1.23666C2.50957 1.38955 2.38899 1.60157 2.34994 1.835L1.17494 8.88333C1.14747 9.02311 1.15601 9.16758 1.19974 9.30315C1.24348 9.43873 1.32097 9.56095 1.42494 9.65833C1.9716 10.1417 3.19327 11.0017 4.98827 11.0017C7.48827 11.0017 9.15494 9.335 9.15494 9.335L9.98827 1.00167V1Z" stroke="currentColor" strokeWidth="2" />
                    <path d="M2.5 11V27.6667C2.5 28.5507 2.85119 29.3986 3.47631 30.0237C4.10143 30.6488 4.94928 31 5.83333 31H29.1667C30.0507 31 30.8986 30.6488 31.5237 30.0237C32.1488 29.3986 32.5 28.5507 32.5 27.6667V11" stroke="currentColor" strokeWidth="2" />
                    <path d="M22.2217 31V21C22.2217 20.1159 21.8705 19.2681 21.2454 18.6429C20.6202 18.0178 19.7724 17.6666 18.8883 17.6666H15.555C14.671 17.6666 13.8231 18.0178 13.198 18.6429C12.5729 19.2681 12.2217 20.1159 12.2217 21V31" stroke="currentColor" strokeWidth="2" strokeMiterlimit="16" />
                </svg>
            )
        },
        {
            id: 2,
            desc: t("aboutAchievments.2"),
            title: "33k",
            icon: (
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.0003 37.2728C29.5397 37.2728 37.273 29.5395 37.273 20C37.273 10.4606 29.5397 2.72729 20.0003 2.72729C10.4608 2.72729 2.72754 10.4606 2.72754 20C2.72754 29.5395 10.4608 37.2728 20.0003 37.2728Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M25.0914 14.547C24.762 13.9758 24.2834 13.505 23.707 13.1848C23.1305 12.8646 22.4777 12.7072 21.8186 12.7294H18.1823C17.2178 12.7294 16.2929 13.1124 15.611 13.7941C14.929 14.4759 14.5459 15.4005 14.5459 16.3647C14.5459 17.3288 14.929 18.2535 15.611 18.9353C16.2929 19.617 17.2178 20 18.1823 20H21.8186C22.783 20 23.708 20.383 24.3899 21.0648C25.0719 21.7465 25.455 22.6712 25.455 23.6354C25.455 24.5995 25.0719 25.5242 24.3899 26.2059C23.708 26.8877 22.783 27.2707 21.8186 27.2707H18.1823C17.5232 27.2929 16.8704 27.1354 16.2939 26.8153C15.7174 26.4951 15.2389 26.0242 14.9095 25.453" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M20 8.18176V12.1212M20 27.8787V31.8181" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            id: 3,
            desc: t("aboutAchievments.3"),
            title: "45.5k",
            icon: (
                <svg width="28" height="34" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 34">
                    <path d="M5.667 8.667V5.333A5 5 0 0 1 14 1.607a5 5 0 0 1 8.334 3.726v3.334h2.5a2.5 2.5 0 0 1 2.5 2.5v16.675a5.825 5.825 0 0 1-5.825 5.825H7.334A6.667 6.667 0 0 1 .667 27V11.167a2.5 2.5 0 0 1 2.5-2.5h2.5Zm11.058 22.5a5.798 5.798 0 0 1-1.041-3.325V11.167H3.167V27a4.167 4.167 0 0 0 4.167 4.167h9.391Zm-3.558-22.5V5.333a2.5 2.5 0 0 0-5 0v3.334h5Zm2.5 0h4.167V5.333a2.5 2.5 0 0 0-4.427-1.593 5 5 0 0 1 .26 1.593v3.334Zm2.517 19.175a3.325 3.325 0 1 0 6.65 0V11.167h-6.65v16.675Z" fill="currentColor" />
                </svg>
            )
        },
        {
            id: 4,
            desc: t("aboutAchievments.4"),
            title: "25k",
            icon: (
                <svg width="31" height="34" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 34">
                    <path d="M15.93 15.15v.5h.5a3.21 3.21 0 0 1 3.02 2.14.43.43 0 1 1-.8.28 2.35 2.35 0 0 0-2.22-1.57h-.5v4.7h.5a3.2 3.2 0 1 1 0 6.43h-.5v.92h-.86v-.92h-.5a3.21 3.21 0 0 1-3.02-2.14v-.02a.43.43 0 0 1 .1-.46l-.33-.37.33.36a.43.43 0 0 1 .7.19v.01c.33.92 1.2 1.57 2.22 1.57h.5v-4.7h-.5a3.2 3.2 0 1 1 0-6.42h.5v-.93h.86v.43ZM15.07 17v-.5h-.5a2.35 2.35 0 1 0 0 4.7h.5V17Zm.86 9.27v.5h.5a2.35 2.35 0 1 0 0-4.7h-.5v4.2Z" stroke="currentColor" />
                    <path d="m8.2 9.58.32.12a19.89 19.89 0 0 0 13.94 0l.3-.12.24.24c1.9 2 3.49 4.27 4.71 6.75 1.28 2.6 2 5.24 1.88 7.56a7.03 7.03 0 0 1-3.07 5.68c-2.1 1.49-5.57 2.52-10.98 2.52-5.42 0-8.9-1.02-11.03-2.49a6.95 6.95 0 0 1-3.1-5.6l6.8-14.66Zm0 0-.22.25m.23-.25-.23.25m0 0a28.9 28.9 0 0 0-4.73 6.86m4.73-6.86-4.73 6.86m0 0c-1.27 2.62-1.97 5.25-1.84 7.55l1.84-7.55Zm22.1-13.5c.43.2.81.42 1.13.6l-3.13 4.58-.24.34.3.3a28.44 28.44 0 0 1 5.07 7.18c1.31 2.68 2.09 5.47 1.96 7.98a7.88 7.88 0 0 1-3.42 6.33c-2.31 1.64-5.98 2.69-11.48 2.69s-9.19-1.03-11.51-2.65A7.8 7.8 0 0 1 .56 24.3c-.14-2.5.62-5.27 1.92-7.97A29.78 29.78 0 0 1 7.58 9l.28-.3-.23-.33-3.1-4.57a17.5 17.5 0 0 1 1.14-.6l.19-.1A23.33 23.33 0 0 1 15.54.8c3.9 0 7.46 1.24 9.68 2.32l.12.06Zm-3.63 5.87.16-.06.09-.13 2.74-4L25.3 4l-1.04.07c-2.59.19-5.66.8-8.6 1.65-1.99.57-4.22.49-6.33.1-.53-.1-1.05-.21-1.57-.35l-1.29-.33.75 1.1L9 8.87l.1.13.15.06c3.92 1.4 8.55 1.4 12.47 0ZM7.08 3.48l-1.28.54 1.33.4c.76.23 1.55.42 2.36.57 2.03.38 4.12.44 5.93-.08a49.66 49.66 0 0 1 6-1.35l.06-.98a20.8 20.8 0 0 0-5.94-.92c-3.29 0-6.33.92-8.46 1.82Z" stroke="currentColor" />
                </svg>
            )
        }
    ];

    const MEMBERS = [
        {
            name: "Tom Cruise",
            profession: t("founder") + " & " + t("chairman"),
            links: [
                { name: "x", link: "#" },
                { name: "instagram", link: "#" },
                { name: "linkedin", link: "#" }
            ],
            image: tomCruise
        },
        {
            name: "Emma Watson",
            profession: t("managingDirector"),
            links: [
                { name: "x", link: "#" },
                { name: "instagram", link: "#" },
                { name: "linkedin", link: "#" }
            ],
            image: emmaWatson
        },
        {
            name: "Will Smith",
            profession: t("productDesigner"),
            links: [
                { name: "x", link: "#" },
                { name: "instagram", link: "#" },
                { name: "linkedin", link: "#" }
            ],
            image: emmaWatson
        },
        {
            name: "Tom Cruise",
            profession: t("member"),
            links: [
                { name: "x", link: "#" },
                { name: "instagram", link: "#" },
                { name: "linkedin", link: "#" }
            ],
            image: tomCruise
        },
        {
            name: "Tom Cruise",
            profession: t("member"),
            links: [
                { name: "x", link: "#" },
                { name: "instagram", link: "#" },
                { name: "linkedin", link: "#" }
            ],
            image: emmaWatson
        },
        {
            name: "Tom Cruise",
            profession: t("member"),
            links: [
                { name: "x", link: "#" },
                { name: "instagram", link: "#" },
                { name: "linkedin", link: "#" }
            ],
            image: tomCruise
        },
        {
            name: "Tom Cruise",
            profession: t("member"),
            links: [
                { name: "x", link: "#" },
                { name: "instagram", link: "#" },
                { name: "linkedin", link: "#" }
            ],
            image: emmaWatson
        }
    ];

    const responsive = {
        desktop: {
            breakpoint: { max: 5000, min: 1180 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1180, min: 780 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 780, min: 0 },
            items: 1
        }
    };

    const CustomDot = ({ onClick, active }) => {
        return (
            <li className="self-center">
                <button onClick={onClick} className={`bg-black/30 fcenter rounded-full me-3  ${active ? "w-4 h-4" : "w-3 h-3"}`}>
                    <span className={`bg-black/30 rounded-full  ${active ? "w-[10px] aspect-square bg-s-red border-2 border-white" : ""}`}></span>
                </button>
            </li>
        );
    };

    return (
        <main className="min-h-[670px] pt-20 pb-[140px] relative overflow-hidden">
            <div className="container">
                <nav className="flex gap-3 text-sm mb-[42px]">
                    <Link className="text-black/50" to="/">
                        {t("topMenu.home")}
                    </Link>
                    <span className="text-black/50">/</span>
                    <span>{t("topMenu.about")}</span>
                </nav>
                <div className="grid md:grid-cols-2">
                    <div className="md:py-[136.5px] md:pe-[75px]">
                        <h2 className="font-semibold text-[54px] mb-10">{t("story.title")}</h2>
                        <p className="mb-6">{t("story.firstPhrase")}</p>
                        <p>{t("story.secondPhrase")}</p>
                    </div>
                    <div className={`hidden md:flex h-[609px] end-0 ${i18n.language === "en" ? "translate-x-[50%]" : "-translate-x-[50%]"} w-full absolute inset bg-[#EB7EA8]`}></div>
                </div>
                <div className="flex flex-wrap gap-[30px] mt-[140px]">
                    {ACHIEVEMENTS.map((item, index) => (
                        <Achievement key={index} titleSize="text-[32px]" {...item} />
                    ))}
                </div>
                <div className="mt-[140px] pb-[58px] relative">
                    <Carousel rtl={i18n.language === "ar"} itemClass="fcenter" infinite={true} arrows={false} showDots={true} renderButtonGroupOutside={false} renderDotsOutside responsive={responsive} customDot={<CustomDot />}>
                        {MEMBERS.map((item, index) => (
                            <MemberCard key={index} {...item} />
                        ))}
                    </Carousel>
                </div>
                <div className="flex flex-wrap justify-between gap-[30px] mt-[140px]">
                    {features.map((item, index) => (
                        <Achievement key={index} border={false} titleSize="text-xl" {...item} />
                    ))}
                </div>
            </div>
        </main>
    );
}
