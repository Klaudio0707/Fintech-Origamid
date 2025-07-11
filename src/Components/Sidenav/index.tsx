import icons from '../../assets/export';
import { NavLink } from 'react-router-dom'
import FintechSVG from '../../assets/FintechSVG'

const index = () => {
  return (
   <nav className='sidenav box bg-'>
  <FintechSVG title="Fintech Logo"/>
    <ul>
      <li>
        <span>
          <img src={icons.resumo} alt="resumo" />
        </span>
        <NavLink to="/">Resumo</NavLink>
      </li>
      <li>
        <span>
          <img src={icons.vendas} alt="vendas" />
        </span>
        <NavLink to="/vendas">Vendas</NavLink>
      </li>
      <li>
        <span>
          <img src={icons.webhooks} alt="web" />
        </span>
        <NavLink to="/">WebHooks</NavLink>
      </li>
      <li>
        <span>
          <img src={icons.configuracoes} alt="configuraçõe" />
        </span>
        <NavLink to="/">Configuraçõpes</NavLink>
      </li>
      <li>
        <span>
          <img src={icons.contato} alt="contato" />
        </span>
        <NavLink to="/">Contato</NavLink>
      </li>
      <li>
        <span>
          <img src={icons.sair} alt="sair" />
        </span>
        <NavLink to="/">Sair</NavLink>
      </li>
    </ul>
   </nav>
  )
}

export default index
