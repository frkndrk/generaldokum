import "./footer.scss"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import icon1 from "../../assets/facebook.svg";
import icon2 from "../../assets/Group 312767.svg";
import icon3 from "../../assets/twitter.svg";
import icon4 from "../../assets/linkedin.svg";


const Footer = () => {
    return (
        <div className='footer'>
            <div className="fcontTop">
                <div className="fcontLeft">
                    <h1>SİZ HAYAL EDİN,</h1>
                    <h1>BİZ ÜRETELİM.</h1>
                    <div className="fIcons">
                        <span><img src={icon1} alt="" /></span>
                        <span><img src={icon2} alt="" /></span>
                        <span><img src={icon3} alt="" /></span>
                        <span><img src={icon4} alt="" /></span>
                    </div>
                </div>
                <div className="fcontRight">
                    <div className="rght1">
                        <h4>HİZMETLER</h4>
                        <ul>
                            <li>Aydınlatma</li>
                            <li>Havalandırma</li>
                            <li>Otomotiv</li>
                            <li>Elektrik/Elektromanyetik</li>
                            <li>Beyaz Eşya</li>
                            <li>Genel Aluminyum</li>
                        </ul>
                    </div>
                    <div className="rght2">
                        <h4>KURUMSAL</h4>
                        <ul>
                            <li>Hakkımızda</li>
                            <li>Misyon & Vizyon</li>
                            <li>Referanslar</li>
                        </ul>
                    </div>
                    <div className="rght3">
                        <div className="rght3A">
                            <h4>EMAIL</h4>
                            <ul>
                                <li>info@generaldokum.com</li>
                            </ul>
                        </div>
                        <div className="rght3B">
                            <h4>TELEFON</h4>
                            <ul>
                                <li>Tel: +90 212 412 54 32</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fcontBottom">
                <div className="cntBtm">
                    <div className="logoFd">
                        <div className="logo-cont2" style={{ display: "flex", flexDirection: "column"}}>
                            <div style={{ display: "flex", justifyContent: "start", alignItems: "center", fontWeight: "bold", marginBottom: "10px" }}>
                                <span style={{ color: "red", fontSize: "40px", background: "#fff", borderRadius: "20px", height: "40px", width: "40px", display: "flex", justifyContent: "center", alignItems: "center" }}>G</span>
                                <span style={{ color: "#fff", fontSize: "30px" }}>ENERAL</span>
                            </div>
                            <span style={{ color: "#fff", fontSize: "10px", marginTop: "-10px" }}>GENERAL DÖKÜM SANAYİ VE TİC. LTD. ŞTİ.</span>
                        </div>
                        <p>Copyright © 2024 General Doküm, Tüm hakları saklıdır.</p>
                    </div>
                    <div className="cntFtr">
                        <h3>Size ulaşalım</h3>
                        <form action="">
                            <input type="text" placeholder="Mail adresinizi girin" />
                            <button><ArrowForwardIcon style={{ color: "fff" }} /></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer