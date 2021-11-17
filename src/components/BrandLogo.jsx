import MainLogo from '../assets/images/MarciaLogo.svg';
import './Components.scss';

export const BrandLogo = ()=> {
    return (
        <div className="logo">
            <img src={ MainLogo } alt="Marcia" />
        </div>
    )
}