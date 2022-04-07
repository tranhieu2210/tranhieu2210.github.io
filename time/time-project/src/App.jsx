import { useEffect, useState } from 'react'

function App() {
  const [time, setTime] = useState(new Date())


  const updateTime = () => {
    setTime(new Date())
  }

  useEffect(() => {
    document.title = time;
  })

  return (
    <div className="App">
      <h1>My Time</h1>
      <p>Bay gio la {time.toTimeString()}</p>
      <button
      onClick={updateTime}>Cap nhat thoi giam</button>
    </div>
  )
}

export default App
