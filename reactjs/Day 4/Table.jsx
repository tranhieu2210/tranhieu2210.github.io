const Table = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <td>Tên sản phẩm</td>
                    <td>Danh mục</td>
                    <td>Giá</td>
                    <td>Số lượng</td>
                </tr>
            </thead>

            <tbody>
                {
                    props.products.map((product, index) => {
                        return <TableRow key={index} product={product} />;
                    })
                }
            </tbody>
        </table>
    )
}