import "./products.scss"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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
                    <div className="product"><img src="../../src/assets/Mask Group 4510.png" alt="" /><div className="product-info"><h4>OTOMOTİV</h4><p>Yedek Parça</p></div></div>
                    <div className="product"><img src="../../src/assets/Mask Group 4509.png" alt="" /><div className="product-info"><h4>DIŞ MEKAN AYDINLATMA</h4><p>Sokak Lambası</p></div></div>
                    <div className="product"><img src="../../src/assets/Mask Group 4508.png" alt="" /><div className="product-info"><h4>HAVALANDIRMA</h4><p>Pervane</p></div></div>
                    <div className="product"><img src="../../src/assets/sdsasadssae.fw.png" alt="" /><div className="product-info"><h4>OTOMOTİV</h4><p>Yedek Parça</p></div></div>
                    <div className="product"><img src="../../src/assets/sdsasae.fw.png" alt="" /><div className="product-info"><h4>İÇ MEKAN AYDINLATMA</h4><p>Sokak Lambası</p></div></div>
                    <div className="product"><img src="../../src/assets/sdsae.fw.png" alt="" /><div className="product-info"><h4>HAVALANDIRMA</h4><p>Pervane</p></div></div>
                </div>
            </div>
        </div>
    )
}

export default Products