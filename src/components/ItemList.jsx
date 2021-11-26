import '../containers/Container.scss';
import { Link } from 'react-router-dom';

export const ItemList = ({ item })=> {

    return (
        <div className="card">
            <Link to={`/item/${item.id}`}>
                <img src={ item.image } alt="" className="card__img"/>
            </Link>
            <div className="card__body">
                <h3 className="card__title">{ item.title } </h3>
                <p className="card__description">{item.description}</p>
                <p className="card__price"><span>{item.currency}</span>{ item.price }</p>
            </div>
        </div>
    )
}