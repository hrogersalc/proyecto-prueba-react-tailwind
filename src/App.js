import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './paginas/Inicio';
import Perfil from './paginas/Perfil';
import Ingresar from './paginas/Ingresar';
import Registro from './paginas/Registro';
import Ofertas from './paginas/Ofertas';
import OlvidePassword from './paginas/OlvidePassword';
import Cabecera from './componentes/Cabecera';

function App() {
  return (
    <>
      <Router>
        <Cabecera />
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/perfil' element={<Perfil />} />
          <Route path='/ingresar' element={<Ingresar />} />
          <Route path='/registro' element={<Registro />} />
          <Route path='/ofertas' element={<Ofertas />} />
          <Route path='/olvide-password' element={<OlvidePassword />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
