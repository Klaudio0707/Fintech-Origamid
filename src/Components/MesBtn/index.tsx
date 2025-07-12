import React from 'react';
import { useData } from '../../Context/DataContext';

const style: React.CSSProperties = {
  padding: 'var(--gap) var(--gap-s)',
  backgroundColor: 'var(--color-3)',
  border: 'none',
  borderRadius: 'var(--gap)',
  color: 'var(--color-2)',
  fontWeight: '600',
  textTransform: 'capitalize',
  cursor: 'pointer',
};

function nomeMes(mes: number) {
  const date = new Date();
  date.setMonth(date.getMonth() + mes);
  return new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(date);
}

const MesBtn = ({ mes }: { mes: number }) => {

  const { setInicio, setFinal } = useData();


  function handleClick() {
    const date = new Date();
    date.setMonth(date.getMonth() + mes);
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    if (setInicio) setInicio(formatDate(firstDay));
    if (setFinal) setFinal(formatDate(lastDay));
  }
  function formatDate(date: Date) {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  }
  return (
    <button onClick={handleClick} style={style}>
      {nomeMes(mes)}
    </button>
  );
};

export default MesBtn;