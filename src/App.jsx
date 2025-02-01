import { useEffect, useState } from "react";
import "./App.css";
import logo from "./assets/logo.png"

function App() {
  const [meme,setMeme] = useState({
    topText:"shutup",
    bottomText:"And take my money",
    imageUrl:"https://i.imgflip.com/1bij.jpg"
  });

  const [allMemes,setAllMemes] = useState([]);

  const handleInputChange=(event) =>{
    const {value,name} = event.target
    setMeme(meme => ({...meme,[name]:value}))
  }

  const getImages = ()=>{
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => setAllMemes(data.data.memes))
  }

  const pickAnImage=() =>{
    const random = Math.floor(Math.random()*allMemes.length);
    setMeme(meme =>({...meme,imageUrl:allMemes[random].url}))
  }

  useEffect(()=>{
    getImages();
  },[])

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

        <button onClick={pickAnImage}>Get a new Meme Image 🖼️ </button>
      </div> 

      <div className="meme">
                <img src={meme.imageUrl} alt="generated meme"/>
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
      </div>
      
    </>
  );
}

export default App;
