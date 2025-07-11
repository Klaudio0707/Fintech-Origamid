import { useParams } from 'react-router-dom'
import useFetch from '../Hooks/useFetch';
import { IVenda } from '../@types/IVenda';
import Loading from '../Components/Loading';

type VendaSemData = Omit<IVenda, 'data'>

const Venda = () => {
  const {id} =  useParams();
    const {data, loading} = useFetch<VendaSemData>(`https://data.origamid.dev/vendas/${id} `)

    if(loading === true)<Loading/> 

    if (data === null) return null
    return (
        <div>
    <div className='box mb'>ID: {data.id}</div>
    <div className='box mb'>Nome: {data.nome}</div>
    <div className='box mb'>Preço: {data.preco.toLocaleString("pt-br", { style: 'currency', currency: "BRL" })}</div>
    <div className='box mb'>Forma de Pagamento: {data.pagamento}</div>
    <div className='box mb'>Parcelas: {data.parcelas}</div>
    <div className='box mb'>Status da Compra: {data.status}</div>
        </div>
  )
}

export default Venda
