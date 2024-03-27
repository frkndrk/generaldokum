import { useEffect, useState } from "react";
import "./intro.scss";
import homeImg1 from "../../assets/factory.png"
import homeVideo from "../../assets/h7-video-2.mp4"

const Intro = () => {
  const [currentState, setCurrentState] = useState(0)
  const [navbar, setNavbar] = useState(false)

  const scrollNum = () => {
    if(window.scrollY >= 50) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  } 

  window.addEventListener("scroll", scrollNum )

  const homePageImages = [
    {
      id: 1,
      img: homeImg1,
      descH1: "SON TEKNOLOJİ",
      descH2: "MAKİNE PARKURU"
    },
    {
      id: 2,
      descH1: "SÜRDÜRÜLEBİLİR",
      descH2: "BÜYÜME"
    }
  ]
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if(currentState === 1) {
        setCurrentState(0)
      } else {
        setCurrentState(currentState + 1)
      }
    }, 5000)
    return () => clearTimeout(timer)
  }, [currentState])
  
  return (
    <div className='intro' style={{marginTop: navbar && "0"}}>
      {currentState == 0 
      ?
        <img src={homeImg1} alt="" />
      :
        <video autoPlay muted loop>
          <source src={homeVideo} type="video/mp4"/>
        </video>
      }
      <div className="bgImg">
      </div>
      <div className="slogan">
        {homePageImages.map((item, index) => (
          <h1 key={index} style={{opacity: index === currentState ? 1 : 0}}>{item.descH1} <br/> <span style={{color: currentState == 1 ? "#B72222" : "#fff"}}>{item.descH2}</span></h1>
        ))}
        <p>50 yılı aşkın tecrübe ve deneyim.</p>
      </div>
      <div className="fifty-years">
        <div className="icons">
          <img className="icon" src="../../src/assets/Group 312766.svg" alt="" />
        </div>
        <p>Sektörde uzun yıllardır kaliteden ödün vermeden üretmeye devam ediyoruz</p>
      </div>
      
    </div>
  )
}

export default Intro