function MemeList(props) {
  return (
    <div className="MemeList">
      <h1>List of memes</h1>
      <div className="meme-container">
        {props.memes.map(meme => {
          return (
            <div className="MemeCard">
              <img src={meme.imageUrl} alt="meme" />
              <h2>{meme.title}</h2>
              <p>{meme.source}</p>
              <p>{meme.topic}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MemeList
