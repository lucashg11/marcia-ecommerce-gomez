import { Brand } from './Brand/Brand';
import { Menu } from './Menu/Menu';
import { CartWidget } from './CartWidget/CartWidget';
import './NavBar.css';

export const NavBar = ()=>{
    return (
        <div className="navbar">
            <Brand />
            <Menu />
            <CartWidget />
        </div>
    )
}