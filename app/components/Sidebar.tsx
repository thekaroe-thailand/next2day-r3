import Link from "next/link";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="flex flex-col gap-2">
                <Link href="/">Home</Link>
                <Link href="/http">HTTP</Link>
                <Link href="/settings/user">User</Link>
            </div>
        </div>
    )
}
