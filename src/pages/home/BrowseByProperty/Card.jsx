function Card({item}) {
    // const [text,setText] = useState()
    // const [image,setImage] = useState()
  return (
    <div className="card1">
        <img className='img' src={item.image} alt=""/>
        <div className='text'>{item.text}</div>
    </div>
  )
}

export default Card