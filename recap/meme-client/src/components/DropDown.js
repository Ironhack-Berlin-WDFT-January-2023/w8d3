import { useEffect, useState } from "react"

function DropDown({memes, filterMemes}) {
  const [open, setOpen] = useState(false)
  const [topics, setTopics] = useState([])

  useEffect(() => {
    const uniqueTopics = memes
    .map(meme => {
      return meme.topic
    })
    .filter((topic, i, arr) => {
      return i === arr.indexOf(topic)
    })
    setTopics(uniqueTopics)
  }, [memes])

  const handleOpen = () => {
    setOpen(!open)
  }

  const handleMenuItemClick = (e) => {
    const topic = e.target.innerText

    filterMemes(topic)
  }

  return (
    <div className="DropDown">
      <button className="dropDown-button" onClick={handleOpen}>{open ? "Close topics" : "Show topics"}</button>
      {open &&
        <ul className="menu">
          <li className="menu-item"><button onClick={(e) => handleMenuItemClick(e)}>All topics</button></li>
          {topics.map(topic => {
            return (
              <li className="menu-item"><button onClick={(e) => handleMenuItemClick(e)}>{topic}</button></li>
            )
          })}
        </ul>}
    </div>
  )
}

export default DropDown
