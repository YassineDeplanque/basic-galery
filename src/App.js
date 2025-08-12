import { useState, useEffect, use } from 'react';
import './App.css';

function App() {

  const [clicked, setClicked] = useState("");

  const image = ['https://wallpapercat.com/w/full/8/c/f/124601-3840x2160-desktop-4k-stranger-things-wallpaper-image.jpg',
                 'https://wallpapercat.com/w/full/0/d/a/1165487-3840x2160-desktop-4k-landscape-wallpaper-photo.jpg',
                 'https://wallpapercat.com/w/full/0/f/3/5815630-3840x2160-desktop-hd-4k-wallpaper-image.jpg'
                ];

  const listImage = image.map((image, index) =>
    <img key={index} src={image} style={{height: "200px", padding: "10px"}} onClick={() => setClicked(image)}/>
  )

  function handleImage() {
    setClicked("");
  }
  
  useEffect(() => {
    function handleKeyDown(event){
      if(event.key == 'Escape'){
        setClicked(false)
        console.log('u did')
      }
    }
    window.addEventListener('keydown', handleKeyDown)
  })

  return (
    <div>
      <h1>Galery</h1>
      <ul>
        {listImage}
      </ul>
       
        {clicked ? <div className="modal-overlay"> <img className="modal-image" src={clicked} style={{height: "1000px", padding: "10px"}} onClick={() => handleImage()} /> </div> : <></>}
    </div>
  );
}

export default App;
