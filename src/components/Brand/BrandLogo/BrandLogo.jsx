import MainLogo from '../BrandLogo/MarciaLogo.svg';
import '../BrandLogo/BrandLogo.css';

export const BrandLogo = ()=> {
    return (
        <div className="logo">
            <img src={ MainLogo } alt="Marcia" />
        </div>
    )
}