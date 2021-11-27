

export const Categories =({category, index})=>{
    return (
        <div key={index}>
            <p>{category}</p>
        </div>
    )
}