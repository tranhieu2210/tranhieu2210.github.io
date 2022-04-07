import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src="https://bizweb.dktcdn.net/100/358/756/themes/725897/assets/logo.png?1646025656564" alt="" />
            </div>
            
            <div className="nav">
            <ul className="menu">
                <li className="menu-items">
                    <NavLink to="/">TRANG CHỦ</NavLink>
                </li>
                <li className="menu-items">
                    <NavLink to="/category">THƯƠNG HIỆU</NavLink>
                </li>
                <li className="menu-items">
                    <NavLink to="/">TIN TỨC</NavLink>
                </li>
            </ul>
            </div>
        </div>
    )
}



export default Header