import React, {
  useState,
  useEffect,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useReducer,
} from 'react'
import logo from './logo.svg'
import './App.css'

const AppContext = React.createContext({});

function ProductLists(props) { }

const Child = (props) => {
  const { count, setCount } = useContext(AppContext)
  return (
    <div>
      <p>Curent Count : {props.count}</p>
      <button onClick={() => props.setCount(props.count + 1)}
      >Increase</button>
    </div>
  )
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <AppContext.Provider value={(count, setCount)}>
      <div className="App">
        <Child count={count} setCount={setCount} />
      </div>
    </AppContext.Provider>

  )
}

export default App
