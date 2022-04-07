const {useState} = React;



const App = () => {
  const products = [
    {
      name: 'Samsung S22 Ultra',
      category: 'Điện thoại',
      price: 30000000,
      quantity: 100,
    },
    {
      name: 'Dell XPS',
      category: 'Laptop',
      price: 40000000,
      quantity: 29,
    },
    {
      name: 'Iphone 13 Promax',
      category: 'Điện thoại',
      price: 34000000,
      quantity: 50,
    },
    {
      name: 'Tủ lạnh Toshiba',
      category: 'Gia dụng',
      price: 8000000,
      quantity: 50,
    },
    {
      name: 'Tủ lạnh Samsung',
      category: 'Gia dụng',
      price: 12000000,
      quantity: 40,
    },
    {
      name: 'Tủ lạnh Nikkei',
      category: 'Gia dụng',
      price: 9000000,
      quantity: 0,
    },
    {
      name: 'Oppo Reno 7',
      category: 'Điện thoại',
      price: 13000000,
      quantity: 29,
    },
    {
      name: 'Xiaomi redmi note 5',
      category: 'Điện thoại',
      price: 3900000,
      quantity: 29,
    },
    {
      name: 'ASUS Zenbook',
      category: 'Laptop',
      price: 21590000,
      quantity: 50,
    },
    {
      name: 'Macbook',
      category: 'Laptop',
      price: 25500000,
      quantity: 12,
    },
    {
      name: 'SamSung note 9',
      category: 'Điện thoại',
      price: 3333,
      quantity: 2,
    },
    {
      name: 'iPad 10.2 2021',
      category: 'iPad',
      price: 16500000,
      quantity: 10,
    },
    {
      name: 'Bphone X',
      category: 'Điện thoại',
      price: 10000000,
      quantity: 0,
    },
    {
      name: 'Bánh quy',
      category: 'Thực phẩm',
      price: 25000,
      quantily: 0,
    },
    {
      name: 'Lenovo L340',
      category: 'Máy tính',
      price: 15900000,
      quantity: 25,
    },
  ];

  const [showOnlyAvailable, setshowOnlyAvailable] = useState(false);
  const [showCategory, setShowCategory] = useState(null);
  const [orderBy, setOrderBy] = useState(false);

  const  categories = [];
  products.forEach((product) => {
    if (categories.includes(product.category)) {
      return;
    } else {
      categories.push(product.category);
    }
    

  });
  return (
    <div className="contaiiner">
      <DataSelect category={categories}/>
      <Table products={products} />

    </div>
  )
}


ReactDOM.render(<App />, app);
  
  