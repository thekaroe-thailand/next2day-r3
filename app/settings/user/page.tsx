'use client'
import MyButton from "@/app/components/MyButton"; // เรียกใช้ component MyButton
import { useState, useEffect } from "react";

export default function User() {
    const [users, setUsers] = useState<{
        id: number,
        name: string,
        email: string
    }[]>([]);

    // ทำงานทันทีที่ component ถูก render
    useEffect(() => {
        setUsers([
            { id: 1, name: 'John Doe', email: 'john@doe.com' },
            { id: 2, name: 'Jane Doe', email: 'jane@doe.com' },
            { id: 3, name: 'Jim Doe', email: 'jim@doe.com' },
        ])
    }, [])

    const handlAddUser = () => { // สร้างฟังก์ชันสำหรับเพิ่ม user
        // สร้าง user ใหม่
        const newUser = {
            id: users.length + 1,
            name: 'John Doe',
            email: 'john@doe.com'
        }
        setUsers([...users, newUser]) // เพิ่ม user ใหม่เข้าไปใน array
    }

    const handleDeleteUser = (id: number) => {
        // ลบ user ที่มี id ตรงกับที่ส่งเข้ามา
        const newData = users.filter(user => user.id !== id)
        setUsers(newData) // ข้อมูลที่เหลือจากการลบ
    }

    return (
        <div>
            <h1 className="text-4xl">User มีทั้งหมด {users.length} คน</h1>

            <MyButton text="Click me" />
            <MyButton text="Save Data" color="pink" />
            <MyButton text="Add User" onClick={handlAddUser} />

            <button onClick={handlAddUser} className="btn">Add User</button>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        name = {user.name}, email = {user.email}
                        <button onClick={() => handleDeleteUser(user.id)}
                            className="bg-red-500 text-white p-2 rounded-md">
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
