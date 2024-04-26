import Nav from "./Nav";

function Header(props) {
    return (
        <>
            <header>
                <h1>{props.data.site_name}</h1>
                <h2>{props.data.site_title}</h2>
                <Nav data={props.data.nav} />
            </header></>
    )
}
export default Header;