import { useTranslation } from "react-i18next";
import Btn from "../../components/buttons/Btn";
import IconArrowLeft from "../../components/icons/IconArrowLeft";
import './Ethics.scss'

export default function Cookies() {

    const { t } = useTranslation();

    return <>
        <section className="section__btnback">
            <Btn isLink={true} to="/" type="btn__back">
                <IconArrowLeft fill="fill-gray__darker" />
            </Btn>
        </section>
        <h1 className="title--centre">{t("cookiesPage.title")}</h1>
        <p className="title--centre">{t("cookiesPage.update")}</p>
        <p className="align--left">{t("cookiesPage.intro")}</p>
        <section>
            <h2>{t("cookiesPage.explainCookie.title")}</h2>
            <p>{t("cookiesPage.explainCookie.text")}</p>
        </section>
        <section>
            <h2>{t("cookiesPage.useCookies.title")}</h2>
            <p>{t("cookiesPage.useCookies.text")}</p>
            <ul>
                <li><strong>{t("cookiesPage.useCookies.list.essencial.title")}</strong>: {t("cookiesPage.useCookies.list.essencial.description")}</li>
                <li><strong>{t("cookiesPage.useCookies.list.analytical.title")}</strong>: {t("cookiesPage.useCookies.list.analytical.description")}</li>
            </ul>
        </section>
        <section>
            <h2>{t("cookiesPage.choices.title")}</h2>
            <p>{t("cookiesPage.choices.text")}</p>
        </section>
        <section>
            <h2>{t("cookiesPage.contactForm.title")}</h2>
            <p>{t("cookiesPage.contactForm.text")}</p>
            <ul>
                <li>{t("cookiesPage.contactForm.list.name")}</li>
                <li>{t("cookiesPage.contactForm.list.email")}</li>
                <li>{t("cookiesPage.contactForm.list.message")}</li>
            </ul>
            <p>{t("cookiesPage.contactForm.description")}</p>
        </section>
        <section>
            <h2>{t("cookiesPage.updatesPolicy.title")}</h2>
            <p>{t("cookiesPage.updatesPolicy.text")}</p>
        </section>
        <section>
            <h2>{t("cookiesPage.contact.title")}</h2>
            <p>{t("cookiesPage.contact.text")}</p>
        </section>
        

    </>
}