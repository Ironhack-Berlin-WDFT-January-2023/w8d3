import './App.css';
import { Routes, Route } from "react-router-dom"
import AddMemePage from "./pages/AddMemePage";
import Navbar from "./components/Navbar";
import MemeList from "./pages/MemeList";
import { useEffect, useState } from "react"
import axios from "axios"

const API_URL = "http://localhost:5005"

function App() {
  const [memes, setMemes] = useState([])
  const [filteredMemes, setFilteredMemes] = useState([])

  const getMemes = () => {
    axios.get(`${API_URL}/api/memes`)
      .then(response => {
        setMemes(response.data)
        setFilteredMemes(response.data)
      })
      .catch(err => console.log(err))
  }

  const filterMemes = (topic) => {
    if (topic === "All topics") {
      setFilteredMemes(memes)
    } else {
        const memesFilteredByTopic = memes.filter(meme => {
          return meme.topic === topic
        })
    
        setFilteredMemes(memesFilteredByTopic)
    }
  }  

  useEffect(() => {
    getMemes()
  }, [])

  return (
    <div className="App">
      <Navbar memes={memes} filterMemes={filterMemes} />
      <Routes>
        <Route path="/" element={<MemeList memes={filteredMemes} />} />
        <Route path="/add-meme" element={<AddMemePage getMemes={getMemes} />} />
      </Routes>
    </div>
  );
}

export default App;
