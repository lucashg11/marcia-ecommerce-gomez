import { Link } from 'react-router-dom';
import './Components.scss';

export const Menu = ()=> {
    return (
        
        <div className="menu">
            <Link to="/">
                <button>Productos</button>
            </Link>
            <button>Ofertas</button>
            <button>Contacto</button>
        </div>
    )
}