import React from "react";
import { useDispatch } from "react-redux";
import { addNewUsers } from "../action";

const AddUser = () => {
    const dispatch = useDispatch();

    const formHandler = (event) => {
        event.preventDefault();
        const name = event.target.elements.name.value
        const passport = event.target.elements.passport.value
        const age = event.target.elements.age.value

        dispatch(addNewUsers(passport, name, age));
    };

    return (
        <div>
            <form onSubmit={formHandler}>
                <div>
                    <input type="text" name="name" placeholder="Name" />
                    <input type="text" name="passport" placeholder="Passport" />
                    <input type="text" name="age" placeholder="Age" />
                </div>
                <div>
                    <button type="submit">Press button</button>
                </div>
            </form>
        </div>
    );
};

export default AddUser;
