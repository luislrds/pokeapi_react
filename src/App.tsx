import { BrowserRouter , Routes, Route} from 'react-router-dom'
import Layout from './pages/Layout';
import Pokemons from './pages/Pokemons';
import PokemonsDetail from './pages/PokemonsDetail';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Pokemons></Pokemons>}></Route>
                <Route path=":id" element={<PokemonsDetail></PokemonsDetail>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;

