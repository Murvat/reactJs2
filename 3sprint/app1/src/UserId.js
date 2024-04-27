import { useParams, Link } from "react-router-dom";

function UserId() {
    let { userName } = useParams();
    return (
        <>
            <Link to="/users">Back</Link>
            <h1>User:{userName}</h1>
        </>
    )
}

export default UserId;