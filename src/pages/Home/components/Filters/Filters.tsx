

const Filters = ({Filters, onFilter}: {Filters: string, onFilter: (e: any) => void}) => {
    return (<> 
    <div>
        <button onClick={(e) => onFilter(Filters)}>{Filters}</button>
    </div>
    
    </>)
};


export default Filters;