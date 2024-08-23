import "./sectors.scss"
import sector1 from "../../assets/Layer_x0020_1-1.svg"
import sector2 from "../../assets/Layer_x0020_1-2.svg"

const Sectors = () => {
  return (
    <div className='sectors'>
        <h2>SEKTÖRLER</h2>
        <div className="sector-info">
            <div className="sector sector1">
                <img src={sector1} alt="" />
                <div className="info info1">
                    <h4>HAVALANDIRMA</h4>
                    <h4>AYDINLATMA</h4>
                    <p>Lorem ipsum commonly used in the graphic.</p>
                </div>
            </div>
            <div className="sector sector2">
                <img src={sector2} alt="" />
                <div className="info info2">
                    <h4>OTOMOTİV</h4>
                    <h4>YEDEK PARÇA</h4>
                    <p>Lorem ipsum commonly used in the graphic.</p>
                </div>
            </div>
            <div className="sector sector3">
                <img src="../../src/assets/Layer_x0020_1-4.svg" alt="" />
                <div className="info info3">
                    <h4>AYDINLATMA</h4>
                    <h4>SİSTEMLERİ</h4>
                    <p>Lorem ipsum commonly used in the graphic.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sectors