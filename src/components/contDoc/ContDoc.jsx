import "./contDoc.scss"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import piece1 from "../../assets/Mask Group 4510.png";
import piece2 from "../../assets/Mask Group 4509.png";
import piece3 from "../../assets/sdsasadssae.fw.png";
import piece4 from "../../assets/Mask Group 4510.png";
import piece5 from "../../assets/Mask Group 4508.png";
import piece6 from "../../assets/sdsasae.fw.png";
import piece7 from "../../assets/sdsasae.fw.png";
import piece8 from "../../assets/sdsasadssae.fw.png";
import piece9 from "../../assets/Mask Group 4510.png";
import piece10 from "../../assets/Mask Group 4508.png";
import piece11 from "../../assets/sdsasadssae.fw.png";

import doc1 from "../../assets/Group 312762.png";
import doc2 from "../../assets/Group 312763.png";
import doc3 from "../../assets/Group 312764.png";
import doc4 from "../../assets/Group 312765.png";

import logo1 from "../../assets/Mask Group 123951.png";
import logo2 from "../../assets/Layer_x0020_1-5.svg";
import logo3 from "../../assets/Page-1.svg";
import logo4 from "../../assets/Group 312745.svg";
import logo5 from "../../assets/100 logo.svg";


const ContDoc = () => {
    return (
        <div className='contDoc'>
            <div className="cntDc">
                <img src={piece1} alt="" />
                <img src={piece2} alt="" />
                <img src={piece3} alt="" />
                <img src={piece4} alt="" />
                <img src={piece5} alt="" />
                <img src={piece6} alt="" />
                <img src={piece7} alt="" />
                <img src={piece8} alt="" />
                <img src={piece9} alt="" />
                <img src={piece10} alt="" />
                <img src={piece11} alt="" />
                <div className="cont">
                    <p>Bizimle Iletisime Geçin</p>
                    <h2>SİZ HAYAL EDİN</h2>
                    <h2>BİZ GERÇEKLEŞTİRELİM</h2>
                    <div className="right-side">
                        <button>Teklif Alın</button>
                        <button><ArrowForwardIcon style={{ color: "B72222" }} /></button>
                    </div>
                </div>
            </div>
            <div className="doc">
                <div className="docCont">
                    <img src={doc1} alt="" />
                    <img src={doc2} alt="" />
                    <img src={doc3} alt="" />
                    <img src={doc4} alt="" />
                </div>
                <div className="certificate">
                    <div className="logos">
                        <img src={logo1} alt="" />
                        <img src={logo2} alt="" />
                        <img src={logo3} alt="" />
                        <img src={logo4} alt="" />
                        <img src={logo5} alt="" />
                    </div>
                    <h3>SERTİFİKALAR VE ÜYELİKLER</h3>
                </div>
            </div>
        </div>
    )
}

export default ContDoc