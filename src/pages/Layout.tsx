import Container from '@mui/material/Container'
import { Outlet, Link, useLocation} from 'react-router-dom'
import logo  from '../img/pokeapi_256.png'

const Layout = () => {

  const location = useLocation();
  const currentUrl =location.pathname;

  return (
    <div className='md:flex md:min-h-screen'>
      <div className="md:w-1/6 bg-red-700 py-5">
        <Link to="/">
          <img className='w-50 px-10 py-10 hover:scale-110' src={logo} alt="pokeapi" />
        </Link>
      </div>      
      <div className="md:w-5/6 p-10">
        <Container>
          <Outlet></Outlet>
        </Container>

      </div>
      
    </div>
  )
}

export default Layout
