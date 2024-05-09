import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <footer className="footer p-10 text-base-content mt-96 bg-gradient-to-r from-base-100 to-base-300 buttom-0">
            <nav>
                <h6 className="footer-title">Creator</h6>
                <a className="link link-hover">Rungroj Chaochai</a>
                <a className="link link-hover">Sarawut Wisetphon</a>
                <a className="link link-hover">Siriphoom Intapanya</a>
            </nav>
            <nav>
                <h6 className="footer-title">Equipment</h6>
                <a className="link link-hover">React</a>
                <a className="link link-hover">Giscus</a>
                <a className="link link-hover">Daisyui</a>
                <a className="link link-hover">tailwindcss</a>
                <a className="link link-hover">React-Router-Dom</a>
                <a className="link link-hover">Visual Studio Code</a>
                <a className="link link-hover">Tailwindcss-Animated</a>
            </nav>

        </footer>
    )
}
