import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function AddMemePage(props) {
  const [title, setTitle] = useState("")
  const [source, setSource] = useState("")
  const [topic, setTopic] = useState("")
  const [imageUrl, setImageUrl] = useState("")

  const navigate = useNavigate()

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleSourceChange = (e) => {
    setSource(e.target.value)
  }

  const handleTopicChange = (e) => {
    console.log(e.target.value)
    setTopic(e.target.value)
  }

  const handleFileUpload = (e) => {
    const uploadData = new FormData();
 
    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new movie in '/api/movies' POST route
    uploadData.append("imageUrl", e.target.files[0]);
 
    axios.post("http://localhost:5005/api/upload", uploadData)
      .then(response => {
        // console.log("response is: ", response);
        // response carries "fileUrl" which we can use to update the state
        setImageUrl(response.data.imageUrl);
      })
      .catch(err => console.log("Error while uploading the file: ", err));
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    const requestBody = { title, source, topic, imageUrl }
    
    axios.post("http://localhost:5005/api/memes", requestBody)
      .then(response => {
        props.getMemes()
        navigate("/")
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="AddMemePage">
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={(e) => handleFileUpload(e)} />
        <input type="text" name="title" placeholder="Title" value={title} onChange={handleTitleChange} />
        <input type="text" name="source" placeholder="Source" value={source} onChange={handleSourceChange} />
        <select name="topic" value={topic} onChange={handleTopicChange} >
          <option value="" disabled selected hidden>Choose a category</option>
          <option value="development">Development</option>
          <option value="dogs">Dogs</option>
          <option value="berlin">Berlin</option>
          <option value="pop culture">Pop culture</option>
          <option value="random">Random</option>
        </select>
        <button type="submit">Add meme</button>
      </form>
    </div>
  )
}

export default AddMemePage
