import '../ItemListContainer/ItemListContainer.css'

export const ItemListContainer = ({ greeting })=>{
    return (
        <div className="itemlist">
            <h1>{ greeting }</h1>
        </div>
    )
}