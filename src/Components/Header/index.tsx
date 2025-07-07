import { useData } from '../../Context/DataContext'
import DateRange from '../DateRange';
import Meses from '../Meses';

const index = () => {

  return (
    <header className='mb'>
      <div className='mb'>
   <DateRange/>
      </div>
   <Meses/>
    </header>
  )
}

export default index
