import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function Timer({ targetDate, type = "header" }) {

    const {t} = useTranslation();

    // Append "23:59:59" to the target date if no time is provided
    const formattedTargetDate = targetDate.includes('T') ? targetDate : `${targetDate}T23:59:59`;

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(formattedTargetDate));

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(formattedTargetDate));
        }, 1000);

        return () => clearInterval(timer);
    }, [formattedTargetDate]);

    function calculateTimeLeft(targetDate) {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {
            days: '00',
            hours: '00',
            minutes: '00',
            seconds: '00',
        };

        if (difference > 0) {
            timeLeft = {
                days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0'),
                hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
                minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0'),
                seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
            };
        }

        return timeLeft;
    }

    const { days, hours, minutes, seconds } = timeLeft;

    if(type === "header") {
        return (
        
            <div className="flex gap-4 items-center justify-center md:justify-start w-full flex-1">
                <div className="flex flex-col gap-1">
                    <span className="font-medium text-xs">{t("days")}</span>
                    <span className="text-3xl font-bold font-inter">{days}</span>
                </div>
                <span className="text-4xl text-s-red-light font-semibold">:</span>
                <div className="flex flex-col gap-1">
                    <span className="font-medium text-xs">{t("hours")}</span>
                    <span className="text-3xl font-bold font-inter">{hours}</span>
                </div>
                <span className="text-4xl text-s-red-light font-semibold">:</span>
                <div className="flex flex-col gap-1">
                    <span className="font-medium text-xs">{t("minutes")}</span>
                    <span className="text-3xl font-bold font-inter">{minutes}</span>
                </div>
                <span className="text-4xl text-s-red-light font-semibold">:</span>
                <div className="flex flex-col gap-1">
                    <span className="font-medium text-xs">{t("seconds")}</span>
                    <span className="text-3xl font-bold font-inter">{seconds}</span>
                </div>
            </div>
        );
    }
    if(type === "hero") {
        return (
            <div className="flex gap-4 items-center flex-1">
                <div className="fcenter flex-col w-[62px] aspect-square bg-white text-black rounded-full">
                    <span className="font-semibold">{days}</span>
                    <span className="text-[11px]">{t("days")}</span>
                </div>
                <div className="fcenter flex-col w-[62px] aspect-square bg-white text-black rounded-full">
                    <span className="font-semibold">{hours}</span>
                    <span className="text-[11px]">{t("hours")}</span>
                </div>
                <div className="fcenter flex-col w-[62px] aspect-square bg-white text-black rounded-full">
                    <span className="font-semibold">{minutes}</span>
                    <span className="text-[11px]">{t("minutes")}</span>
                </div>
                <div className="fcenter flex-col w-[62px] aspect-square bg-white text-black rounded-full">
                    <span className="font-semibold">{seconds}</span>
                    <span className="text-[11px]">{t("seconds")}</span>
                </div>
            </div>
        )
    }
    
}