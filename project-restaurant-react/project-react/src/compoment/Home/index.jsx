import './main.css'
import { Link } from "react-router-dom"

const Banner = () => {
    return (
        <div>
            <section className="home" id="home">
                <div className="content">
                    <span>hey, foodies</span>
                    <h3>hôm nay bạn muốn ăn gì ?</h3>
                    <h3>chúng tôi đều có để phục vụ bạn 😋</h3>
                    <p>Đừng để bụng rỗng, chúng tôi sẽ giúp bạn nạp đầy năng lượng bằng những món ăn không những ngon mà còn phù
                        hợp với túi tiền của bạn.</p>
                    <a href="/project-restaurant/page/menu.html" className="btn">đặt món ngay</a>
                </div>
                <div className="image">
                    <img src="src/image/home-img.png" alt="" className="home-img" />
                    <img src="src/image/home-parallax-img.png" alt="" className="home-parallax-img" />
                </div>
            </section>

            <section className="category">



            </section>

            <section className="about" id="about">
                <div className="image">
                    <img src="src/image/about-img.png" alt="" />
                </div>
                <div className="content">
                    <span>Tại sao nên chọn chúng tôi?</span>
                    <h3 className="title">Điều gì làm cho món ăn của chúng tôi trở nên đặc biệt!</h3>
                    <p>bằng sự thấu hiểu khách hàng, chúng tôi luôn cố gắng đem tới cho bạn những món ăn ngon, sạch, đầy đủ chất
                        dinh dưỡng cho bạn và tất cả mọi người</p>
                    <a href="/project-restaurant/page/blog.html" className="btn">xem tiếp</a>
                    <div className="icons-container">
                        <div className="icons">
                            <img src="src/image/serv-1.png" alt="" />
                            <h3>giao hàng nhanh</h3>
                        </div>
                        <div className="icons">
                            <img src="src/image/serv-2.png" alt="" />
                            <h3>nguyên liệu sạch</h3>
                        </div>
                        <div className="icons">
                            <img src="src/image/serv-3.png" alt="" />
                            <h3>chất lượng hàng đầu</h3>
                        </div>
                        <div className="icons">
                            <img src="src/image/serv-4.png" alt="" />
                            <h3>hỗ trợ 24/7</h3>
                        </div>
                    </div>
                </div>
            </section>

            <section className="popular" id="popular">
                <div className="heading">
                    <span>best seller</span>
                    <h3>Các món ăn bán chạy nhất của chúng tôi</h3>
                </div>
                <div className="box-container">
                    <div className="box" data-name={1}>
                        <a href="#" className="fas fa-heart" />
                        <div className="image">
                            <img src="src/image/food-1.png" alt="" />
                        </div>
                        <div className="content">
                            <h3>Sủi cảo</h3>
                            <div className="stars">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star-half-alt" />
                                <span> (50) </span>
                            </div>
                            <div className="price">100.000đ <span>150.000đ</span></div>
                            <button className="btn xemthemBtn">Xem thêm
                            </button></div>
                    </div>
                    <div className="box" data-name={2}>
                        <a href="#" className="fas fa-heart" />
                        <div className="image">
                            <img src="src/image/food-2.png" alt="" />
                        </div>
                        <div className="content">
                            <h3>burger tex supreme</h3>
                            <div className="stars">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star-half-alt" />
                                <span> (128) </span>
                            </div>
                            <div className="price">63.000đ <span>90.000đ</span></div>
                            <button className="btn xemthemBtn">Xem thêm
                            </button></div>
                    </div>
                    <div className="box" data-name={3}>
                        <a href="#" className="fas fa-heart" />
                        <div className="image">
                            <img src="src/image/food-3.png" alt="" />
                        </div>
                        <div className="content">
                            <h3>seafood pesto</h3>
                            <div className="stars">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star-half-alt" />
                                <span> (72) </span>
                            </div>
                            <div className="price">199.000đ <span>250.000đ</span></div>
                            <button className="btn xemthemBtn">Xem thêm
                            </button></div>
                    </div>
                    <div className="box" data-name={4}>
                        <a href="#" className="fas fa-heart" />
                        <div className="image">
                            <img src="src/image/food-4.png" alt="" />
                        </div>
                        <div className="content">
                            <h3>black burger</h3>
                            <div className="stars">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star-half-alt" />
                                <span> (92) </span>
                            </div>
                            <div className="price">99.000đ <span>125.000đ</span></div>
                            <button className="btn xemthemBtn">Xem thêm
                            </button></div>
                    </div>
                    <div className="box" data-name={5}>
                        <a href="#" className="fas fa-heart" />
                        <div className="image">
                            <img src="src/image/food-5.png" alt="" />
                        </div>
                        <div className="content">
                            <h3>veggie delight</h3>
                            <div className="stars">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star-half-alt" />
                                <span> (66) </span>
                            </div>
                            <div className="price">199.000đ <span>250.000đ</span></div>
                            <button className="btn xemthemBtn">Xem thêm
                            </button></div>
                    </div>
                    <div className="box" data-name={6}>
                        <a href="#" className="fas fa-heart" />
                        <div className="image">
                            <img src="src/image/food-6.png" alt="" />
                        </div>
                        <div className="content">
                            <h3>chicken supreme</h3>
                            <div className="stars">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star-half-alt" />
                                <span> (70) </span>
                            </div>
                            <div className="price">199.000đ <span>250.000đ</span></div>
                            <button className="btn xemthemBtn">Xem thêm
                            </button></div>
                    </div>
                    <div className="box" data-name={7}>
                        <a href="#" className="fas fa-heart" />
                        <div className="image">
                            <img src="src/image/food-7.png" alt="" />
                        </div>
                        <div className="content">
                            <h3>burger mexicana</h3>
                            <div className="stars">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star-half-alt" />
                                <span> (54) </span>
                            </div>
                            <div className="price">63.000đ <span>99.000đ</span></div>
                            <button className="btn xemthemBtn">Xem thêm
                            </button></div>
                    </div>
                    <div className="box" data-name={8}>
                        <a href="#" className="fas fa-heart" />
                        <div className="image">
                            <img src="src/image/food-8.png" alt="" />
                        </div>
                        <div className="content">
                            <h3>chicken black pepper</h3>
                            <div className="stars">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star-half-alt" />
                                <span> (45) </span>
                            </div>
                            <div className="price">199.000đ <span>250.000đ</span></div>
                            <button className="btn xemthemBtn">Xem thêm
                            </button></div>
                    </div>
                </div>
            </section>

            <section className="banner">
                <div className="row-banner">
                    <div className="content">
                        <span>gấp đôi phô mai</span>
                        <h3>burger tex</h3>
                        <p>với coca-cola và khoai tây chiên</p>
                        <a href="/project-restaurant/page/menu.html" className="btn">đặt ngay</a>
                    </div>
                </div>
                <div className="grid-banner">
                    <div className="grid">
                        <img src="src/image/banner-1.png" alt="" />
                        <div className="content">
                            <span>special offer</span>
                            <h3>giảm giá lên tới 50%</h3>
                            <a href="/project-restaurant/page/menu.html" className="btn">đặt ngay</a>
                        </div>
                    </div>
                    <div className="grid">
                        <img src="src/image/banner-2.png" alt="" />
                        <div className="content center">
                            <span>special offer</span>
                            <h3>upsize lên tới 25%</h3>
                            <a href="/project-restaurant/page/menu.html" className="btn">đặt ngay</a>
                        </div>
                    </div>
                    <div className="grid">
                        <img src="src/image/banner-3.png" alt="" />
                        <div className="content">
                            <span>ưu đãi giới hạn</span>
                            <h3>hoàn tiền 100%</h3>
                            <a href="/project-restaurant/page/menu.html" className="btn">đặt ngay</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="menu" id="menu">
                <div className="heading">
                    <span>các món trên bạn đã thử ?</span>
                    <h3>hãy thử các món mới của chúng tôi</h3>
                </div>
                <div className="box-container">
                    <a href="#" className="box">
                        <img src="src/image/menu-1.png" alt="" />
                        <div className="content">
                            <h3>burger tôm</h3>
                            <div className="price">70.000đ</div>
                        </div>
                    </a>
                    <a href="#" className="box">
                        <img src="src/image/menu-2.png" alt="" />
                        <div className="content">
                            <h3>haiwaiian paradise</h3>
                            <div className="price">220.000đ</div>
                        </div>
                    </a>
                    <a href="#" className="box">
                        <img src="src/image/menu-3.jpg" alt="" />
                        <div className="content">
                            <h3>bánh cuộn tex</h3>
                            <div className="price">65.000đ</div>
                        </div>
                    </a>
                    <a href="#" className="box">
                        <img src="src/image/menu-4.png" alt="" />
                        <div className="content">
                            <h3>bánh mì bò sốt tiêu đen</h3>
                            <div className="price">55.000đ</div>
                        </div>
                    </a>
                    <a href="#" className="box">
                        <img src="src/image/menu-5.png" alt="" />
                        <div className="content">
                            <h3>khoai chiên rong biển</h3>
                            <div className="price">40.000đ</div>
                        </div>
                    </a>
                    <a href="#" className="box">
                        <img src="src/image/menu-6.png" alt="" />
                        <div className="content">
                            <h3>fisherman's tuna</h3>
                            <div className="price">220.000đ</div>
                        </div>
                    </a>
                </div>
            </section>


            <section className="order" id="order">
                <div className="heading">
                    <span>đặt ngay</span>
                    <h3>giao hàng tại nhà nhanh chóng</h3>
                </div>
                <div className="icons-container">
                    <div className="icons">
                        <img src="src/image/icon-1.png" alt="" />
                        <h3>7:00 tới 22:00</h3>
                    </div>
                    <div className="icons">
                        <img src="src/image/icon-2.png" alt="" />
                        <h3>039.655.2142</h3>
                    </div>
                    <div className="icons">
                        <img src="src/image/icon-3.png" alt="" />
                        <h3>317 Trung Văn, Nam Từ Liêm, Hà Nội</h3>
                    </div>
                </div>
                <form >
                    <div className="flex">
                        <div className="inputBox">
                            <span>Tên của bạn</span>
                            <input type="text" placeholder="VD : Nguyễn Văn A" />
                        </div>
                        <div className="inputBox">
                            <span>Số điện thoại</span>
                            <input type="text" placeholder="VD : 0396552142" />
                        </div>
                    </div>
                    <div className="flex">
                        <div className="inputBox">
                            <span>Tên món</span>
                            <input type="text" placeholder="VD : Khoai tây chiên " />
                        </div>
                        <div className="inputBox">
                            <span>số lượng</span>
                            <input type="number" />
                        </div>
                    </div>
                    <div className="flex">
                        <div className="inputBox">
                            <span>Lời nhắn</span>
                            <input type="text" placeholder="VD : Giao giờ hành chính" />
                        </div>
                        <div className="inputBox">
                            <span>Thời gian nhận hàng</span>
                            <input type="datetime-local" />
                        </div>
                    </div>
                    <div className="flex">
                        <div className="inputBox">
                            <textarea placeholder="địa chỉ của bạn" cols={30} rows={10} defaultValue={""} />
                        </div>
                        <div className="inputBox">
                            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.0849851283447!2d105.78292821542287!3d20.989230194501406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acca61b45097%3A0xb8e68c9a584eeeaf!2zMzE3IFRydW5nIFbEg24sIHBoxrDhu51uZywgTmFtIFThu6sgTGnDqm0sIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1644475276989!5m2!1svi!2s" allowFullScreen loading="lazy" />
                        </div>
                    </div>
                    <input type="submit" value="giao hàng" className="btn" />
                </form>
            </section>

            <section className="blogs" id="blogs">
                <div className="heading">
                    <span>our blogs</span>
                    <h3>Câu chuyện hàng ngày của chúng tôi</h3>
                </div>
                <div className="box-container">
                    <div className="box">
                        <div className="image">
                            <h3> <i className="fas fa-calendar" /> 2 tháng 2, 2022 </h3>
                            <img src="src/image/blog-1.jpg" alt="" />
                        </div>
                        <div className="content">
                            <div className="tags">
                                <a href="#"> <i className="fas fa-tag" /> food / </a>
                                <a href="#"> <i className="fas fa-tag" /> burger / </a>
                            </div>
                            <h3>thưởng thức burger đúng cách </h3>
                            <p>hôm nay chúng tôi sẽ hướng dẫn các bạn thưởng thức burger đúng cách và ngon nhất</p>
                            <a href="/project-restaurant/page/blog-details.html" className="btn">xem thêm</a>
                        </div>
                    </div>
                    <div className="box">
                        <div className="image">
                            <h3> <i className="fas fa-calendar" /> 28 tháng 1, 2022 </h3>
                            <img src="src/image/blog-2.jpg" alt="" />
                        </div>
                        <div className="content">
                            <div className="tags">
                                <a href="#"> <i className="fas fa-tag" /> food / </a>
                                <a href="#"> <i className="fas fa-tag" /> roll cake / </a>
                            </div>
                            <h3>cách làm bánh cuộn đúng chuẩn</h3>
                            <p>bạn muốn làm bánh cuộn cho người thân và gia đình nhưng không biết cách ?</p>
                            <a href="/project-restaurant/page/blog-details.html" className="btn">xem thêm</a>
                        </div>
                    </div>
                    <div className="box">
                        <div className="image">
                            <h3> <i className="fas fa-calendar" /> 28 tháng 1, 2022 </h3>
                            <img src="src/image/blog-3.jpg" alt="" />
                        </div>
                        <div className="content">
                            <div className="tags">
                                <a href="#"> <i className="fas fa-tag" /> food / </a>
                                <a href="#"> <i className="fas fa-tag" /> burger / </a>
                                <a href="#"> <i className="fas fa-tag" /> pizza / </a>
                                <a href="#"> <i className="fas fa-tag" /> healthy </a>
                            </div>
                            <h3>ăn thả ga mà không lo thả cân ...</h3>
                            <p>bạn lo lắng vì ăn quá nhiều đồ ăn nhanh sẽ làm bạn tăng cân nhanh chóng ?</p>
                            <a href="/project-restaurant/page/blog-details.html" className="btn">xem thêm</a>
                        </div>
                    </div>
                </div>
            </section>






        </div>



    )

}


export default Banner