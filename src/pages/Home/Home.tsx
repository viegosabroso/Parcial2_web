import './Home.css'
import { useHome } from "../../hooks/useHome"

const Home = () => {
const {cards,Renderfilters} = useHome()

   return(<>
   <h1>Celestial Bodies</h1>
   <h2>Filters</h2>
    <div className="Filters-Container">
        {Renderfilters}
    </div>
    <div className="Cards-Container">
        
        {cards}
    </div>
    
   </>) 
}

export default Home