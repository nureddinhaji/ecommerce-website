import { useNavigate } from "react-router-dom";
import Button from "../Button";
import Timer from "./Timer";
import { useTranslation } from "react-i18next";

export default function SectionHeader({ mainTitle, subTitle, control, timer = null }) {
    const navigate = useNavigate();
    const {t} = useTranslation();

    return (
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-[87px]">
            <div className="flex flex-col gap-5">
                <div className="flex items-center gap-[10px] text-s-red font-semibold">
                    <span className="w-5 h-10 rounded-sm bg-current"></span> {subTitle}
                </div>
                <h2 className="text-4xl font-semibold">{mainTitle}</h2>
            </div>
            {timer && <Timer targetDate={timer} />}
            {control === "button" ? (
                <div className="flex justify-end gap-2 w-full md:w-fit absolute md:relative">
                    <Button onClick={() => {navigate("/products/all");}}>{t("viewAll")}</Button>
                </div>
            ) : (
                ""
            )}
        </div>
    );
}
