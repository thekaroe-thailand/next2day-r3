export default function MyButton(
    { text, color = "blue", onClick }: // ถ้าไม่มีการส่ง color มา จะใช้ค่า default เป็น blue
        { text: string, color?: string, onClick?: () => void } // ส่งค่า text และ color เข้ามาใน component
) {
    return (
        <button
            onClick={onClick}
            className={`bg-${color}-500 text-white p-2 rounded-md`}>
            {text}
        </button>
    )
}
