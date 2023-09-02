import './App.css';
import Body from '../src/MyComponents/body/Body'
import image from '../src/assets/image.png'
function App() {
  return (
    <>
    <div className="bg-image">
      <img className="image" src={image} alt="image"/>
    </div>
    <div className="bg-text">
     <Body src={image}/>
    </div>
    </>
  );
}

export default App;
