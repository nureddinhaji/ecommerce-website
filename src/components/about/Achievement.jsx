import { useTranslation } from "react-i18next";

export default function Achievement({icon, title, desc, border = true, titleSize}) {

    const {i18n} = useTranslation();

    return (
        <div className={`group flex-1 fcenter flex-col p-[30px] ${border ? 'border border-black/30' : ''} rounded-sm w-fit transition-colors hover:bg-s-red hover:text-white hover:shadow-[0_2px_10px_2px_#00000033] hover:border-s-red min-w-50`}>
            <div className="fcenter rounded-full w-20 h-20 mb-3 bg-s-dark-gray/30 group-hover:bg-white/30">
            <div className="fcenter w-[58px] aspect-square bg-black text-white rounded-full group-hover:bg-white group-hover:text-black">
            {icon}
            </div>
            </div>
            <span className={`font-bold ${i18n.language === "en" && "font-inter"} ${titleSize} mb-3 text-center`}>{title}</span>
            <p className="text-center">{desc}</p>
        </div>
    )
}