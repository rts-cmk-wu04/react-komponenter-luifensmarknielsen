import "./Outdoor-ex.css"

function Outdoor(properties){
    return(
        <div className="outdoorCard">

            {/* <button id="leisureButton">Leisure</button> */}

            <img className="bigImage" src={properties.image}/>
            <div className="outdoorContainer">
                <button className="category">{properties.category}</button>
                <h1 className="title">{properties.title}</h1>
                <p className="summary">{properties.summary}</p>
            </div>

            <img className="image1" src={properties.images[0]}/>
            <img className="image2" src={properties.images[1]}/>
            <img className="image3" src={properties.images[2]}/>
        </div>
    )
    
}
export default Outdoor;