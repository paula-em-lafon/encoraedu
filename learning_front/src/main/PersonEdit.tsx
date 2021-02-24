import React, {PropsWithRef, SyntheticEvent, useEffect, useState} from 'react'
import Wrapper from './wrapper';
import {Redirect} from 'react-router-dom';
import { Person } from '../interfaces/person';


const PersonEdit = (props: PropsWithRef<any>) => {
    const [name, setName] = useState('');
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        (
            async() => {
                const response = await fetch(`http://localhost:8000/api/v1/person/${props.match.params.id}/`);
                const person: Person = await response.json();
                setName(person.name);
            }
        )();
    }, []);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault()
        await fetch(`http://localhost:8000/api/v1/person/${props.match.params.id}/`, {
            method: 'PUT',
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
                        defaultValue={name}
                        onChange={e => setName(e.target.value)}/>
                </div>
                <button className="btn btn-outline-secondary">Save</button>
            </form>
        </Wrapper>
    );
};

export default PersonEdit;