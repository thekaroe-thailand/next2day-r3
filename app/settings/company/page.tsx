'use client'

import { useRef } from "react";
import Swal from 'sweetalert2' // นำเข้า sweetalert2

export default function Company() {
    const inputRef = useRef<HTMLInputElement>(null);
    const handleClick = () => {
        // สั่งการด้วย react
        inputRef.current?.focus();

        // สั่งการด้วย javascript ธรรมดา
        document.getElementById('input')?.focus();

        // แสดงข้อความด้วย sweetalert2
        Swal.fire({
            title: 'Hello',
            text: 'This is a test',
            icon: 'question', // success, error, warning, info, question
            timer: 2000 // หน่วงเวลา 2 วินาที
        })
    }

    const handleClick2 = async () => {
        const button = await Swal.fire({
            title: 'ยืนยันการลบข้อมูล',
            text: 'คุณแน่ใจหรือว่าต้องการลบข้อมูลนี้',
            icon: 'question',
            showCancelButton: true,
            showConfirmButton: true
        })

        if (button.isConfirmed) {
            alert('ok delete')
        }
    }
    return (
        <div className="flex gap-2 p-5">
            <button className="btn" onClick={handleClick2}>Click me</button>

            <h1 className="text-4xl">Company</h1>
            <input className="input" type="text" ref={inputRef} id="input" />
            <button className="btn" onClick={handleClick}>Click me</button>
        </div>
    );
}
