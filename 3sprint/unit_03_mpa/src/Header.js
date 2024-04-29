import {
    BrowserRouter as Router, Routes, Route, Link
} from 'react-router-dom';

function Header() {
    return (
        <>
            <ul>
                <li><a href="/">Главная</a></li>
                <li><a href="/about">О сайте</a></li>
                <li><a href="/cat">Категории</a></li>
            </ul>
        </>
    )
}

export default Header