const CashBackIcon = () => <i className="bi bi-cash-stack"></i>

const PeopleIcon = () => <i className="bi bi-people-fill"></i>

const InputField = (props) => <div className = "form-field">
    <label className = "form-label" htmlFor="{props.id}"></label>
    <div className = "form-controls">
        {props.icon}
        <input type={props.type} id = {props.id} />
    </div>
</div>

InputField.propTypes = {
    type : PropTypes.string,
    icon : PropTypes.element,
}


function App() {
    return <div className = "container">
        <h1 className = "heading">Tip Caculator</h1>

        <form action="">
            <InputField label = "Bill amount" id ="amount" type="number" icon = {<CashBackIcon/>}
            />
        </form>
    </div>
}

ReactDOM.render(<App />, app);