import Button from "../Button";
import Timer from "./Timer";
import oneHero from "../../images/oneHero.webp";
import { useTranslation } from "react-i18next";

export default function HeroOneProduct() {

    const {t, i18n} = useTranslation();

    return (
        <div className="flex flex-col-reverse lg:flex-row w-full bg-black text-white p-14 lg:max-h-125 my-20">
            <div className="flex flex-col gap-10 flex-1 justify-around">
                <div className="flex flex-col gap-8">
                    <span className="font-semibold text-[#00FF66]">{t("cats.phones")}</span>
                    <h2 className="font-semibold text-5xl leading-[60px]">
                        {
                            i18n.language == "en" ? <>Enhance Your <br /> Phone Experience</> :  <>استمتع بتجربة جديدة <br /> مع هذه السلسلة</>
                        }
                        
                    </h2>
                    <Timer targetDate="2025-12-31T23:59:59" type="hero" />
                </div>
                <Button background="bg-[#00FF66]" text="text-white">
                    {t("buyNow")}!
                </Button>
            </div>
            <div className="flex justify-center items-center flex-1 relative">
                <div className="absolute w-[50%] h-[50%] shadow-[0_1px_0_10] blur-[100px] bg-white"></div>
                <img className="md:max-w-150 md:max-h-105 px-4 py-11 z-1" src={oneHero} alt="hero" />
            </div>
        </div>
    );
}
