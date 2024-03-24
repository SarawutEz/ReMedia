import { Link } from "react-router-dom"


export default function Nav() {
    return (
        <div className="navbar bg-base-100 container mx-auto">
            <div className="flex-1">
                <a className="btn btn-ghost text-2xl">daisyUI</a>
            </div>

            <ul className="p-1 bg-base-100 rounded-t-none max-sm:hidden">
                <li className="mx-4 btn btn-ghost text-lg"><Link to="/">Home</Link></li>
                <li className="btn btn-ghost text-lg"><Link to="/Movies">Movies</Link></li>
                <li className="btn btn-ghost text-lg"><Link to="/Animations">Animations</Link></li>
                <li className="btn btn-ghost text-lg"><Link to="/Mangas">Mangas</Link></li>
            </ul>

            <div className="flex">
                <ul className="menu menu-horizontal px-10 text-lg sm:hidden">
                    <li>
                        <details>
                            <summary className="text-lg">
                                Menu
                            </summary>
                            <ul className="p-1 bg-base-100 rounded-t-none text-base">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/Movies">Movies</Link></li>
                                <li><Link to="/Animations">Animations</Link></li>
                                <li><Link to="/Mangas">Mangas</Link></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    )
}

