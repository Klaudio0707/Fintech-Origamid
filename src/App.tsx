import Header from './Components/Header'
import Sidenav from './Components/Sidenav'
import { DataContextProvider } from './Context/DataContext'
import Resumo from './Pages/Resumo'
import './styles.css'

function App() {

  return (
    <DataContextProvider>
      <div>
        <Sidenav />
        <main>
          <Header />
          <Resumo />
        </main>
      </div>
    </DataContextProvider>
  )
}

export default App
