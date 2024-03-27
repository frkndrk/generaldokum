import "./footer.scss"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const Footer = () => {
  return (
    <div className='footer'>
        <div className="fcontTop">
            <div className="fcontLeft">
                <h1>SİZ HAYAL EDİN,</h1>
                <h1>BİZ ÜRETELİM.</h1>
                <div className="fIcons">
                    <span><img src="../../src/assets/facebook.svg" alt="" /></span>
                    <span><img src="../../src/assets/Group 312767.svg" alt="" /></span>
                    <span><img src="../../src/assets/twitter.svg" alt="" /></span>
                    <span><img src="../../src/assets/linkedin.svg" alt="" /></span>
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
                            <li>info@federaldokum.com</li>
                        </ul>
                    </div>
                    <div className="rght3B">
                        <h4>TELEFON</h4>
                        <ul>
                            <li>Tel: +90 216 441 24 40</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="fcontBottom">
            <div className="cntBtm">
                <div className="logoFd">
                    <img src="../../src/assets/Layer_x0020_1.svg" alt="" />
                    <p>Copyright © 2024 Federal Doküm, Tüm hakları saklıdır.</p>
                </div>
                <div className="cntFtr">
                    <h3>Size ulaşalım</h3>
                    <form action="">
                        <input type="text" placeholder="Mail adresinizi girin" />
                        <button><ArrowForwardIcon style={{color: "fff"}}/></button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer