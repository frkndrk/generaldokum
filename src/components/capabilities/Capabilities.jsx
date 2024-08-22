import "./capabilities.scss"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Capabilities = () => {
    return (
        <div className='capabilities'>
            <div className="cont1">
                <h2>KAPASİTE</h2>
                <p>Yenilikçi çözümler geliştirmek için çalışıyoruz</p>
            </div>
            <div className="cont2">
                <div className="cont-area cont1A">
                    <div className="contIn">
                        <h4>TASARIM KALIPLAMA</h4>
                        <div className="contIn1a">
                            <p>Doğru mühendislik çözümlerini General Döküm'ün temel yetkinliğidir. General Döküm'ün proje...</p>
                            <div className="contA1">
                                <button>Devamı</button>
                                <ArrowForwardIcon />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cont-area cont2A">
                    <div className="contIn">
                        <h4>BASINÇLI DÖKÜM</h4>
                        <div className="contIn1a">
                            <p>Basınçlı dökümde çok kritik bir adımdır. Enerji tasarruflu fırınlarımız ve metallerin dikkatli bir...</p>
                            <div className="contA1">
                                <button>Devamı</button>
                                <ArrowForwardIcon />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cont-area cont3A">
                    <div className="contIn">
                        <h4>YÜZEY İŞLEM</h4>
                        <div className="contIn1a">
                            <p>General Döküm'ün basınçlı döküm makine parkı, 160 tondan 1.350 tona kadar 27 makineden oluşmakta olup...</p>
                            <div className="contA1">
                                <button>Devamı</button>
                                <ArrowForwardIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dots">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
        </div>
    )
}

export default Capabilities