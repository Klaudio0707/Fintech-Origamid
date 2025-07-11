import resumo from '../../assets/icons/resumo.svg'
import vendas from '../../assets/icons/vendas.svg'
import webhooks from '../../assets/icons/webhooks.svg'
import sair from '../../assets/icons/sair.svg'
import configuracoes from '../../assets/icons/configuracoes.svg'
import contato from '../../assets/icons/contato.svg';
import { NavLink } from 'react-router-dom'
import FintechSVG from '../../assets/FintechSVG'

const index = () => {
  return (
   <nav className='sidenav box bg-'>
  <FintechSVG title="Fintech Logo"/>
    <ul>
      <li>
        <span>
          <img src={resumo} alt="resumo" />
        </span>
        <NavLink to="/">Resumo</NavLink>
      </li>
      <li>
        <span>
          <img src={vendas} alt="vendas" />
        </span>
        <NavLink to="/vendas">Vendas</NavLink>
      </li>
      <li>
        <span>
          <img src={webhooks} alt="web" />
        </span>
        <NavLink to="/">WebHooks</NavLink>
      </li>
      <li>
        <span>
          <img src={configuracoes} alt="configuraçõe" />
        </span>
        <NavLink to="/">Configuraçõpes</NavLink>
      </li>
      <li>
        <span>
          <img src={contato} alt="contato" />
        </span>
        <NavLink to="/">Contato</NavLink>
      </li>
      <li>
        <span>
          <img src={sair} alt="sair" />
        </span>
        <NavLink to="/">Sair</NavLink>
      </li>
    </ul>
   </nav>
  )
}

export default index
