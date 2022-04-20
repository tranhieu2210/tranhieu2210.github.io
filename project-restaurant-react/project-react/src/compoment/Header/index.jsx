import "./main.css"

const Header = () => {
    return (
        <header className="header">
            <a href="/project-restaurant-react/index.html" className="logo"> <i className="fas fa-utensils" /> Gofood </a>
            <nav className="navbar">
                <a style={{ color: '#27ae60' }} href="/project-restaurant/index.html">Trang chủ</a>
                <a href="/project-restaurant-react/page/about.html">Về chúng tôi</a>
                <a href="/project-restaurant-react/page/menu.html">menu</a>
                <a href="/project-restaurant-react/page/blog.html">blogs</a>
                <a href="/project-restaurant-react/page/contact.html">Liên hệ</a>
            </nav>
            <div className="icons">
                <div id="menu-btn" className="fas fa-bars" />
                <div id="search-btn" className="fas fa-search" />
                <div id="cart-btn" className="fas fa-shopping-cart" />
                <div id="login-btn" className="fas fa-user" />
            </div>
        </header>

    )
}

export default Header