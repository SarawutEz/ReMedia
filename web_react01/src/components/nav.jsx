import { Link } from "react-router-dom"
import './nav.css'

export default function Nav() {
    return (
        <nav>
            <div className="container">
                <div className="navcon">
                    <div className="logo">
                        <a href="index.html">
                            <img src="/img/AMVM_NOBG.png" />
                        </a>
                    </div>
                    <ul className="menu" id="myMenu">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                    <div className="ham_menu" onclick="toggleham(this)">
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
