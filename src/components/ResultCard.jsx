

const ResultCard = (props) => {
  const addToCollection = (item) => {
    const oldData = JSON.parse(localStorage.getItem('collection')) || []
    const newData = [...oldData, item]
    localStorage.setItem('collection', JSON.stringify(newData))
    console.log(newData)
  }

  return (
    <div className='w-[40vh] h-60 relative rounded-xl overflow-hidden'>

      <div className='w-[40vh] h-full overflow-hidden hover:scale-105 transition'>
        {props.type === 'photo' ? <img className='h-full w-full object-cover' src={props.thumbnail} alt="" className='' /> : ''}
        {props.type === 'video' ? <video className='h-full w-full object-cover object-center' src={props.src} autoPlay loop muted></video> : ''}
        {props.type === 'gif' ? <img className='h-full w-full object-cover object-center' src={props.src} alt="" className='' /> : ''}
        {props.collection === 'collection' ? <img className='h-full w-full object-cover object-center' src={props.src} alt="" className='' /> : ''}
      </div>
      <div id='title' className='h-[35%] w-full absolute bottom-0 text-white pl-4 '>
        <h2 className='text-xl font-semibold capitalize mb-10'>{(props.title).length > 10 ? props.title.slice(0, 10) + "..." : props.title }</h2>
        <button className='text-shadow-2xs active:scale-95 bg-gray-700 text-white rounded px-3 py-1  bottom-1 left-30 absolute cursor-pointer'
        onClick={()=>{addToCollection(props)}}
        >
          Save
        </button>
      </div>
      <div>
        <a href={props.src} download className= 'active:scale-95 bg-gray-700 absolute text-gray-200 rounded border-0 p-1 px-3 bottom-1' >Download</a>
      </div>
    </div>
  )
}

export default ResultCard