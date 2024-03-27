import { useState } from "react";
import "./navbar.scss";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Navbar = () => {

    const [navbar, setNavbar] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
  
    const scrollNum = () => {
      if(window.scrollY >= 50) {
        setNavbar(true)
      } else {
        setNavbar(false)
      }
    } 
  
    window.addEventListener("scroll", scrollNum )

  return (
    <div className={navbar ? "navbar active" : "navbar"} style={{position: navbar && "fixed", top: navbar && "0", backgroundColor: navbar && "#1D1C24"}}>
        <div className="logo-cont">
            <img className="logo" src="../../src/assets/Layer_x0020_1.svg" alt="" />
        </div>
        <div className="rightSide">
            <div className="menuList">
                <ul className="menus">
                    <li className="menu"><span style={{color: "#DF3A11", marginRight: "5px"}}>/</span>Anasayfa</li>
                    <li className="menu">Hakkımızda</li>
                    <li className="menu">Ürünler</li>
                    <li className="menu">Üretim</li>
                    <li className="menu">İletişim</li>
                </ul>
                <div className="language">
                    <span className="arrow-down"><KeyboardArrowDownIcon style={{color: "#fff", backgroundColor: "transparent"}} /></span>
                    <img className="flag" src="../../src/assets/bayrak.png" alt="" />
                </div>
            </div>
            <div className={"hamburger " + (menuOpen && "active")} onClick={() => setMenuOpen(!menuOpen)}>
                <ul className="hambList">
                    <span className="hamb"></span>
                    <span className="hamb"></span>
                </ul>
            </div>
            <div className={"menuListList " + (menuOpen && "active")} id="menuList" style={{top: navbar && "100px", height: "calc(100vh - 100px)", backgroundColor: "#1D1C24"}}>
                <ul>
                    <li onClick={() => setMenuOpen(false)} className="menu1">Anasayfa</li>
                    <li onClick={() => setMenuOpen(false)} className="menu1">Hakkımızda</li>
                    <li onClick={() => setMenuOpen(false)} className="menu1">Ürünler</li>
                    <li onClick={() => setMenuOpen(false)} className="menu1">Üretim</li>
                    <li onClick={() => setMenuOpen(false)} className="menu1">İletişim</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar