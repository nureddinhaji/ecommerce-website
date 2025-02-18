import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function HeaderTopBar() {

    // const [language, setLanguage] = useState("English");
    const [showLanguageMenu, setShowLanguageMenu] = useState(false);
    const {t, i18n} = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
      }

    function handleEnglish() {
        changeLanguage("en");
        setShowLanguageMenu(false);

    }

    function handleArabic() {
        changeLanguage("ar");
        setShowLanguageMenu(false);
    }


      
          useEffect(() => {
        window.document.dir = i18n.dir();
        document.documentElement.className = i18n.language === "ar" ? "lang-ar" : "lang-en";
    }, [i18n.language])

    return (
        <div className="py-3 bg-black">
                <div className="container flex justify-between gap-5">
                    <p className="text-sm text-gray-50 flex-1 text-center">{t("topBarAd")} <Link to="/products/all" className="font-semibold underline ms-2 text-nowrap">{t("shopNow")}</Link>
                    </p>
                    <div>
                        <div className="flex justify-between items-center text-sm text-gray-100 relative min-w-[68px]">
                            <button className="flex justify-between items-center w-full" onClick={() => setShowLanguageMenu(!showLanguageMenu)}>{i18n.language === "ar" ? t("language.ar") : t("language.en")}<svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M6.36403 4.95L11.314 0L12.728 1.414L6.36403 7.778L2.67029e-05 1.414L1.41403 0L6.36403 4.95Z" fill="white"/></svg></button>
                            {showLanguageMenu &&<div className="absolute top-full start-0 bg-black/80 text-white p-3 flex flex-col gap-3 z-10">
                                <button className="text-white" onClick={handleEnglish}>{t("language.en")}</button>
                                <button className="text-white" onClick={handleArabic}>{t("language.ar")}</button>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
    )
}