import React, {useEffect, useState} from 'react'
import Wrapper from './wrapper'
import {Person} from '../interfaces/person'
import {Link} from "react-router-dom";

const People = () => {
    const [people, setPeople] = useState([]);
    useEffect(() => {
        (
            async () => {
                const response = await fetch('http://localhost:8000/api/v1/person/');

                const data = await response.json();

                setPeople(data);
            }
        )();
    }, []);

    const del = async (id: number) => {
        if (window.confirm('Are you sure you want to delete this person?')) {
            await fetch(`http://localhost:8000/api/v1/person/${id}/`, {
                method: 'DELETE'
            });

            setPeople(people.filter((p: Person) => p.id !== id));
        }
    }

    return (
        <Wrapper>
            <div className="pt-3 pb-2 mb-3 border-bottom">
                <div className="btn-toolbar mb-2 mb-md-0">
                    <Link to='/person/create' className="btn btn-sm btn-outline-secondary">Add</Link>
                </div>
            </div>
            <div>
            <h2>Section title</h2>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {people.map((p: Person) =>{
                        return (
                            <tr key= {p.id}>
                                <td>{p.id}</td>
                                <td>{p.name}</td>
                                <td>
                                <div className="btn-group mr-2">
                                    <Link to={`/person/${p.id}/edit`} className="btn btn-sm btn-outline-secondary">
                                        edit
                                    </Link>
                                    <a href="#" className="btn btn-sm btn-outline-secondary"
                                        onClick={() => del(p.id)}>
                                        Delete</a>
                                </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
                </table>
            </div>
            </div>
        </Wrapper>
    );
};

export default People;