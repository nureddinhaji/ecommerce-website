import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Error() {

    const {t, i18n} = useTranslation();

    return (
        <main className="min-h-[670px] pt-20 pb-[140px]">
            <div className="container flex flex-col gap-20">
                <nav className="flex gap-3 text-sm">
                    <Link className="text-black/50" to="/">{t("topMenu.home")}</Link>
                    <span className="text-black/50">/</span>
                    <span>{t("404error")}</span>
                </nav>
                <div className="fcenter flex-col text-black">
                    <h2 className={`${i18n.language === "en" ? "text-[110px]" : "text-[80px]"} font-medium mb-12 text-center`}>{t("404notFound")}</h2>
                    <p>{t("404phrqase")}</p>
                </div>
                <div className="fcenter">
                    <Link className="a_special fcenter min-w-[254px] w-fit py-4 px-12 bg-s-red hover:bg-s-red/90 transition text-gray-50 font-medium rounded-sm" to="/">{t("backToHome")}</Link>
                </div>
            </div>
        </main>
    );
}
