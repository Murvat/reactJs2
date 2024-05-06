function List(data) {
    console.log('============');
    console.log(data);
    console.log('==============');
    return (
        <>
            <div>
                {data.goods.map(item => <li key={item.id}>{item.title}<img src={item.image} className="image" /></li>)}</div></>
    )

}
export default List