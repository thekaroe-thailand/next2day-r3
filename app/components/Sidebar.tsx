import Link from "next/link";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="flex flex-col gap-2">
                <Link href="/">
                    <i className="fa fa-home mr-2"></i>
                    Home
                </Link>
                <Link href="/http">
                    <i className="fa fa-server mr-2"></i>
                    HTTP
                </Link>
                <Link href="/settings/user">
                    <i className="fa fa-user mr-2"></i>
                    User
                </Link>
                <Link href="/employee">
                    <i className="fa fa-users mr-2"></i>
                    Employee
                </Link>
            </div>
        </div>
    )
}
