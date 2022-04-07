
const {useState} = React;


const App = () => {
    const [count, setCount] = useState(0);
    const handleChangeUp = () => {
        setCount(count + 1)
    }
    const handleChangeDown = () => {
        setCount(count -1 )
    }
    const handleChangeReset = () => {
        setCount(0)
    }


    return (
        <div className = "container">
        <h4>Count <span>{count}</span></h4>
        <button onClick = {handleChangeUp}  >UP</button>
        <button onClick = {handleChangeReset}>RESET</button>
        <button onClick = {handleChangeDown}>DOWN</button>
    </div>
    )
}





ReactDOM.render(<App />, app);