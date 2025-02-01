import { useState } from "react";
import "./App.css";
import logo from "./assets/logo.png"

function App() {
  const [meme,setMeme] = useState({
    topText:"shutup",
    bottomText:"And take my money",
    imageUrl:"https://i.imgflip.com/1bij.jpg"
  });

  const handleInputChange=(event) =>{
    const {value,name} = event.target
    setMeme(meme => ({...meme,[name]:value}))
  }
  
  return (
    <>
      <div className="heading">
        <img src={logo} alt="logo"/>
        <h1>Meme Generator</h1>
      </div>

      <div className="form">
        <div className="input-section">

        <label>TopText :
          <input type="text" name="topText" placeholder={meme.topText} value={meme.topText} onChange={handleInputChange}/>
        </label>

        <label>Bottom Text :
          <input type="text" name="bottomText" placeholder={meme.bottomText} value={meme.bottomText} onChange={handleInputChange}/>
        </label>
        </div>

        <button>Get a new Meme Image 🖼️ </button>
      </div> 

      <div className="meme">
                <img src={meme.imageUrl}/>
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
      </div>
      
    </>
  );
}

export default App;
