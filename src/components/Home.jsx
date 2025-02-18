import { useTranslation } from "react-i18next";
import Achievement from "./about/Achievement";
import CategoriesList from "./CategoriesList";
import Category from "./Category";
import HeroSlider from "./HeroSlider";
import CarouselButtons from "./productsSection/CarouselButtons";
import HeroOneProduct from "./productsSection/HeroOneProduct";
import NewArrival from "./productsSection/NewArrival";
import ProductsList from "./productsSection/ProductsList";
import SectionHeader from "./productsSection/SectionHeader";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Home({ features }) {
    const { t, i18n } = useTranslation();

    const CATEGORIES = [
        {
            icon: (
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_15225_868)">
                        <path d="M38.9375 6.125H17.0625C15.5523 6.125 14.3281 7.34922 14.3281 8.85938V47.1406C14.3281 48.6508 15.5523 49.875 17.0625 49.875H38.9375C40.4477 49.875 41.6719 48.6508 41.6719 47.1406V8.85938C41.6719 7.34922 40.4477 6.125 38.9375 6.125Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M25.6667 7H31.1354" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M28 44.0052V44.0305" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        <line x1="15.1667" y1="39.8334" x2="40.8333" y2="39.8334" stroke="currentColor" strokeWidth="2" />
                    </g>
                    <defs>
                        <clipPath id="clip0_15225_868">
                            <rect width="56" height="56" fill="none" />
                        </clipPath>
                    </defs>
                </svg>
            ),
            title: t("cats.phones")
        },
        {
            icon: (
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_15225_613)">
                        <path d="M46.6667 9.33337H9.33333C8.04467 9.33337 7 10.378 7 11.6667V35C7 36.2887 8.04467 37.3334 9.33333 37.3334H46.6667C47.9553 37.3334 49 36.2887 49 35V11.6667C49 10.378 47.9553 9.33337 46.6667 9.33337Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16.3333 46.6666H39.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21 37.3334V46.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M35 37.3334V46.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8 32H48" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_15225_613">
                            <rect width="56" height="56" fill="none" />
                        </clipPath>
                    </defs>
                </svg>
            ),
            title: t("cats.computers")
        },
        {
            icon: (
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_15225_629)">
                        <path d="M35 14H21C17.134 14 14 17.134 14 21V35C14 38.866 17.134 42 21 42H35C38.866 42 42 38.866 42 35V21C42 17.134 38.866 14 35 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21 42V49H35V42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21 14V7H35V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <line x1="24" y1="23" x2="24" y2="34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <line x1="28" y1="28" x2="28" y2="34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <line x1="32" y1="26" x2="32" y2="34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_15225_629">
                            <rect width="56" height="56" fill="none" />
                        </clipPath>
                    </defs>
                </svg>
            ),
            title: t("cats.smartWatches")
        },
        {
            icon: (
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_15225_6)">
                        <path d="M11.6667 16.3334H14C15.2377 16.3334 16.4247 15.8417 17.2998 14.9665C18.175 14.0914 18.6667 12.9044 18.6667 11.6667C18.6667 11.0479 18.9125 10.4544 19.3501 10.0168C19.7877 9.57921 20.3812 9.33337 21 9.33337H35C35.6188 9.33337 36.2123 9.57921 36.6499 10.0168C37.0875 10.4544 37.3333 11.0479 37.3333 11.6667C37.3333 12.9044 37.825 14.0914 38.7002 14.9665C39.5753 15.8417 40.7623 16.3334 42 16.3334H44.3333C45.571 16.3334 46.758 16.825 47.6332 17.7002C48.5083 18.5754 49 19.7624 49 21V42C49 43.2377 48.5083 44.4247 47.6332 45.2999C46.758 46.175 45.571 46.6667 44.3333 46.6667H11.6667C10.429 46.6667 9.242 46.175 8.36683 45.2999C7.49167 44.4247 7 43.2377 7 42V21C7 19.7624 7.49167 18.5754 8.36683 17.7002C9.242 16.825 10.429 16.3334 11.6667 16.3334" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M28 37.3334C31.866 37.3334 35 34.1994 35 30.3334C35 26.4674 31.866 23.3334 28 23.3334C24.134 23.3334 21 26.4674 21 30.3334C21 34.1994 24.134 37.3334 28 37.3334Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_15225_6">
                            <rect width="56" height="56" fill="none" />
                        </clipPath>
                    </defs>
                </svg>
            ),
            title: t("cats.camera")
        },
        {
            icon: (
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_15225_644)">
                        <path d="M16.3333 30.3334H14C11.4227 30.3334 9.33331 32.4227 9.33331 35V42C9.33331 44.5774 11.4227 46.6667 14 46.6667H16.3333C18.9106 46.6667 21 44.5774 21 42V35C21 32.4227 18.9106 30.3334 16.3333 30.3334Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M42 30.3334H39.6667C37.0893 30.3334 35 32.4227 35 35V42C35 44.5774 37.0893 46.6667 39.6667 46.6667H42C44.5773 46.6667 46.6667 44.5774 46.6667 42V35C46.6667 32.4227 44.5773 30.3334 42 30.3334Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9.33331 35V28C9.33331 23.0493 11.3 18.3014 14.8007 14.8007C18.3013 11.3 23.0493 9.33337 28 9.33337C32.9507 9.33337 37.6986 11.3 41.1993 14.8007C44.7 18.3014 46.6666 23.0493 46.6666 28V35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_15225_644">
                            <rect width="56" height="56" fill="none" />
                        </clipPath>
                    </defs>
                </svg>
            ),
            title: t("cats.headPhones")
        },
        {
            icon: (
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_15225_809)">
                        <path d="M46.6666 14H9.33329C6.75596 14 4.66663 16.0893 4.66663 18.6667V37.3333C4.66663 39.9107 6.75596 42 9.33329 42H46.6666C49.244 42 51.3333 39.9107 51.3333 37.3333V18.6667C51.3333 16.0893 49.244 14 46.6666 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M14 28H23.3333M18.6667 23.3334V32.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M35 25.6666V25.6908" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M42 30.3333V30.3574" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_15225_809">
                            <rect width="56" height="56" fill="none" />
                        </clipPath>
                    </defs>
                </svg>
            ),
            title: t("cats.gaming")
        },
        {
            icon: (
                <svg width="56px" height="56px" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 21.5H8C7.72 21.5 7.5 21.28 7.5 21V16C7.5 15.72 7.72 15.5 8 15.5H16C16.28 15.5 16.5 15.72 16.5 16V21C16.5 21.28 16.28 21.5 16 21.5Z" stroke="currentColor" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9.43005 19.5H11.3601" stroke="currentColor" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9.43005 17.5H12.9201" stroke="currentColor" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M18.5 18.5H21C21.28 18.5 21.5 18.28 21.5 18V12C21.5 11.72 21.28 11.5 21 11.5H3C2.72 11.5 2.5 11.72 2.5 12V18C2.5 18.28 2.72 18.5 3 18.5H5.5" stroke="currentColor" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7.5 9.5V4C7.5 3.72 7.72 3.5 8 3.5H16C16.28 3.5 16.5 3.72 16.5 4V9.5" stroke="currentColor" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: t("cats.printers")
        },
        {
            icon: (
                <svg width="56px" height="56px" fill="currentColor" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <g>
                        <g>
                            <path d="M462.367,86.204H49.633c-15.845,0-28.735,12.89-28.735,28.735v250.776h15.674V114.939c0-7.202,5.859-13.061,13.061-13.061 h412.735c7.202,0,13.061,5.859,13.061,13.061v250.776h15.673V114.939C491.102,99.094,478.212,86.204,462.367,86.204z" />
                        </g>
                    </g>
                    <g>
                        <g>
                            <path d="M441.469,122.776H70.531c-10.082,0-18.286,8.203-18.286,18.286v216.816h407.51V141.061 C459.755,130.979,451.552,122.776,441.469,122.776z M444.082,342.204H67.918V141.061c0-1.44,1.172-2.612,2.612-2.612h370.939 c1.44,0,2.612,1.172,2.612,2.612V342.204z" />
                        </g>
                    </g>
                    <g>
                        <g>
                            <path d="M0,378.776v47.02h512v-47.02H0z M496.327,410.122H15.673v-15.673H197.66l6.617,9.927h103.445l6.617-9.927h181.987V410.122 z" />
                        </g>
                    </g>
                    <g>
                        <g>
                            <circle cx="256" cy="112.327" r="5.224" />
                        </g>
                    </g>
                </svg>
            ),
            title: t("cats.laptops")
        }
    ];

    const categoriesResponsiveConfig = { desktop1: { breakpoint: { max: Number.MAX_SAFE_INTEGER, min: 1170 }, items: 6 }, desktop2: { breakpoint: { max: 1170, min: 992 }, items: 5 }, tablet2: { breakpoint: { max: 992, min: 767 }, items: 4 }, tablet: { breakpoint: { max: 767, min: 580 }, items: 3 }, mobile1: { breakpoint: { max: 580, min: 400 }, items: 2 }, mobile2: { breakpoint: { max: 400, min: 0 }, items: 1 } };

    return (
        <>
            <div className="container overflow-hidden">
                <div className="flex flex-col md:flex-row w-full max-w-full relative">
                    <CategoriesList mainUlStyle="hidden lg:flex flex-col gap-4 relative pt-10 pe-4 border-e-[0.5px] border-e-black/30" subUlStyle="absolute start-[90%] h-full w-full top-0 pt-10 px-4 flex flex-col gap-4 opacity-0 bg-white invisible group-hover:opacity-100 group-hover:visible z-1" mainLiStyle="group flex items-center justify-between min-w-[217px] w-full transition gap-2" subMenuArrow={true} />
                    <HeroSlider />
                </div>
            </div>
            <main className="min-h-[670px] pt-20 pb-[140px] relative overflow-hidden">
                <div className="container overflow-hidden">
                    {/* Flash Sales */}
                    <ProductsList header={{ mainTitle: t("flashSales"), subTitle: t("todays"), control: "carousel", timer: "2026-01-01" }} category="flash sales" count="all" />
                    {/* ==================== */}

                    <hr className="border-t-[0.5px] border-black/30 mb-15" />

                    {/* Categories Section */}
                    <div className="flex flex-col gap-15 mb-15 relative">
                        <SectionHeader mainTitle={t("browseByCategory")} subTitle={t("categories")} control="carousel" />
                        <Carousel infinite={true} rtl={i18n.language === "ar"} itemClass="flex justify-center" renderButtonGroupOutside={true} customButtonGroup={<CarouselButtons />} arrows={false} responsive={categoriesResponsiveConfig}>
                            {CATEGORIES.map((item, index) => (
                                <Category key={index} {...item} />
                            ))}
                        </Carousel>
                    </div>
                    {/* ==================== */}

                    <hr className="border-t-[0.5px] border-black/30 mb-15" />

                    {/* Best Selling Products */}
                    <ProductsList header={{ mainTitle: t("bestSellingProdcuts"), subTitle: t("thisMonth"), control: "button" }} category="best sales" count={4} />
                    <HeroOneProduct />
                    <ProductsList header={{ mainTitle: t("exploreOurProducts"), subTitle: t("ourProducts"), control: "button" }} category="all" count={8} />
                    <NewArrival />
                    <div className="flex justify-between gap-[30px] mt-[140px] flex-wrap">
                        {features.map((item, index) => (
                            <Achievement key={index} border={false} titleSize="text-xl" {...item} />
                        ))}
                    </div>
                </div>
            </main>
        </>
    );
}
