import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectGoods
} from '../store/goodsSlice';

import {
    selectCart, increment, minus, zero
} from '../store/cartSlice';
import Cart from '../components/Cart';

const CartList = () => {
    const goods = useSelector(selectGoods);
    const cart = useSelector(selectCart);
    const dispatch = useDispatch();
    // переиндексирую массив товара
    const goodsObj = goods.reduce((accum, item) => {
        accum[item['articul']] = item;
        return accum;
    }, {});

    let clickHandler = (event) => {
        event.preventDefault();
        let t = event.target;
        if (t.classList.contains('add-to-cart')) { dispatch(increment(t.getAttribute('data-key'))) }
        else if (t.classList.contains('minus')) { dispatch(minus(t.getAttribute('data-key'))) }
        else if (t.classList.contains('zero')) { dispatch(zero(t.getAttribute('data-key'))) };

    };
    console.log(cart)
    const getTotalPrice = () => {
        let totalPrice = 0;
        Object.keys(cart).forEach(item => {
            const product = goodsObj[item];
            if (product) {
                totalPrice += product.cost * cart[item];
            }
        });
        return totalPrice;
    };
    return (
        <div>
            <table>
                <tbody onClick={clickHandler}>
                    {Object.keys(cart).map(item => (
                        <Cart
                            key={goodsObj[item].articul}
                            title={goodsObj[item].title}
                            cost={goodsObj[item].cost}
                            count={cart[item]}
                            articul={goodsObj[item].articul}
                            image={goodsObj[item].image}
                        />
                    ))}
                    <td>SUM:{getTotalPrice()}</td>
                </tbody>
            </table>
        </div>);
}

export default CartList;