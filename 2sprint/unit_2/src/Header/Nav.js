function Nav(props) {
    const navArr = props.data
    return (
        <>
            <nav>
                <ul className="main-navigation">
                    {navArr?.map(item => <li key={item.link}><a href={item.link}>{item.text}</a></li>)}
                </ul>
            </nav></>
    )
}
export default Nav;