import { useEffect, useState } from 'react'
import ImageList from './ImageList';

function App() {
  const [image, setImage] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);

useEffect(() => {
  const url = new URLSearchParams()
  fetch(
    "https://api.unsplash.com/search/photos/?client_id=f7N-c7ynV9x6FAE3c1mP35-_1uRQeFNKMYlRro55XGA&page=1"
  )
  .then((res) => res.json())
  .then((res) => {
    setImage(res.ressult)
  })
}, [])


  return (
    <div className="App">

    </div>
  )
}

export default App
