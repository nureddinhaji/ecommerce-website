import { Link } from "react-router-dom"
import useUser from "../../contexts/UserContext"
import { useTranslation } from "react-i18next";


export default function HeaderNav({className}) {

    const {user} = useUser();

    const {t} = useTranslation();


    const navElements = [
        {name: t("topMenu.home"), link: "/"},
        {name: t("topMenu.contact"), link: "/contact"},
        {name: t("topMenu.about"), link: "/about"},
        {name: t("topMenu.signup"), link: "/signup"},
    ]

    return (
        <nav>
            <ul className={className}>
                {navElements.map((element, index) => {
                    if(element.name === t("topMenu.signup")) {
                        if(user) {
                            return
                        }
                        return (
                            <li key={element.name + index}>
                                <Link to={element.link}>{element.name}</Link>
                            </li>
                        )
                    }
                    return (
                        <li key={element.name + index}>
                            <Link to={element.link}>{element.name}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}