const List = (data) => {
    return (
        <>
            <div>{data.users.map(item => <li key={item.name}>{item.age}{item.passport}</li>)}</div>
        </>
    )
}
export default List;