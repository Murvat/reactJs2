import { useState } from "react";
import env from "../env.json";

function Create() {
    const [url, setUrl] = useState('');
    const [lineClass, setlineClass] = useState('hide');
    const [formClass, setFormClass] = useState('');

    let sendData = (obj) => {
        setFormClass('hide');
        setlineClass('');
        fetch(env.urlBackend, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(obj)
        })
            .then(response => response.json())
            .then(response => {
                console.log(response)
                if (response.result) {
                    setUrl(env.url + '/' + response.url)
                }
            })
    }

    let loadDataFromFrom = (e) => {
        e.preventDefault();
        let note = e.target.elements.note.value;
        note = note.trim();

        if (note === ' ') {
            alert('Please fill in ');
            return false;
        }
        sendData({ 'note': note })
    }

    return (
        <>
            <div >

                <form onSubmit={loadDataFromFrom} className={formClass}>
                    <label htmlFor="">Add note</label>
                    <textarea name="note" id="note" defaultValue='Test'></textarea>
                    <button type='submit'>Create</button>
                </form>
                <div className={lineClass}>
                    <div  >
                        {url}
                    </div>
                    <div>
                        <button onClick={() => window.location.reload()}>
                            Create  a new note
                        </button>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Create;
