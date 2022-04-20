import { useCallback, useEffect, useRef, useState } from 'react'

const songs = [
  {
    name: "Mang tiền về cho mẹ",
    singer: "Đen Vâu",
    path:"https://data.chiasenhac.com/down2/2215/4/2214701-52396a51/128/Mang%20Tien%20Ve%20Cho%20Me%20-%20Den_%20Nguyen%20Thao.mp3",
    image: "https://i1.sndcdn.com/artworks-z2gxcCZamslfRFWy-mSu93g-t500x500.jpg",
  },
  {
    name: "Hãy Trao Cho Anh",
    singer: "Sơn Tùng MTP",
    path: "https://c1-ex-swe.nixcdn.com/NhacCuaTui985/HayTraoChoAnh-SonTungMTPSnoopDogg-6010660.mp3?",
    image:
      "https://cdn.vietnambiz.vn/171464876016439296/2021/7/5/st181516667-1625482847918215769418.jpg "
  },
  {
    name: "Sunday Hiphop Cypher ",
    singer: "16 Typh, 16 BrT, LilWuyn, R.I.C",
    path:
      "https://c1-ex-swe.nixcdn.com/NhacCuaTui1024/SundayHiphopCypher-16Typh16BrTLilWuyn-7120691.mp3?",
    image: "https://t2.genius.com/unsafe/409x409/https%3A%2F%2Fimages.genius.com%2F499670f26dc7d21c012485e737f96415.240x240x1.jpg"
  },
  {
    name: "RealRap",
    singer: "RichChoi",
    path: "https://data32.chiasenhac.com/downloads/1930/4/1929053-5cae753d/128/REAL%20RAP%20-%20RICHCHOI%20x%20VINADU.mp3",
    image:
      "https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/4/24/photo-1-1619240215879348602524.jpg"
  },
  {
    name: "Thiên đàng",
    singer: "Binz",
    path: "https://data17.chiasenhac.com/downloads/1489/4/1488247-b6bc81dd/128/Paradise%20Touliver%20Mix_%20-%20Binz.mp3",
    image:
      "https://viethiphop.vn/wp-content/uploads/2020/07/Binz-2-800x800.jpg"
  },
  {
    name: "Lé luôn",
    singer: "Richchoi",
    path:
      "https://data3.chiasenhac.com/downloads/2103/4/2102022/128/Le%20luon%20-%20RichChoi.mp3",
    image:
      "https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/4/24/photo-1-1619240215879348602524.jpg"
  },
  {
    name: "My love",
    singer: "Westlife",
    path: "https://data51.chiasenhac.com/downloads/1002/4/1001338-846807a2/128/My%20Love%20-%20Westlife.mp3",
    image:
      "https://sohanews.sohacdn.com/thumb_w/1000/2018/7/7/photo-1-1530974377227173959882.jpg"
  },
  {
    name: "Boy Mỹ Con",
    singer: "Bray",
    path: "https://c1-ex-swe.nixcdn.com/NhacCuaTui1004/BoyMyCon-BRay-6728456.mp3?",
    image:
      "https://media.molistar.com/original/2021/05/13/609d2b70774df_1.jpg"
  }
];

const Player = ({src, cover, playing, handlePlay, handleNext, handlePrev}) => {
  const audioRef = useRef(null);

  useEffect(() => {
      if (!audioRef) return;

      if (playing) audioRef.current.play();
      else audioRef.current.pause()
  })

  return (
    <div className='player'>
      <img src={cover} style = {{with: 100, height: 100, objectFit: 'cover'}}  />
      <audio src={src} ref={audioRef}/>
      <button onClick={handlePrev}>Prev</button>    
      <button onClick={handlePlay}>{playing ? 'Pause' : 'Play'}</button>
      <button onClick={handleNext}>Next</button>     
    </div>
  )
}


function App() {
  const [currentSong, setCurrentSong] = useState(songs[1]);
  const [playing, setPlaying] = useState(false)
  const handlePlay = useCallback(() => {
    setPlaying (!playing)
  }, [playing]);

  const handleNext = useCallback(() => {
    let index = songs.findIndex((song) => song.path == currentSong.path);
    if (index > songs.length -1) {
      setCurrentSong(songs[0]);
    } else {
      setCurrentSong(songs[index + 1]);
    }
  }, [currentSong])

  const handlePrev = useCallback(() => {
    let index = songs.findIndex((song) => song.path == currentSong.path);
    if (index > songs.length -1) {
      setCurrentSong(songs[0]);
    } else {
      setCurrentSong(songs[index - 1]);
    }
  }, [currentSong])

  return (
    <div className="App">
      <Player src = {currentSong.path} playing={playing} handlePlay={handlePlay} handleNext={handleNext} cover = {currentSong.image} handlePrev = {handlePrev}/>
    </div>
  )
}

export default App
