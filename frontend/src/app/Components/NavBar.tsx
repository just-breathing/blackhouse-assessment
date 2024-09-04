
"use client"
import Link from "next/link";
import { useState } from "react";



const NavBarWrapper:React.FC = () => {


    const routes = {
        "candlestick": "/",
        "line": "/line",
        "bar": "/bar",
        "pie": "/pie",
    }


    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(()=>!open);
    }



    return ( 
        <div>
            <nav className="bg-slate-400 w-full h-[70px] flex justify-center items-center">
                <div className="flex-grow ml-[20px] ">
                    <p className="text-white font-bold text-3xl">
                       <Link href="/"> Charts DashBoard</Link>
                    </p>
                </div>
                <div className="flex-grow" >
                    <ul className="hidden md:flex justify-end items-center gap-5 mr-[40px]"  >
                       {Object.entries(routes).map(([key, value]) => {
     
                                return(<li key={key} className="text-white font-bold text-2xl">
                                     <Link href={value}>{key}</Link>
                                </li>)
                            
                    })}
                    </ul>
                    <div className="sm:flex sm:flex-col md:hidden flex-col ">
                        {!open ? (
                            <p className="text-white font-bold text-3xl cursor-pointer" onClick={handleOpen}>
                            Menu
                            </p>
                        ) : (
                            <p className="text-white font-bold text-3xl cursor-pointer" onClick={handleOpen}>
                            X
                            </p>
                        )}
                        <ul
                            className={`flex flex-col justify-center bg-black items-center gap-2 mt-[50px] z-20 mr-[20px] ${
                            open ? 'block' : 'hidden'
                            }`}
                        >
                            {Object.entries(routes).map(([key, value]) => (
                            <li key={key} className="text-white font-bold text-2xl">
                                <Link href={value} onClick={handleOpen}>
                                {key}
                                </Link>
                            </li>
                            ))}
                        </ul>
                     </div>
                </div>
            </nav>
        </div>
     );
}

export default NavBarWrapper;