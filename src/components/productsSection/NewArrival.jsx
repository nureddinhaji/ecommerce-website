import { Link } from "react-router-dom";
import newArrival1 from "../../images/newArrival1.webp";
import newArrival2 from "../../images/newArrival2.webp";
import newArrival3 from "../../images/newArrival3.webp";
import newArrival4 from "../../images/newArrival4.webp";
import SectionHeader from "./SectionHeader";
import { useTranslation } from "react-i18next";

export default function NewArrival() {

    const {t, i18n} = useTranslation();

    const products = i18n.language === "en" ? [
        {
            id: 1, 
            image: newArrival1,
            title: "PlayStation 5",
            description: "Black and White version of the PS5 coming out on sale.",
            link: "/"
        },
        {
            id: 2, 
            image: newArrival2,
            title: "iPhone Collections",
            description: "Featured iPhone collections that give you another experience.",
            link: "/"
        },
        {
            id: 3, 
            image: newArrival3,
            title: "Speakers",
            description: "Amazon wireless speakers",
            link: "/"
        },
        {
            id: 4, 
            image: newArrival4,
            title: "Perfume",
            description: "GUCCI INTENSE OUD EDP",
            link: "/"
        }
    
    ] : [
        {
            id: 1, 
            image: newArrival1,
            title: "بلاي ستيشين",
            description: "نسخة باللونين الأسود والأبيض من PS5 ستُطرح للبيع قريبًا.",
            link: "/"
        },
        {
            id: 2, 
            image: newArrival2,
            title: "مجموعات هواتف الآيفون",
            description: "مجموعة مختارة من هواتف iPhone تمنحك تجربة فريدة",
            link: "/"
        },
        {
            id: 3, 
            image: newArrival3,
            title: "مكبرات صوت",
            description: "مكبرات صوت لاسلكية من أمازون.",
            link: "/"
        },
        {
            id: 4, 
            image: newArrival4,
            title: "عطر",
            description: "عطر Gucci Intense Oud",
            link: "/"
        }
    
    ]
    

    return (
        <>
        <SectionHeader mainTitle={t("newArrival")} subTitle={t("featured")}/>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:max-h-[600px] lg:h-[600px] text-white overflow-hidden mt-15">
            <div className="group flex items-end bg-black w-full h-full relative overflow-hidden">
                <img src={products[0].image} className="w-full h-full object-cover object-top" />
                <div className="absolute top-0 start-0 w-full h-full bg-black/50 z-10 transition group-hover:bg-black/20"></div>
                <div className="flex flex-col gap-2 absolute bottom-8 start-8 z-20">
                    <h3 className={`text-2xl font-semibold ${i18n.language === "en" && "font-inter"}`}>{products[0].title}</h3>
                    <p className="text-sm">{products[0].description}</p>
                    <Link to={products[0].link} className="font-medium underline underline-offset-8">{t("shopNow")}</Link>
                </div>
            </div>
            <div className="flex flex-col gap-8 w-full h-full overflow-hidden">
                <div className="group flex items-end bg-black w-full h-full relative overflow-hidden">
                    <div className={`absolute w-[50%] h-[50%] shadow-[0_1px_0_10] blur-[75px] bg-white top-[50%] start-[50%] ${i18n.language === "en" ? "translate-x-[-50%] translate-y-[-50%]" : "translate-x-[50%] translate-y-[-50%]"}`}></div>
                    <img className="w-full h-full object-cover object-top z-1" src={products[1].image} />
                    <div className="absolute top-0 start-0 w-full h-full bg-black/50 z-10 transition group-hover:bg-black/20"></div>
                    <div className="flex flex-col gap-2 absolute bottom-8 start-8 z-20">
                        <h3 className={`text-2xl font-semibold ${i18n.language === "en" && "font-inter"}`}>{products[1].title}</h3>
                        <p className="text-sm">{products[1].description}</p>
                        <Link to={products[1].link} className="font-medium underline underline-offset-8">{t("shopNow")}</Link>
                    </div>
                </div>
                <div className="flex gap-8 w-full h-full overflow-hidden">
                    <div className=" group flex justify-center items-end bg-black w-full h-full relative overflow-hidden">
                        <div className={`absolute w-[50%] h-[50%] shadow-[0_1px_0_10] blur-[75px] bg-white top-[50%] start-[50%] ${i18n.language === "en" ? "translate-x-[-50%] translate-y-[-50%]" : "translate-x-[50%] translate-y-[-50%]"}`}></div>
                        <img className="w-full h-full object-cover object-top z-1" src={products[2].image} />
                        <div className="absolute top-0 start-0 w-full h-full bg-black/50 z-10 transition group-hover:bg-black/20"></div>
                        <div className="flex flex-col gap-2 absolute bottom-8 start-8 z-20">
                            <h3 className={`text-2xl font-semibold ${i18n.language === "en" && "font-inter"}`}>{products[2].title}</h3>
                            <p className="text-sm">{products[2].description}</p>
                            <Link to={products[2].link} className="font-medium underline underline-offset-8">{t("shopNow")}</Link>
                        </div>
                    </div>
                    <div className="group flex items-end bg-black w-full h-full relative overflow-hidden">
                        <div className={`absolute w-[50%] h-[50%] shadow-[0_1px_0_10] blur-[75px] bg-white top-[50%] start-[50%] ${i18n.language === "en" ? "translate-x-[-50%] translate-y-[-50%]" : "translate-x-[50%] translate-y-[-50%]"}`}></div>
                        <img className="w-full h-full object-cover object-top z-1" src={products[3].image} />
                        <div className="absolute top-0 start-0 w-full h-full bg-black/50 z-10 transition group-hover:bg-black/20"></div>
                        <div className="flex flex-col gap-2 absolute bottom-8 start-8 z-20">
                            <h3 className={`text-2xl font-semibold ${i18n.language === "en" && "font-inter"}`}>{products[3].title}</h3>
                            <p className="text-sm">{products[3].description}</p>
                            <Link to={products[3].link} className="font-medium underline underline-offset-8">{t("shopNow")}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
