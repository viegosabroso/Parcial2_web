import Inputs from "../inputs/Inputs";

import './cards.css'
interface propsCards {
    title:string,
    density:number,
    gravity:number,
    mass:number,
    onDetail: (title:string) => void
}

const Cards = ({title, density , gravity, mass, onDetail}:propsCards) => {
    return (
    <>
    <div className="cards" onClick={()=> onDetail(title)}>
    <h2>{title}</h2>
    <Inputs dens={density} grav={gravity} mass={mass} />
    </div>
        
    
    </>
    )

}

export default Cards;