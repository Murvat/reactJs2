import React from 'react';
import { useDispatch } from 'react-redux';
import {
    add,
    division,
    minus,
    multi,
} from './app/taskReducerSlice';

export default function In() {
    let task1Input = React.createRef();
    const dispatch = useDispatch();

    const addHandler = () => {
        dispatch(add(task1Input.current.value));
    }
    const minusHandler = () => {
        dispatch(minus(task1Input.current.value));
    }
    const multiHandler = () => {
        dispatch(multi(task1Input.current.value));
    }
    const divHandler = () => {
        dispatch(division(task1Input.current.value))
    }

    return (
        <div>
            <input type="number" ref={task1Input} />
            <h2>Task 1</h2>
            <button onClick={addHandler}>+</button>
            <button onClick={minusHandler}>-</button>
            <button onClick={multiHandler}>*</button>
            <button onClick={divHandler}>/</button>
        </div>
    );
}