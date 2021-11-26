import MainLogo from '../assets/images/MarciaLogo.svg';
import './Components.scss';

export const BrandLogo = ()=> {
    return (
        <div className="brand__logo">
            <img src={ MainLogo } alt="Marcia" />
        </div>
    )
}