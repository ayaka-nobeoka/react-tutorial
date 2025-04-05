export default function Recipe({id,name,ingredients}) {
    return (
<div>
    <h2>{name}</h2>
    <ul>
        {ingredients.map((ingredient,index) => (
            <li key={`${id}-${index}`}>{ingredient}</li>
        ))}
    </ul>
</div>
    );
}

