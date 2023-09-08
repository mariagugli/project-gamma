import { useTranslation } from "react-i18next";
import Btn from "../../components/buttons/Btn";
import IconArrowLeft from "../../components/icons/IconArrowLeft";
import IconError from "../../components/icons/IconError";
import './Error.scss'
import { Link } from "react-router-dom";
import IconBtnText from "../../components/icons/IconBtnText";
import IconArrowRight from "../../components/icons/IconArrowRight";

export default function Error() {

    const { t } = useTranslation();

    return <>

        <section className="section__btnback">
            <Btn isLink={true} to="/" type="btn__back">
                <IconArrowLeft fill="fill-gray__darker" />
            </Btn>
        </section>

        <IconError size="icon-title" fill="purple" stroke="purple" fillFlower="none"/>

        <section className="section__errorPage">
            <h1 className="title__errorPage">{t("errorPage.subtitle")}</h1>
            <p>{t("errorPage.explain")}</p>
        </section>
        <section className="section__errorPage">
            <p>{t("errorPage.newPath")}</p>
            <div className="btns__nav">
                <Btn isLink="true" to="/contact" type="btn btn-text__dark btn-projects" size="small">
                    <IconBtnText bg="icon-dark-bg" br="icon-light-br">
                        <IconArrowRight size="icon-xx-small" fill="fill-peach__lighter"/>
                    </IconBtnText>
                    {t("errorPage.btnContact")}
                </Btn>
                
                <Btn isLink="true" to="/sobremi" type=" btn btn-text__dark" size="small">
                    <IconBtnText bg="icon-dark-bg" br="icon-light-br">
                        <IconArrowRight size="icon-xx-small" fill="fill-peach__lighter"/>
                    </IconBtnText>
                    {t("errorPage.btnAbout")}
                </Btn>
            </div>
        </section>
        <p>{t("errorPage.thanks")}</p>

    </>
}