import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import apple from "../images/apple.webp";

import hero1 from "../images/hero-1.webp";
import hero2 from "../images/hero-2.webp";
import hero3 from "../images/hero-3.webp";
import { useTranslation } from "react-i18next";

const responsive = {
    superLargeDesktop: { breakpoint: { max: 7000, min: 3000 }, items: 1 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};

export default function HeroSlider() {
    const { t, i18n } = useTranslation();

    const slides =
        i18n.language === "en"
            ? [
                  {
                      image: hero1,
                      subtitle: "iPhone 14 Series",
                      mainTitle: "Up to 10% off Voucher",
                      link: "/products/all",
                      bgColor: "bg-black",
                      textColor: "text-gray-100"
                  },
                  {
                      image: hero2,
                      subtitle: "iPhone 14 Series",
                      mainTitle: "Up to 10% off Voucher",
                      link: "/products/all",
                      bgColor: "bg-[#f2f2f2]",
                      textColor: "text-black"
                  },
                  {
                      image: hero3,
                      subtitle: "iPhone 14 Series",
                      mainTitle: "Up to 10% off Voucher",
                      link: "/products/all",
                      bgColor: "bg-[#f5ebe2]",
                      textColor: "text-black"
                  }
              ]
            : [
                  {
                      image: hero1,
                      subtitle: "سلسلة الآيفون 14",
                      mainTitle: "خصم يصل إلى 10%",
                      link: "/products/all",
                      bgColor: "bg-black",
                      textColor: "text-gray-100"
                  },
                  {
                      image: hero2,
                      subtitle: "سلسلة الآيفون 14",
                      mainTitle: "خصم يصل إلى 10%",
                      link: "/products/all",
                      bgColor: "bg-[#f2f2f2]",
                      textColor: "text-black"
                  },
                  {
                      image: hero3,
                      subtitle: "سلسلة الآيفون 14",
                      mainTitle: "خصم يصل إلى 10%",
                      link: "/products/all",
                      bgColor: "bg-[#f5ebe2]",
                      textColor: "text-black"
                  }
              ];

    return (
        <div className="w-full max-w-full h-full ps-0 md:ps-[45px] pt-10 relative overflow-hidden ">
            <Carousel rtl={i18n.language === "ar"} responsive={responsive} showDots={true} autoPlay={true} autoPlaySpeed={4000} infinite={true} arrows={false}>
                {slides.map((slide, index) => (
                    <div key={index} className={`flex justify-between ${slide.bgColor} ${slide.textColor} px-16 py-6 max-h-[344px] h-full`}>
                        <div className="flex flex-col gap-5 justify-center">
                            <div className="flex items-center">
                                <img className="w-10 h-[49px] max-h-fit" src={apple} alt="brand" />
                                <span>{slide.subtitle}</span>
                            </div>
                            <h2 className="text-5xl font-semibold leading-[60px] max-w-2xs">{slide.mainTitle}</h2>
                            <Link className="flex items-center gap-2" to={slide.link}>
                                <span className="underline font-medium underline-offset-8">{t("shopNow")}</span>
                                <svg className={i18n.language === "ar" ? "transform rotate-180" : ""} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.5 12H20M20 12L13 5M20 12L13 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                        <div className="flex-1 flex justify-end">
                            <img className="h-full max-h-[344px]" src={slide.image} alt="hero" />
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}
