import React, { useState } from "react"
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isToggleOpen, setIsToggleOpen] = useState(false)

    return (
        <>
            <div className=" font-poppins top-0 sticky z-50 shadow-lg shadow-slate-700/5 bg-white/90 ">
                <header className=" max-w-7xl mx-auto border-b-1 relative z-20 w-full border-b border-slate-200 bg-white/90  after:absolute after:left-0 after:top-full after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
                    <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
                        <nav
                            aria-label="main navigation"
                            className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
                            role="navigation"
                        >
                            {/*      <!-- Brand logo --> */}
                            <Link to='/'>
                                <div className="uppercase  font-semibold flex items-center gap-2 whitespace-nowrap py-3 text-[22px] focus:outline-none lg:flex-1" >
                                    <img width="80" height="80" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/100/external-defence-martial-arts-flaticons-lineal-color-flat-icons.png" alt="external-defence-martial-arts-flaticons-lineal-color-flat-icons" />
                                    <div className=" ">
                                        <h1 className="leading-tight tracking-tighter">Stand Against <span className="text-red-700 font-bold leading-tight tracking-tighter">Inhumanity</span></h1>
                                        <h1 className="text-[11px] ">Empowering youth for better <span className="text-green-600">Ban</span><span className="text-red-600">glad</span><span className="text-green-600">desh</span></h1>
                                    </div>
                                </div>
                            </Link>

                            {/*      <!-- Mobile trigger --> */}
                            <button
                                className={`relative order-10 block h-10 w-10 self-center lg:hidden
              ${isToggleOpen
                                        ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0 "
                                        : ""
                                    }
            `}
                                onClick={() => setIsToggleOpen(!isToggleOpen)}
                                aria-expanded={isToggleOpen ? "true" : "false"}
                                aria-label="Toggle navigation"
                            >
                                <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                                    <span
                                        aria-hidden="true"
                                        className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                                    ></span>
                                    <span
                                        aria-hidden="true"
                                        className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                                    ></span>
                                    <span
                                        aria-hidden="true"
                                        className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                                    ></span>
                                </div>
                            </button>
                            {/*      <!-- Navigation links --> */}
                            <ul
                                role="menubar"
                                aria-label="Select page"
                                className={`absolute left-0 top-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-4 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${isToggleOpen
                                    ? "visible opacity-100 backdrop-blur-sm"
                                    : "invisible opacity-0"
                                    }`}
                            >
                                <li role="none" className="flex items-stretch">
                                    <a
                                        role="menuitem"
                                        aria-haspopup="false"
                                        className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-4"
                                        href="javascript:void(0)"
                                    >
                                        <span>Blog</span>
                                    </a>
                                </li>
                                <li role="none" className="flex items-stretch">
                                    <Link
                                        to={`/bloodbank`}
                                        className="flex items-center py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-4">
                                        <span>Blood bank</span>
                                    </Link>
                                </li>
                                <li role="none" className="flex items-stretch">
                                    <a                    
                                        className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-4"
                                        
                                    >
                                        <span>Planning</span>
                                    </a>
                                </li>
                                <Link to='/about' className="flex items-stretch">

                                    <a
                                        role="menuitem"
                                        aria-haspopup="false"
                                        className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-4"
                                        href="javascript:void(0)"
                                    >
                                        <span>About Us</span>
                                    </a>

                                </Link>
                            </ul>
                            <div className="ml-auto flex items-center px-6 lg:ml-0 lg:p-0">
                                {/*        <!-- Avatar --> */}
                                <a
                                    href="#"
                                    className="relative inline-flex h-10 w-10 items-center justify-center rounded-full text-white"
                                >
                                    <img
                                        src="https://i.pravatar.cc/40?img=35"
                                        alt="user name"
                                        title="user name"
                                        width="40"
                                        height="40"
                                        className="max-w-full rounded-full hidden md:block "
                                    />
                                    <span className="absolute bottom-0 right-0 inline-flex items-center justify-center gap-1 rounded-full border-2 border-white bg-pink-500 p-1 text-sm text-white">
                                        <span className="sr-only"> 7 new emails </span>
                                    </span>
                                </a>
                                {/*        <!-- End Avatar --> */}
                            </div>
                        </nav>
                    </div>
                </header>
            </div>

            {/*<!-- End Navbar with Avatar--> */}
        </>
    )
}

export default Navbar;