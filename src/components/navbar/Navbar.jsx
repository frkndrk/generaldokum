import "./navbar.scss";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Navbar = () => {
  return (
    <div className="navbar">
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
            <div className="hamburgerMenu">
                <div className="lines">
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar