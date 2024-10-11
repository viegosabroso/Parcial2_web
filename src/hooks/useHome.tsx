
import { useEffect, useState } from "react";
import Getdata from "../services/Getdata";
import Cards from "../pages/Home/components/Cards/Cards";
import Filters from "../pages/Home/components/Filters/Filters";
import { useNavigate } from "react-router-dom";

interface Datatypes {
    bodies: any;
}

const filters = ["Alfabetic", "mass", "gravity", "density"];
export const useHome = () => {
const navigate = useNavigate();
const [data, setData] = useState<Datatypes>({bodies: []});

useEffect(() => {
    
    const fetchdata = async () => {
        const response = await Getdata();
        
        setData(response);
        console.log(data.bodies);
        
        
    };
    fetchdata();
}, []);

const handleDetail = (id: any) => {
    navigate(`detail/${id}` );
}
const cards = data.bodies.map((body: any) => {
    
    return <Cards key={body.id} title={body.englishName} density={body.density} gravity={body.gravity} mass={body.massValue}  onDetail={handleDetail}/>
});


const handlefilter = (filter: any) => {

    if (filter === "Alfabetic") {
        const sortedBodies = data.bodies.sort((a: any, b: any) => {
            if (a.englishName < b.englishName) {
                return -1;
            }
            if (a.englishName > b.englishName) {
                return 1;
            }
            return 0;
        });
        setData({bodies: sortedBodies});
    }
    if (filter === "mass") {
        const sortedBodies = data.bodies.sort((a: any, b: any) => {
            if (a.massValue < b.massValue) {
                return -1;
            }
            if (a.massValue > b.massValue) {
                return 1;
            }
            return 0;
        });
        setData({bodies: sortedBodies});
    }
    if (filter === "gravity") {
        const sortedBodies = data.bodies.sort((a: any, b: any) => {
            if (a.gravity < b.gravity) {
                return -1;
            }
            if (a.gravity > b.gravity) {
                return 1;
            }
            return 0;
        });
        setData({bodies: sortedBodies});
    }
    if (filter === "density") {
        const sortedBodies = data.bodies.sort((a: any, b: any) => {
            if (a.density < b.density) {
                return -1;
            }
            if (a.density > b.density) {
                return 1;
            }
            return 0;
        });
        setData({bodies: sortedBodies});
    }

   
   
    

}
const Renderfilters =  filters.map((filter: any) => {
    return <Filters key={filter} Filters={filter} onFilter={handlefilter} />
});
    return {cards, Renderfilters};

}