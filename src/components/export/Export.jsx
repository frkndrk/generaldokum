import "./export.scss";

const Export = () => {
    return (
        <div className='export'>
            <div className="export-head">
                <h2>İHRACAT NOKTALARIMIZ</h2>
                <p>General Döküm, 1980 yılından bu güne gelen tecrübesi, ürettiği ürünlerdeki uzun ömürlülük ve yüksek kalite standartlarıyla dünyanın dört bir yanına ihracat yapan Alüminyum Pres Döküm ve Kalıp firmasıdır.</p>
            </div>
            <div className="export-map">
                <img src="../../src/assets/OBJECTS.png" alt="" />
                <div className="country export-dots-abd"><img src="../../src/assets/abd.svg" alt="" /><p>Amerika Birleşik Devletleri</p></div>
                <div className="country export-dots-en"><img src="../../src/assets/united kingdom.svg" alt="" /><p>İngiltere</p></div>
                <div className="country export-dots-fr"><img src="../../src/assets/france.svg" alt="" /><p>Fransa</p></div>
                <div className="country export-dots-sp"><img src="../../src/assets/Mask Group 123950.svg" alt="" /><p>İspanya</p></div>
                <div className="country export-dots-alg"><img src="../../src/assets/algeria.svg" alt="" /><p>Cezayir</p></div>
                <div className="country export-dots-itl"><img src="../../src/assets/italy.svg" alt="" /><p>İtalya</p></div>
                <div className="country export-dots-slo"><img src="../../src/assets/slovenya.svg" alt="" /><p>Slovenya</p></div>
                <div className="country export-dots-ger"><img src="../../src/assets/germany.svg" alt="" /><p>Almanya</p></div>
                <div className="country export-dots-den"><img src="../../src/assets/denmark.svg" alt="" /><p>Danimarka</p></div>
                <div className="country export-dots-nth"><img src="../../src/assets/netherland.svg" alt="" /><p>Hollanda</p></div>
                <div className="country export-dots-line"><img src="../../src/assets/Group 312715.svg" alt="" /><p></p></div>
                <div className="country export-general" style={{display: "flex", justifyContent: "start", alignItems: "center"}}><span style={{color: "red", fontSize: "30px", fontWeight: "bold", background: "#fff", borderRadius: "20px", height: "30px", width: "30px", display: "flex", justifyContent: "center", alignItems: "center"}}>G</span><p>General Döküm</p></div>
            </div>

        </div>
    )
}

export default Export