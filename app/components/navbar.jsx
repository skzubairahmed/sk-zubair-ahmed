import Link from "next/link"

export default function Navbar({activePage}){
    return(
        <nav className="container-fluid w-screen flex flex-row flex-wrap p-3 bg-black border-b border-slate-500 items-center justify-between">
            <Link className="relative group" href="/">
                <h1 className="nav-header terminal-text text-xl font-datatype font-bold-lg antialiased">
                    Sk Zubair Ahmed
                </h1>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4ade80] transition-all group-hover:w-full" />
            </Link>
            
            <div className="nav-link-group flex flex-row gap-6">
                <div className="relative group font-datatype p-0 w-fit h-full bg-transparent terminal-text">
                    <Link href='/'>
                        Home
                    </Link>
                    <span className={`absolute -bottom-1 left-0 ${activePage === 'home' ? 'w-full h-0.5 bg-[#4ade80]' : 'w-0 h-0.5 bg-[#4ade80] transition-all group-hover:w-full'}`} />
                </div>
                <div className="relative group font-datatype p-0 w-fit h-full bg-transparent terminal-text">
                    <Link href="/projects">
                        Projects
                    </Link>
                    <span className={`absolute -bottom-1 left-0 ${activePage === 'projects' ? 'w-full h-0.5 bg-[#4ade80]' : 'w-0 h-0.5 bg-[#4ade80] transition-all group-hover:w-full'}`} />
                </div>
                <div className="relative group font-datatype p-0 w-fit h-full bg-transparent terminal-text">
                    <Link href="/contact">
                        Contact
                    </Link>
                    <span className={`absolute -bottom-1 left-0 ${activePage === 'contact' ? 'w-full h-0.5 bg-[#4ade80]' : 'w-0 h-0.5 bg-[#4ade80] transition-all group-hover:w-full'}`} />
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