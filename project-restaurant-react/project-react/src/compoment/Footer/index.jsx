import "./main.css"

const Footer = () => {
    return (
        <section className="footer">
        <div className="newsletter">
            <h3>nhận tin</h3>
            <form >
                <input type="email"  placeholder="nhập email của bạn"  />
                <input type="submit" defaultValue="đăng kí nhận tin" />
            </form>
        </div>
        <div className="box-container">
            <div className="box">
                <h3>menu</h3>
                <a href="/project-restaurant/page/menu.html"><i className="fas fa-arrow-right" /> pizza</a>
                <a href="/project-restaurant/page/menu.html"><i className="fas fa-arrow-right" /> burger</a>
                <a href="/project-restaurant/page/menu.html"><i className="fas fa-arrow-right" /> gà</a>
                <a href="/project-restaurant/page/menu.html"><i className="fas fa-arrow-right" /> mì</a>
                <a href="/project-restaurant/page/menu.html"><i className="fas fa-arrow-right" /> và thêm nữa...</a>
            </div>
            <div className="box">
                <h3>liên kết</h3>
                <a href="/project-restaurant/index.html"> <i className="fas fa-arrow-right" /> Trang chủ</a>
                <a href="/project-restaurant/page/about.html"> <i className="fas fa-arrow-right" /> Về chúng tôi</a>
                <a href="/project-restaurant/page/menu.html"> <i className="fas fa-arrow-right" /> menu</a>
                <a href="/project-restaurant/page/blog.html"> <i className="fas fa-arrow-right" /> blogs</a>
                <a href="/project-restaurant/page/contact.html"> <i className="fas fa-arrow-right" /> Liên hệ</a>
            </div>
            <div className="box">
                <h3>cho bạn</h3>
                <a href="#"> <i className="fas fa-arrow-right" /> đơn hàng của tôi</a>
                <a href="#"> <i className="fas fa-arrow-right" /> tài khoản của tôi</a>
                <a href="#"> <i className="fas fa-arrow-right" /> món ưa thích của tôi</a>
                <a href="#"> <i className="fas fa-arrow-right" /> điều khoản sử dụng</a>
                <a href="#"> <i className="fas fa-arrow-right" /> Chính sách bảo mật</a>
            </div>
            <div className="box">
                <h3>giờ hoạt động</h3>
                <p>thứ 2 : 7:00 tới 22:00</p>
                <p>thứ 3 : 7:00 tới 22:00</p>
                <p>thứ 4 : 7:00 tới 22:00</p>
                <p>thứ 5 : 7:00 tới 22:00</p>
                <p>thứ 5 : 7:00 tới 22:00</p>
                <p>thứ 7 và chủ nhật đóng cửa</p>
            </div>
            <div className="box">
                <h3>công ty TNHH gofood VN</h3>
                <p>địa chỉ : số 317 trung văn - quận nam từ liêm - hà nội</p>
                <p>Email : tth221097@gmail.com</p>
                <p>Phone : 0396552142</p>
            </div>
        </div>
        <div className="bottom">
            <div className="share">
                <a href="#" className="fab fa-facebook-f" />
                <a href="#" className="fab fa-twitter" />
                <a href="#" className="fab fa-instagram" />
                <a href="#" className="fab fa-youtube" />
            </div>
            <div className="credit"> bản quyền thuộc về <span>Hiếu Trần</span> | all rights reserved! </div>
        </div>
    </section>
    )

}


export default Footer