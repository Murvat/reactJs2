import { NavLink, useLocation } from "react-router-dom"
function Category() {
    let url = useLocation();
    return (
        <>
            <a href="/cat">Назад</a>
            <ul>
                <li><NavLink to={`${url.pathname}/notebook`}>Ноутбуки</NavLink></li>
                <li><NavLink to={`${url.pathname}/monitor`}>Мониторы</NavLink></li>
                <li><NavLink to={`${url.pathname}/cellphone`}>Мобильные телефоны</NavLink></li>
            </ul>

        </>
    )
}

export default Category