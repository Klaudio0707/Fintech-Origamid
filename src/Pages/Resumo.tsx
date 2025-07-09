import { useData } from "../Context/DataContext"


const Resumo = () => {
   const {data} = useData()
     console.log(data);
    
  return (
    <div>
          <h1>Resumo</h1>  
          <div></div>
    </div>
  )
}

export default Resumo
