const DataSelect = (props) => {
    return (
        <div>
            <select>
                <option value="dienthoai">Giá tăng dần</option>
                <option value="dienthoai">Giá giảm dần</option>
                <option value="dienthoai">Số lượng tăng dần</option>
                <option value="dienthoai">Số lượng giảm dần</option>
            </select>

            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox" >Còn hàng</label>
        </div>
    )
}