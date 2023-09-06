import { useTranslation } from "react-i18next";
import Btn from "../../components/buttons/Btn";
import IconArrowLeft from "../../components/icons/IconArrowLeft";
import './Ethics.scss'

export default function Ethics() {

    const { t } = useTranslation();

    return <>
        <section className="section__btnback">
            <Btn isLink={true} to="/" type="btn__back">
                <IconArrowLeft fill="fill-gray__darker" />
            </Btn>
        </section>
        <h1 className="title--centre">{t("ethicPage.title")}</h1>
        <p className="align--left">{t("ethicPage.intro")}</p>
        <section>
            <h2>{t("ethicPage.commitment.title")}</h2>
            <p>{t("ethicPage.commitment.text")}</p>
            <ul>
                <li><strong>{t("ethicPage.commitment.list.quality.name")}</strong>: {t("ethicPage.commitment.list.quality.definition")}</li>
                <li><strong>{t("ethicPage.commitment.list.userCentric.name")}</strong>: {t("ethicPage.commitment.list.userCentric.definition")}</li>
                <li><strong>{t("ethicPage.commitment.list.communication.name")}</strong>: {t("ethicPage.commitment.list.communication.definition")}</li>
                <li><strong>{t("ethicPage.commitment.list.privacy.name")}</strong>: {t("ethicPage.commitment.list.privacy.definition")}</li>
                <li><strong>{t("ethicPage.commitment.list.sustainability.name")}</strong>: {t("ethicPage.commitment.list.sustainability.definition")}</li>
                <li><strong>{t("ethicPage.commitment.list.diversity.name")}</strong>: {t("ethicPage.commitment.list.diversity.definition")}</li>
            </ul>
        </section>
        <section>
            <h2>{t("ethicPage.example.title")}</h2>
            <p>{t("ethicPage.example.text")}</p>
        </section>
        <section>
            <h2>{t("ethicPage.codeConduct.title")}</h2>
            <p>{t("ethicPage.codeConduct.text")}</p>
        </section>
        <section>
            <h2>{t("ethicPage.contact.title")}</h2>
            <p>{t("ethicPage.contact.text")}</p>
        </section>
        <section>
            <p>{t("ethicPage.toSum")}</p>
        </section>
        

    </>
}