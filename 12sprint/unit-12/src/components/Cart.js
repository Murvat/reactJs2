const Cart = (props) => {
    return (
        <tr>
            <td>{props.title}</td>
            <td>{props.cost}</td>
            <td>{props.count}</td>
            <td><img src={props.image} style={{ width: '50px' }} /></td>
            <td>{props.count * props.cost}</td>
            <td>
                <button className="minus" data-key={props.articul}>-</button>
                <button className="add-to-cart" data-key={props.articul}>+</button>
                <button className="zero" data-key={props.articul}>x</button>
            </td>
        </tr>
    )
};

export default Cart;
