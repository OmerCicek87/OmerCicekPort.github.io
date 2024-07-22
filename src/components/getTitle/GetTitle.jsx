const GetTitle = ({text, cls=""}) => {
    
    return (
    <div className='getTitle'>
        <h2 className={`text-5xl font-extrabold text-center ${cls}`}>{text}</h2>
    </div>
  )
}

export default GetTitle