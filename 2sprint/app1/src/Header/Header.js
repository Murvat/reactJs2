function Header(props) {
    return (
        <>
            <header>
                <h1>
                    {props.data.site_name}
                </h1>
                <h2>
                    {props.data.second_date}
                </h2>
                <Nav nav={props.data.nav}></Nav>
            </header>
        </>
    )
}

function Nav(props) {
    let data = props.nav;
    const listItem = data.map(item => <li key={item.link}><a href={item.link}></a>{item.text}</li>)
    return (
        <nav>
            <ul>
                {listItem}
            </ul>
        </nav>
    )
}


export default Header