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
  cursor: 'pointer', // Adicionado para indicar que é clicável
};

/**
 * Retorna o nome de um mês com base em um deslocamento a partir do mês atual.
 * Ex: mes = 0 é o mês atual, mes = -1 é o mês passado.
 */
function nomeMes(mes: number) {
  const date = new Date();
  date.setMonth(date.getMonth() + mes);
  return new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(date);
}

/**
 * Componente de botão que, ao ser clicado, define o período de início e fim
 * para um mês específico no DataContext.
 */
const MesBtn = ({ mes }: { mes: number }) => {
  // Assume-se que useData retorna [null, setInicio, setFinal] ou algo similar,
  // mas como o código original só usava os setters, vamos pegá-los.
  // Se o hook for `const { setInicio, setFinal } = useData()`, ajuste aqui.
  const { setInicio, setFinal } = useData();

  // A lógica agora está em uma função que será chamada no clique.
  function handleClick() {
    const date = new Date();
    date.setMonth(date.getMonth() + mes);

    // ✅ CORRIGIDO: Cálculo correto para o primeiro e último dia do mês.
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    
    // ✅ CORRIGIDO: Atualiza o estado do contexto com as datas corretas.
    if (setInicio) setInicio(formatDate(firstDay));
    if (setFinal) setFinal(formatDate(lastDay));
  }

  return (
    <button onClick={handleClick} style={style}>
      {nomeMes(mes)}
    </button>
  );
};

/**
 * Formata uma data para o formato YYYY-MM-DD.
 * Esta função foi corrigida e pode ser usada ou movida para um arquivo de utilitários.
 */
function formatDate(date: Date) {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

export default MesBtn;