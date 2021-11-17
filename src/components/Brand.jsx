import { BrandLogo } from './BrandLogo';
import { BrandName } from './BrandName';

import './Components.scss';

export const Brand = ()=>{
    return (
        <div className="brand">
            <BrandLogo />
            <BrandName />
        </div>
    )
}