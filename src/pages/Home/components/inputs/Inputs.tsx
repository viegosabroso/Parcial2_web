import './Inputs.css'
const Inputs = ({dens, grav, mass} : {dens: number, grav: number, mass: number}) => {
  return (<>
    <div>
        <div className="left-side">
        <h4>dens</h4>
        <input type="range" value={dens} min={0} max={10}/>
        </div>
        <div className="left-side">
            <h4>grav</h4>
        <input type="range" value={grav} min={0} max={10}/>
        </div>
        <div className="left-side">
            <h4>mass</h4>
        <input type="range"  value={mass}min={0} max={10}/>
        </div>
    </div>
  </>
    )
}

export default Inputs;