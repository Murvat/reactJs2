import React, { useEffect, useState } from 'react';
function PlaceholderPostHook() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1/posts')
            .then(response => response.json())
            .then(data => {
                setData(data);
            });
    }, []);



    return (
        <>
            {data.map(
                item => (
                    <section>
                        <h2>{item.id}.{item.title}</h2>
                        <p>{item.body}</p>
                    </section>
                ))}

        </>
    )

}
export default PlaceholderPostHook;