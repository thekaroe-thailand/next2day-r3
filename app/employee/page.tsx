'use client'

import { useState, useEffect } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

export default function Employee() {
    const apiUrl = 'http://localhost:3001';

    const [employees, setEmployees] = useState([]);
    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [remark, setRemark] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const url = `${apiUrl}/api/employees/list`
        const res = await axios.get(url)
        setEmployees(res.data)
    }

    const saveData = async () => {
        const payload = {
            name: name,
            username: username,
            password: password,
            remark: remark
        }

        if (id === 0) {
            const url = `${apiUrl}/api/employees/create`;
            await axios.post(url, payload)
        } else {
            const url = `${apiUrl}/api/employees/update/${id}`;
            await axios.put(url, payload)
            setId(0)
        }

        fetchData();
        setName('');
        setUsername('');
        setPassword('');
        setRemark('');
    }

    const deleteData = async (id: number) => {
        const url = `${apiUrl}/api/employees/delete/${id}`;
        await axios.delete(url)
        fetchData();
    }

    const editData = (employee: any) => {
        setId(employee.id)
        setName(employee.name)
        setUsername(employee.username)
        setPassword(employee.password)
        setRemark(employee.remark)
    }

    return (
        <>
            <div>Employee Data</div>
            <div className="flex flex-col gap-2 mb-3">
                <div>name</div>
                <input className="input" value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <div>username</div>
                <input className="input" value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <div>password</div>
                <input className="input" value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <div>remark</div>
                <input className="input" value={remark}
                    onChange={(e) => setRemark(e.target.value)}
                />

                <button className="btn" onClick={saveData}>
                    <i className="fa fa-check mr-2"></i>
                    Save Data
                </button>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>username</th>
                        <th>password</th>
                        <th>remark</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee: any) => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.username}</td>
                            <td>{employee.password}</td>
                            <td>{employee.remark}</td>
                            <td className="text-center flex gap-2">
                                <button className="btn-edit"
                                    onClick={() => editData(employee)}>
                                    <i className="fa fa-pencil"></i>
                                </button>
                                <button
                                    className="btn-delete"
                                    onClick={() => deleteData(employee.id)}>
                                    <i className="fa fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}