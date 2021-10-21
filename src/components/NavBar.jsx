import { Brand } from './Brand';
import { Menu } from './Menu';
import { CartWidget } from './CartWidget';
import './Components.css';

export const NavBar = ()=>{
    return (
        <div className="navbar">
            <Brand />
            <Menu />
            <CartWidget />
        </div>
    )
}