import { useData } from "../Context/DataContext"


const Resumo = () => {
  const { data } = useData()
  console.log(data);
  if (data === null) return null;
  return (
    <section>
      <div className="resumo flex mb">
      <div className="box">
        <h3>Vendas</h3>
        <span>
          {data.filter((item) => item.status !== 'falha')
            .reduce((acc, item) => acc + item.preco, 0)
            .toLocaleString("pt-br", { style: 'currency', currency: "BRL" })}
        </span>
      </div>
      <div className="box">
        <h3>Recebido</h3>
        <span>
          {data.filter((item) => item.status === 'pago')
            .reduce((acc, item) => acc + item.preco, 0)
            .toLocaleString("pt-br", { style: 'currency', currency: "BRL" })}
        </span>
      </div>
      <div className="box">
        <h3>Processando...</h3>
        <span>
          {data.filter((item) => item.status === 'processando')
            .reduce((acc, item) => acc + item.preco, 0)
            .toLocaleString("pt-br", { style: 'currency', currency: "BRL" })}
        </span>
      </div>
            </div>
            <div className="box mb"> Gráficos</div>
    </section>
  )
}

export default Resumo
