import MesBtn from "../MesBtn"


const  Meses = () => {
  return (
    <div className="flex">
        <MesBtn mes={-3}/>
        <MesBtn mes={-2}/>
        <MesBtn mes={-1}/>
        <MesBtn mes={0}/>
    </div>
  )
}

export default Meses;