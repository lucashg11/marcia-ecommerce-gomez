import { BrandLogo } from './BrandLogo';
import { BrandName } from './BrandName';

import './Components.css';

export const Brand = ()=>{
    return (
        <div className="brand">
            <BrandLogo />
            <BrandName />
        </div>
    )
}