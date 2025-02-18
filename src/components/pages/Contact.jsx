import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../Input";
import { useTranslation } from "react-i18next";


export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [phone, setPhone] = useState("");
    const {t, i18n} = useTranslation();

    const submitHandler = e => {
        e.preventDefault();

        console.log(name, email, message, phone);
    };

    const inputLabelsStyl=  `absolute cursor-text ${i18n.language === "en" ? "translate-x-4" : "-translate-x-4"} translate-y-[50%] opacity-50`;
    return (
        <main className="min-h-[670px] pt-20 pb-[140px]">
            <div className="container flex flex-col gap-20">
                <nav className="flex gap-3 text-sm">
                    <Link className="text-black/50" to="/">
                        {t("topMenu.home")}
                    </Link>
                    <span className="text-black/50">/</span>
                    <span>{t("topMenu.contact")}</span>
                </nav>
                <div className="flex flex-col lg:flex-row gap-[30px] text-black">
                    <div className="flex flex-col gap-8 py-10 px-[35px] shadow-[0_1px_13px_0_#0000000D] shrink-0 lg:max-w-[340px] h-full">
                        <div>
                            <div className="flex items-center gap-4 font-medium mb-6">
                                <div className="w-10 h-10 bg-s-red fcenter rounded-full">
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.55423 5.24L6.17123 1.335C5.78123 0.885 5.06623 0.887 4.61323 1.341L1.83123 4.128C1.00323 4.957 0.766232 6.188 1.24523 7.175C4.10685 13.1 8.88528 17.8851 14.8062 20.755C15.7922 21.234 17.0222 20.997 17.8502 20.168L20.6582 17.355C21.1132 16.9 21.1142 16.181 20.6602 15.791L16.7402 12.426C16.3302 12.074 15.6932 12.12 15.2822 12.532L13.9182 13.898C13.8484 13.9712 13.7565 14.0194 13.6566 14.0353C13.5567 14.0512 13.4543 14.0339 13.3652 13.986C11.1357 12.7021 9.28622 10.8502 8.00523 8.619C7.95726 8.52975 7.93989 8.42723 7.95578 8.32716C7.97168 8.22708 8.01996 8.13499 8.09323 8.065L9.45323 6.704C9.86523 6.29 9.91023 5.65 9.55423 5.239V5.24Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                {t("callToUs")}
                            </div>
                            <div className="text-sm space-y-4">
                                <p>{t("weAvailable")}</p>
                                <p>{t("phone")}: +8801611112222</p>
                            </div>
                        </div>
                        <hr />
                        <div>
                            <div className="flex items-center gap-4 font-medium mb-6">
                                <div className="w-10 h-10 bg-s-red fcenter rounded-full">
                                    <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L11 8L21 1M1 15H21V1H1V15Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                {t("writeToUs")}
                            </div>
                            <div className="text-sm space-y-4">
                                <p>{t("responsePhrase")}</p>
                                <p>{t("email")}: customer@exclusive.com</p>
                                <p>{t("email")}: support@exclusive.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="py-10 px-8 shadow-[0_1px_13px_0_#0000000D] w-full">
                        <form onSubmit={submitHandler} className="flex flex-col gap-8">
                            <div className="flex flex-col xl:flex-row gap-4">
                                <div className="w-full">
                                    {!name && (
                                        <label htmlFor="name" className={inputLabelsStyl}>
                                            {t("yourName")} <span className="text-red-500">*</span>
                                        </label>
                                    )}
                                    <Input required onChange={e => setName(e.target.value)} id="name" value={name} type="text" />
                                </div>
                                <div className="w-full">
                                    {!email && (
                                        <label htmlFor="email" className={inputLabelsStyl}>
                                            {t("yourEmail")} <span className="text-red-500">*</span>
                                        </label>
                                    )}
                                    <Input required onChange={e => setEmail(e.target.value)} id="email" value={email} type="email" />
                                </div>
                                <div className="w-full">
                                    {!phone && (
                                        <label htmlFor="phone" className={inputLabelsStyl}>
                                            {t("yourPhone")} <span className="text-red-500">*</span>
                                        </label>
                                    )}
                                    <Input required onChange={e => setPhone(e.target.value)} id="phone" value={phone} type="text" />
                                </div>
                            </div>
                            <textarea className="rounded-sm py-[13px] px-4 bg-gray-100 min-h-[207px] w-full" placeholder={t("yourMessage")} value={message} onChange={e => setMessage(e.target.value)}></textarea>
                            <button type="submit" className="self-end a_special w-full fcenter max-w-[215px] py-4 px-12 bg-s-red hover:bg-s-red/90 transition text-gray-50 font-medium rounded-sm">
                                {t("sendMessage")}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
