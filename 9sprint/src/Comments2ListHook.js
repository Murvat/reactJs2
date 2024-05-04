import { useState, useEffect } from 'react'

function Comments2ListHook(props) {

    const [data, setData] = useState([]);

    function onlyEven() {
        let evenPost = data.filter(a => a.id % 2 == 0)
        setData(evenPost)
    }
    useEffect(() => {
        console.log('effect');
        if (props.comments.length > 0) setData(props.comments);
    }, [props]);
    return (
        <>
            <div>
                <div>
                    <button onClick={onlyEven}>Only even comments</button>
                </div>
                {data.map((el, index) => (
                    <section key={el.id}>
                        <p><b>{index + 1}. {el.email}</b></p>
                        <p>{el.body}</p>
                    </section>
                ))}
            </div>
        </>
    )
}
export default Comments2ListHook