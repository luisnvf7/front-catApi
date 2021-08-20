import { useEffect, FC } from 'react'
import { environment } from '../environment/environment.dev'

/* Pagina de home que se comunicara con el oAuth */
const Home : FC = () => {

  useEffect(() => {
    window.location.assign(`${environment.server}/auth`)    
  }, [])


  return (
    <div>
    </div>
  );
}

export default Home;