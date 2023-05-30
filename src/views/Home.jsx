import Btn from "../components/buttons/Btn";
import Card from "../components/cards/Card";
import IconArrowRight from "../components/icons/IconArrowRight";
import IconBtnText from "../components/icons/IconBtnText";
import IconCodepen from "../components/icons/IconCodepen";
import Input from "../components/inputs/InputForm";
import InputToggleSwitch from "../components/inputs/InputToggleSwitch";
import Searcher from "../components/searcher/Searcher";
import Weather from "../components/weather/Weather";

export default function Home() {
    return <>
            <h1>Hola, soy la home</h1>
            <Btn type="btn-primary" size="btn-big">
                <IconCodepen size="small" fill="white"/>
                Hola
            </Btn>
            <Btn type="btn-text__dark" size="btn-big">
                <IconBtnText variantbg="gray__darker" variantbr="peach__lighter" icon={<IconBtnText variantbg="icon-dark-bg" variantbr="icon-light-br" icon={<IconArrowRight size="xx-small" fill="peach__lighter"/>} />}/>
                Hola
            </Btn>

            <Input  type="input-row" label="Nombre" placeholder="Escribe tu nombre">
            </Input>

            <Card type="card-weather">
                <Searcher />
                <Weather />
            </Card>
    </>
        
}