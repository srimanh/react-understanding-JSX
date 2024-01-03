import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = () => {
  let data = [
    {
      id: 1,
      img: elephant
    },
    {
      id: 2,
      img: elephant
    },
    {
      id: 3,
      img: elephant
    },
    {
      id: 4,
      img: elephant
    }
  ]
  return data;
}

function App() {
  return (
    <div>
      <h1>Kalvium Gallery</h1>
      <div className="app">
        {imageData().map(image => (
          <div key={image.id} className="image-container">
            <img src={image.img} alt={`Image${image.id}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
