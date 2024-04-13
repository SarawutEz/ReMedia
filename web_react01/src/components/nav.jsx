import { Link } from "react-router-dom"
import { motion, useScroll, useSpring } from "framer-motion";


export default function Nav() {

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <>
            <div className="navbar bg-gradient-to-r from-base-100 to-base-300 z-50 fixed top-0">

                <motion.div className="fixed top-16 left-0 right-0 h-1 bg-base-content rounded-r-3xl" style={{ scaleX }} />

                <div className="navbar-start">



                    <div className="dropdown ">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="ml-2 sm:ml-6 lg:ml-8 menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-gradient-to-r from-base-100 to-base-300">
                            <li className="pb-2"><Link to="/">Home</Link></li>
                            <li>
                                <a>Movie</a>
                                <ul className="p-4">
                                    <li><Link to="/Movies_top">Top</Link></li>
                                    <li><Link to="/Movies_Popular">Popular</Link></li>
                                    <li><Link to="/Movies_Trending">Trending</Link></li>
                                    <li><Link to="/Discussions_M">Discussions</Link></li>
                                </ul>
                            </li>
                            <li>
                                <a>TV Shows</a>
                                <ul className="p-4">
                                    <li><Link to="/TV_top">Top</Link></li>
                                    <li><Link to="/TV_Popular">Popular</Link></li>
                                    <li><Link to="/TV_Trending">Trending</Link></li>
                                    <li><Link to="/Discussions_T">Discussions</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/Search">Search <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-100"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg></Link></li>
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost text-xl">ReMedia</Link>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 ">
                        <li><Link to="/">Home</Link></li>
                        <li>
                            <details>
                                <summary>Movie</summary>
                                <ul className="bg-gradient-to-r from-base-100 to-base-300">
                                    <li><Link to="/Movies_top">Top</Link></li>
                                    <li><Link to="/Movies_Popular">Popular</Link></li>
                                    <li><Link to="/Movies_Trending">Trending</Link></li>
                                    <li><Link to="/Discussions_M">Discussions</Link></li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>TV Shows</summary>
                                <ul className="bg-gradient-to-r from-base-100 to-base-300">
                                    <li><Link to="/TV_top">Top</Link></li>
                                    <li><Link to="/TV_Popular">Popular</Link></li>
                                    <li><Link to="/TV_Trending">Trending</Link></li>
                                    <li><Link to="/Discussions_T">Discussions</Link></li>
                                </ul>
                            </details>
                        </li>
                        <li><Link to="/Search">Search <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-100"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg></Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <label className="cursor-pointer grid place-items-center">
                        <input type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                        <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                        <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>
                </div>
            </div>
        </>
    )
}
