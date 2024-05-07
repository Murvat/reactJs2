import React from "react";
import { useDispatch } from "react-redux";
import { addNewUsers } from "../action";

const AddUser = () => {
    const dispatch = useDispatch();

    const formHandler = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const name = formData.get("name");
        const passport = formData.get("passport");
        const age = formData.get("age");

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
