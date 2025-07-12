// src/Pages/Vendas.tsx
import React from 'react';
import VendaItem from '../Components/VendaItem/VendaItem';
import { useData } from '../Context/DataContext';
import Loading from '../Components/Loading';
import InfoBox from '../Components/InfoBox';

const Vendas: React.FC = () => {
  const { data, loading } = useData();

  if (loading) {
    return <Loading />;
  }

  if (data === null || data.length === 0) {
    return <InfoBox message="Nenhuma venda encontrada para o período." />;
  }
  return (
    <ul>
      {data.map((venda) => (
        <li key={venda.id}>
          <VendaItem venda={venda} />
        </li>
      ))}
    </ul>
  );
};

export default Vendas;