import { useParams, NavLink } from "react-router-dom"
function CategoryDesription() {
    let { categoryName } = useParams();

    return (
        <>
            <NavLink to="/cat">Назад</NavLink>
            <h1>Category:{categoryName}</h1>
        </>
    )
}


export default CategoryDesription