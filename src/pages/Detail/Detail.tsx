import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import getDataId from "../../services/Getdataid";
import Categories from "./components/Categories/Categories";
import Inputs from "../Home/components/inputs/Inputs";


const Detial = () => {

    const [data, setData] = useState<any>({});
const state = useLocation();

console.log(state.state);


const {id} = useParams()

useEffect(() => {
    const fetchdata = async () => {
    const data = await getDataId(id);
    console.log(data);
    setData(data);
    }
    fetchdata();
}, []);
console.log(id);


    return (
        <>
        <h1>{data.name}</h1>
        <Categories planet={data.isPlanet === false ? "Not a planet" : "Planet"} mass={data.massValue} gravity={data.gravity} />
        <Inputs dens={data.density} grav={data.gravity} mass={data.massValue} />
        </>
    )
};

export default Detial;
