import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/">Main</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/users">Users</Link></li>


                </ul>
            </nav>
        </>);
}

export default Header;
