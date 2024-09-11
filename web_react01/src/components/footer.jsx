import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <footer className="footer p-10 text-base-content mt-96 bg-gradient-to-r from-base-100 to-base-300 buttom-0">
            <nav>
                <h6 className="footer-title">Creator</h6>
                <a className="link link-hover">Rungroj Chaochai</a>
                <a className="link link-hover">Sarawut Wisetphon</a>
                <Link to= "https://leafy-syrniki-b47771.netlify.app/">
                <a className="link link-hover">Siriphoom Intapanya</a>
                </Link>
            </nav>
            <nav>
                <h6 className="footer-title">Equipment</h6>
                <Link to= "https://react.dev/"><a className="link link-hover">React</a></Link>
                <Link to= "https://giscus.app/th"><a className="link link-hover">Giscus</a></Link>
                <Link to= "https://daisyui.com/docs/install/"><a className="link link-hover">Daisyui</a></Link>
                <Link to= "https://tailwindcss.com/"><a className="link link-hover">tailwindcss</a></Link>
                <Link to= "https://reactrouter.com/en/main"><a className="link link-hover">React-Router-Dom</a></Link>
                <Link to= "https://code.visualstudio.com/"><a className="link link-hover">Visual Studio Code</a></Link>
                <Link to= "https://www.tailwindcss-animated.com/"><a className="link link-hover">Tailwindcss-Animated</a></Link>
            </nav>

        </footer>
    )
}
