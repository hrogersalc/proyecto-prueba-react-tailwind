import { useLocation, useNavigate } from 'react-router-dom';

export default function Cabecera() {
    const ubicacion = useLocation();
    const navegar = useNavigate();

    const rutaCoincidente = (ruta) => {
        if (ruta === ubicacion.pathname) {
            return true;
        }
        return false;
    };

    return (
      <div className="bg-white border-b shadow-sm sticky top-0 z-50">
        <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
            <div>
                <img
                    src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
                    alt="logo"
                    className="h-5 cursor-pointer"
                    onClick={() => navegar("/")}/>
            </div>
            <div>
                <ul className="flex space-x-10">
                    <li
                        className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${rutaCoincidente("/") && "text-black border-b-red-500"}`}
                        onClick={() => navegar("/")}>Inicio</li>
                    <li
                        className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${rutaCoincidente("/ofertas") && "text-black border-b-red-500"}`}
                        onClick={() => navegar("/ofertas")}>Ofertas</li>
                    <li
                        className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${rutaCoincidente("/ingresar") && "text-black border-b-red-500"}`}
                        onClick={() => navegar("/ingresar")}>Ingresar</li>
                </ul>
            </div>
        </header>        
      </div>
  )
}
