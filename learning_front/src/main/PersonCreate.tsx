import React, {SyntheticEvent, useState} from 'react'
import Wrapper from './wrapper';
import {Redirect} from 'react-router-dom';


const PersonCreate = () => {
    const [name, setName] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault()
        await fetch('http://localhost:8000/api/v1/person/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name
            })
        });
        setRedirect(true);
    }
    if(redirect) {
        return <Redirect to={"/"} />
    };
    return (
        <Wrapper>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" name="name"
                        onChange={e => setName(e.target.value)}/>
                </div>
                <button className="btn btn-outline-secondary">Save</button>
            </form>
        </Wrapper>
    );
};

export default PersonCreate;