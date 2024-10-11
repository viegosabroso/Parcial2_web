
interface CategoriesProps {
    planet: string;
    mass: string;
    gravity: string;
}


const Categories = ({ planet, mass, gravity }: CategoriesProps) => {
    return (
    <div className="categories">
        <h2>{planet}</h2>
        <h2>{mass}</h2>
        <h2>{gravity}</h2>
    </div>
    )
}

export default Categories;