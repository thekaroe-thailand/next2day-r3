'use client'

/**
     * GET = ดึงข้อมูลมาใช้งาน
     * POST = เพิ่มข้อมูลใหม่
     * PUT = แก้ไขข้อมูล
     * DELETE = ลบข้อมูล
     */

import axios from 'axios'

export default function Http() {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    const payload = {
        id: 100,
        title: 'test'
    }
    const handleGet = async () => {
        await axios.get(url)
    }
    const handlePost = async () => await axios.post(url, payload)
    const handlePut = async () => await axios.put(url, payload)
    const handleDelete = async () => await axios.delete(url)

    return (
        <div>
            <h1>Http</h1>
            <button className="btn" onClick={handleGet}>GET</button>
            <button className="btn" onClick={handlePost}>POST</button>
            <button className="btn" onClick={handlePut}>PUT</button>
            <button className="btn" onClick={handleDelete}>DELETE</button>
        </div>
    )
}