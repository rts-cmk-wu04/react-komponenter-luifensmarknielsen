import "./Travel.css"

function Travel(properties){
    return(
        <div id="travelCard">
            <img src={properties.image}/>
            <h1 id="topline">{properties.category}</h1>
            <h1 id="headline">{properties.title}</h1>
            <p id="text">{properties.summary}</p>
        </div>
    )
    
}
export default Travel;