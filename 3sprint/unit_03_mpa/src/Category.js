import CategoryDesription from "./CategoryDesription"
function Category() {
    return (
        <>
            <h1>Category:</h1>
            <CategoryDesription />
            <a href="/cat">Назад</a>
            <ul>
                <li><a href="/cat/notebook">Ноутбуки</a></li>
                <li><a href="/cat/monitor">Мониторы</a></li>
                <li><a href="/cat/cellphone">Мобильные телефоны</a></li>
            </ul>
        </>
    )
}

export default Category