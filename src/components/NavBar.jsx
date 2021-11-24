import { Brand } from './Brand';
import { Menu } from './Menu';
import { CartWidget } from './CartWidget';
import { Link } from 'react-router-dom';
import './Components.scss';

export const NavBar = ()=>{
    return (
        <div className="navbar">
            <Link to="/">
                <Brand />
            </Link>
            <Menu />
            <Link to="/cart">
                <CartWidget/>
            </Link>
        </div>
    )
}