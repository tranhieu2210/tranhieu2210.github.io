import "./main.css"

const Header = () => {
      
        




      return (
        <div className="header1">
          <header className="header">
            <a href="/project-restaurant/index.html" className="logo"> <i className="fas fa-utensils" /> Gofood </a>
            <nav className="navbar">
              <a style={{color: '#27ae60'}} href="/project-restaurant/index.html">Trang chủ</a>
              <a href="/project-restaurant/page/about.html">Về chúng tôi</a>
              <a href="/project-restaurant/page/menu.html">Menu</a>
              <a href="/project-restaurant/page/blog.html">Blogs</a>
              <a href="/project-restaurant/page/contact.html">Liên hệ</a>
            </nav>
            <div className="icons">
              <div id="menu-btn" className="fas fa-bars" />
              <div id="search-btn" className="fas fa-search" />
              <div id="cart-btn" className="fas fa-shopping-cart" />
              <div id="login-btn" className="fas fa-user" />
            </div>
          </header>
          <section className="search-form-container">
            <form >
              <input type="search"  placeholder="bạn muốn ăn gì ..." id="search-box" />
              <label htmlFor="search-box" className="fas fa-search" />
            </form>
          </section>
          <section className="shopping-cart-container" >
            <div className="products-container">
              <h3 className="title">giỏ hàng</h3>
              <div className="box-container">
                <div className="box">
                  <div className="remove">
                    <span className="close">
                      <i className="fa fa-times" aria-hidden="true" />
                    </span>
                  </div>
                  <img src="" alt="" />
                  <div className="content">
                    <h3>burger tex supreme</h3>
                    <span> số lượng : </span>
                    <input type="number"  defaultValue={1}  />
                    <br />
                    <span> giá : </span>
                    <span className="price"> 55.000đ </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="info">
              <h3 className="title"> Thông tin giao hàng </h3>
              <form >
                <div className="flex">
                  <div className="inputBox">
                    <span>Tên của bạn</span>
                    <input type="text" placeholder="VD : Nguyễn Văn A"   />
                  </div>
                  <div className="inputBox">
                    <span>Số điện thoại</span>
                    <input type="text"   />
                  </div>
                </div>
                <div className="flex">
                  <div className="inputBox">
                    <span>Lời nhắn</span>
                    <input type="text" placeholder="VD : Giao giờ hành chính"   />
                  </div>
                  <div className="inputBox">
                    <span>Thời gian nhận hàng</span>
                    <input type="datetime-local" />
                  </div>
                </div>
                <div className="flex">
                  <div className="inputBox">
                    <span>Địa chỉ giao hàng</span>
                    <input type="text" placeholder="VD : 317 Trung Văn"   />
                  </div>
                </div>
              </form> </div>
            <div className="cart-total">
              <h3 className="title"> hoá đơn </h3>
              <div className="box">
                <h3 className="subtotal"> tạm tính : <span>0</span> </h3>
                <h3 className="discount"> giảm giá : <span>0</span> </h3>
                <h3 className="shipping"> vận chuyển : <span>0</span> </h3>
                <h3 className="total"> thành tiền : <span>0</span> </h3>
                <div>
                  <div className="promotion">
                    <input placeholder="Mã Giảm Giá" type="text" id="promo-code" autoComplete="off" />
                    <button type="button" />
                  </div>
                </div>
                <a href="#" className="btn">thanh toán </a>
              </div>
            </div>
          </section>
          <div className="login-form-container">
            <form >
              <h3>đăng nhập</h3>
              <input type="email"  placeholder="tên tài khoản"  className="box" />
              <input type="password"  placeholder="mật khẩu"  className="box" />
              <div className="remember">
                <input type="checkbox"  id="remember-me" />
                <label htmlFor="remember-me">giữ tôi đăng nhập</label>
              </div>
              <input type="submit" defaultValue="đăng nhập" className="btn" />
              <p>quên mật khẩu ? <a href="#">bấm vào đây</a></p>
              <p>chưa có tài khoản ? <a href="#">tạo tài khoản</a></p>
            </form>
          </div>
        </div>
      );
    }

export default Header