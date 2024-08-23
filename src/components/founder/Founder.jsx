import "./founder.scss"
import founder from "../../assets/boss2.jpg";

const Founder = () => {
  return (
    <div className='founder'>
        <div className="contInfo">
            <div className="info">
                <h3>Faruk Demir <span>(Kurucu)</span></h3>
                <p>1978 yılında İstanbul'da kurulan General Döküm, geçtiğimiz yarım yüzyil boyunca istikrarlı ve yenilikçi bir büyüme yakaladı ve hızla değisen küresel otomotiv endüstrisi için güvenilir bir tedarikçi olarak adını duyurdu.</p><br/>
                <p>Bugün General Döküm olarak otomotiv sektöründe edindiğimiz bilgi ve tecrübemizi, tasarım ve ürün geliştirme konularında üretim öncesinde tam bir işbirliği içinde calıştığımız müşterilerimize aktarıyoruz.</p>
            </div>
            <div className="pic">
                <img src={founder} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Founder