import Link from "next/link"

export default function Navbar(){
    return(
        <nav className="conatiner-fluid w-screen flex flex-row flex-wrap p-3 bg-black border-b border-slate-500 items-center justify-between">
            <Link href="/">
                <h1 className="nav-header terminal-text text-xl font-datatype font-bold-lg antialiased">
                    Sk Zubair Ahmed
                </h1>
            </Link>
            
            <div className="nav-link-group flex flex-row gap-0">
                <div className="font-datatype py-1 px-2 w-fit h-full bg-transparent border-y-0 border terminal-text">
                    <Link href='/'>
                        Home
                    </Link>
                </div>
                <div className="font-datatype py-1 px-2 w-fit h-full bg-transparent border-y-0 terminal-text border border-l-0">
                    <Link href="/projects">
                        Projects
                    </Link>
                </div>
                <div className="font-datatype py-1 px-2 w-fit h-full bg-transparent border-y-0 terminal-text border border-l-0">
                    <Link href="/contact">
                        Contact
                    </Link>
                </div>
            </div>

            {/**<button className="sm:hidden p-1 w-fit h-fit rounded-md border-1 border-terminal-green cursor-pointer hover:box-shadow-emerald-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button> **/}
        </nav>
    )
}