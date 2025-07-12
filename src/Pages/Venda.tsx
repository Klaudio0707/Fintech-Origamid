// src/Pages/Venda.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../Hooks/useFetch';
import { IVenda } from '../@types/IVenda';
import Loading from '../Components/Loading';
import InfoBox from '../Components/InfoBox';

const Venda: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data, loading } = useFetch<IVenda>(`https://data.origamid.dev/vendas/${id}`);

  if (loading) {
    return <Loading />;
  }

  if (data === null) {
    return <InfoBox message={`A venda com ID "${id}" não foi encontrada.`} />;
  }

  return (
    <div>
      <div className='box mb'>ID: {data.id}</div>
      <div className='box mb'>Nome: {data.nome}</div>
      <div className='box mb'>
        Preço: {data.preco.toLocaleString("pt-br", { style: 'currency', currency: "BRL" })}
      </div>
      <div className='box mb'>Forma de Pagamento: {data.pagamento}</div>
      <div className='box mb'>Parcelas: {data.parcelas}</div>
      <div className='box mb'>Status da Compra: {data.status}</div>
    </div>
  );
};

export default Venda;