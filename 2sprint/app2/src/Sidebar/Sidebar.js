import './Sidebar.css';
import articles from '../data/articles.json'

function Sidebar() {
    return (
        <div className="Sidebar">
            <nav>
                <ul>
                    {articles.map(item => <li>
                        <a href={item.url}>{item.title}</a>
                    </li>)}
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar