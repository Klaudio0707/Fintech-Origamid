import React from 'react';
import { NavLink } from 'react-router-dom';
import { IVenda } from '../../@types/IVenda';

// ✅ Boa prática: Definir uma interface para as props do componente.
interface VendaItemProps {
  venda: IVenda;
}

const VendaItem: React.FC<VendaItemProps> = ({ venda }) => {
  return (
    <div className='venda box'>
      <NavLink to={`/vendas/${venda.id}`} style={{ fontFamily: "monospace" }}>
        {venda.id}
      </NavLink>
      <div>{venda.nome}</div>
      <div>
        {venda.preco.toLocaleString("pt-br", {
          style: 'currency',
          currency: "BRL",
        })}
      </div>
    </div>
  );
};

export default VendaItem;