import './App.css';

function App() {

  const number = [0,1,2,3,];
  const listItem = number.map((number) => 
  <li>{number}</li>)

  const image = ['https://i.pinimg.com/736x/e2/ec/31/e2ec318333608d137b47ce8f2a83eed0.jpg',
                 'https://img.freepik.com/photos-gratuite/coucher-soleil-misurina_181624-34793.jpg?semt=ais_hybrid&w=740&q=80',
                 'https://wallpapercat.com/w/full/0/f/3/5815630-3840x2160-desktop-hd-4k-wallpaper-image.jpg'
                ];

  const listImage = image.map((image) => 
    <img src={image} />
  )

  return (
    <div>
      <h1>Hello world</h1>
      <ul>
        {listItem}
        {listImage}
      </ul>
    </div>
  );
}

export default App;
