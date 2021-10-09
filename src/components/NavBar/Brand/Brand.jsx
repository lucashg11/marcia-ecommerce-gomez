import { BrandLogo } from '../Brand/BrandLogo/BrandLogo';
import { BrandName } from '../Brand/BrandName/BrandName';

import '../Brand/Brand.css';

export const Brand = ()=>{
    return (
        <div className="brand">
            <BrandLogo />
            <BrandName />
        </div>
    )
}