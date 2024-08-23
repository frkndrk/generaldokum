import "./products.scss"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import product1 from "../../assets/Mask Group 4510.png";
import product2 from "../../assets/Mask Group 4509.png";
import product3 from "../../assets/Mask Group 4508.png";
import product4 from "../../assets/sdsasadssae.fw.png";
import product5 from "../../assets/sdsasae.fw.png";
import product6 from "../../assets/sdsae.fw.png";

const Products = () => {
    return (
        <div className='products'>
            <div className="main-cont">
                <div className="header">
                    <div className="heading">
                        <p>TÜM ÜRÜNLER</p>
                        <h4>ÜRÜNLER</h4>
                    </div>
                    <div className="right-side">
                        <button>Hepsini gör</button>
                        <button><ArrowForwardIcon style={{ color: "B72222" }} /></button>
                    </div>
                </div>
                <div className="product-cont">
                    <div className="product"><img src={product1} alt="" /><div className="product-info"><h4>OTOMOTİV</h4><p>Yedek Parça</p></div></div>
                    <div className="product"><img src={product2} alt="" /><div className="product-info"><h4>DIŞ MEKAN AYDINLATMA</h4><p>Sokak Lambası</p></div></div>
                    <div className="product"><img src={product3} alt="" /><div className="product-info"><h4>HAVALANDIRMA</h4><p>Pervane</p></div></div>
                    <div className="product"><img src={product4} alt="" /><div className="product-info"><h4>OTOMOTİV</h4><p>Yedek Parça</p></div></div>
                    <div className="product"><img src={product5} alt="" /><div className="product-info"><h4>İÇ MEKAN AYDINLATMA</h4><p>Sokak Lambası</p></div></div>
                    <div className="product"><img src={product6} alt="" /><div className="product-info"><h4>HAVALANDIRMA</h4><p>Pervane</p></div></div>
                </div>
            </div>
        </div>
    )
}

export default Products