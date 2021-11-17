import './Components.scss';


export const ItemCount = ({count, stock, upCount, downCount,})=> {


    return (
        <>
            <div className="card__counter">
                <button className="card__counter--button" onClick={downCount}> - </button>
                <p stock={stock}>{count}</p>
                <button className="card__counter--button" onClick={upCount}> + </button>
            </div>
            <button className="card__button">Agregar al carrito</button>

        </>
    )
}