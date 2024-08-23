import "./export.scss";
import country1 from "../../assets/abd.svg";
import country2 from "../../assets/united kingdom.svg";
import country3 from "../../assets/france.svg";
import country4 from "../../assets/Mask Group 123950.svg";
import country5 from "../../assets/algeria.svg";
import country6 from "../../assets/italy.svg";
import country7 from "../../assets/slovenya.svg";
import country8 from "../../assets/germany.svg";
import country9 from "../../assets/denmark.svg";
import country10 from "../../assets/netherland.svg";
import country11 from "../../assets/Group 312715.svg";
import world from "../../assets/OBJECTS.png";

const Export = () => {
    return (
        <div className='export'>
            <div className="export-head">
                <h2>İHRACAT NOKTALARIMIZ</h2>
                <p>General Döküm, 1980 yılından bu güne gelen tecrübesi, ürettiği ürünlerdeki uzun ömürlülük ve yüksek kalite standartlarıyla dünyanın dört bir yanına ihracat yapan Alüminyum Pres Döküm ve Kalıp firmasıdır.</p>
            </div>
            <div className="export-map">
                <img src={world} alt="" />
                <div className="country export-dots-abd"><img src={country1} alt="" /><p>Amerika Birleşik Devletleri</p></div>
                <div className="country export-dots-en"><img src={country2} alt="" /><p>İngiltere</p></div>
                <div className="country export-dots-fr"><img src={country3} alt="" /><p>Fransa</p></div>
                <div className="country export-dots-sp"><img src={country4} alt="" /><p>İspanya</p></div>
                <div className="country export-dots-alg"><img src={country5} alt="" /><p>Cezayir</p></div>
                <div className="country export-dots-itl"><img src={country6} alt="" /><p>İtalya</p></div>
                <div className="country export-dots-slo"><img src={country7} alt="" /><p>Slovenya</p></div>
                <div className="country export-dots-ger"><img src={country8} alt="" /><p>Almanya</p></div>
                <div className="country export-dots-den"><img src={country9} alt="" /><p>Danimarka</p></div>
                <div className="country export-dots-nth"><img src={country10} alt="" /><p>Hollanda</p></div>
                <div className="country export-dots-line"><img src={country11} alt="" /><p></p></div>
                <div className="country export-general" style={{display: "flex", justifyContent: "start", alignItems: "center"}}><span style={{color: "red", fontSize: "30px", fontWeight: "bold", background: "#fff", borderRadius: "20px", height: "30px", width: "30px", display: "flex", justifyContent: "center", alignItems: "center"}}>G</span><p>General Döküm</p></div>
            </div>

        </div>
    )
}

export default Export