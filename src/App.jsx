import "./App.css";
import logo from "./assets/logo.png"

function App() {
  return (
    <>
      <div className="heading">
        <img src={logo} alt="logo"/>
        <h1>Meme Generator</h1>
      </div>

      <div className="form">
        <div className="input-section">

        <label>TopText :
          <input type="text" name="topText" placeholder="shutup"/>
        </label>

        <label>Bottom Text :
          <input type="text" name="bottomText" placeholder="And take my money"/>
        </label>
        </div>

        <button>Get a new Meme Image 🖼️ </button>
      </div> 

      <div className="meme">
                <img src=  "https://i.imgflip.com/1bij.jpg"/>
                <span className="top">Top Text</span>
                <span className="bottom">Bottom Text</span>
      </div>
      
    </>
  );
}

export default App;
