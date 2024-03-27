import "./contDoc.scss"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ContDoc = () => {
  return (
    <div className='contDoc'>
        <div className="cont">
            <p>Bizimle Iletisime Geçin</p>
            <h2>SİZ HAYAL EDİN</h2>
            <h2>BİZ GERÇEKLEŞTİRELİM</h2>
            <div className="right-side">
                <button>Teklif Alın</button>
                <button><ArrowForwardIcon style={{ color: "B72222" }} /></button>
            </div>
        </div>
        <div className="doc"></div>
    </div>
  )
}

export default ContDoc