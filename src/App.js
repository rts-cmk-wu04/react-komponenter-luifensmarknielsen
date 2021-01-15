import Travel from "./components/Travel.js";
import Outdoor from "./components/Outdoor-ex.js"
import './App.css';

function App() {
  return(
    <div className="container">
      <Travel 
      category="Travel" 
      image="./image/Travel.png" 
      title="Surfing In Maldives" 
      summary="It’s windy. The cool breeze of the ocean. It gives, a sense of beauty, in motion. 
              All is flowing, rushing and tide-And I sit in wonder, dreaming beside."/>
      
      <Outdoor
      image="./image/Outdoor-big.png"
      category="Leisure"
      title="Outdoor Experience"
      summary="It’s windy. The cool breeze of the ocean. It gives, a sense of beauty, in motion. 
              All is flowing, rushing and tide-And I sit in wonder, dreaming beside."
      images={["./image/Outdoor-small-1.png", "./image/Outdoor-small-2.png", "./image/Outdoor-small-3.png"]}
      />
    </div>
    
  )
}

export default App;