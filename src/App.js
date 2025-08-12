import { useState } from 'react';
import './App.css';

function App() {

  const [clicked, setClicked] = useState("");

  const image = ['https://i.pinimg.com/736x/e2/ec/31/e2ec318333608d137b47ce8f2a83eed0.jpg',
                 'https://img.freepik.com/photos-gratuite/coucher-soleil-misurina_181624-34793.jpg?semt=ais_hybrid&w=740&q=80',
                 'https://wallpapercat.com/w/full/0/f/3/5815630-3840x2160-desktop-hd-4k-wallpaper-image.jpg'
                ];

  const listImage = image.map((image, index) =>
    <img key={index} src={image} style={{height: "200px", padding: "10px"}} onClick={() => setClicked(image)}/>
  )

  function handleImage() {
    setClicked("");
  }
  

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
