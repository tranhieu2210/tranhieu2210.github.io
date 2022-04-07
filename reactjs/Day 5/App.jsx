const App = () => {
    const products = [
        {
            id : 1,
            name: 'Samsung S22 Ultra',
            price: 30000000,
            image : "https://photo-cms-sggp.zadn.vn/Uploaded/2022/uqvpsqmb/2022_02_12/image001_jwqh.jpg"
        },
        {
            id : 2,
            name: 'Iphone 13 Promax',
            price: 34000000,
            image : "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-gold-1-600x600.jpg"
        },
        {
            id : 3,
            name: 'Oppo Reno 7',
            price: 13000000,
            image : "https://cdn01.dienmaycholon.vn/filewebdmclnew/DMCL21/Picture//Apro/Apro_product_29803/oppo-reno7-z-5g_main_111_1020.png.webp"
        },
        {
            id : 4,
            name: 'Macbook',
            price: 25500000,
            image : "https://cdn.tgdd.vn/Products/Images/44/253581/apple-macbook-pro-14-m1-pro-2021-600x600.jpg"
        },
    ];


    return (
        <div className="container">
            <h1>YOUR BAG</h1>
            <Cart />
            <CartFooter />
        </div>
    )
}





ReactDOM.render(<App />, app);