import Navbar from "./components/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen bg-black flex flex-col gap-5">
      <Navbar activePage='home'/>

      <div className="p-3 flex flex-row gap-4 flex-wrap">
        <div className="container terminal-text md:w-120 w-screen h-fit border-1">
          <div className="font-datatype py-2 px-5">
            <pre className="font-datatype whitespace-pre-wrap break-words text text-[100px]">{`Sk Zubair\nAhmed`}</pre>
          </div>
        </div>

        <div className="container terminal-text w-fit h-fit border-1">
          <div className="font-datatype flex flex-col">

            <div className="w-full h-fit px-2 py-1">
              <pre className="w-full sm:w-100 h-fit whitespace-pre-wrap break-words font-datatype">
                I am a developer from Odisha, India. I have fun building random projects or by learning a new programming language. And when I'm not doing that I like to sleep and procastinate.
              </pre>
            </div>

            <hr className="bg-[#4ade80]" />

            <div className="w-fit h-fit px-2 py-2 flex flex-col gap-3 flex-wrap">
              <div>
                <Link className="relative group" target="_blank" href="https://github.com/skzubairahmed">
                  <div className="sm:w-99 sm:justify-start justify-center w-70 h-10 border-1 p-3 flex flex-row items-center text-md transition-all group-hover:scale-105">
                    GitHub <p className="sm:flex hidden">(skzubairahmed)</p>
                  </div>
                </Link>
              </div>
              <div>
                <Link className="relative group" target="_blank" href="https://instagram.com/_zubair.jar_">
                  <div className="sm:w-99 sm:justify-start justify-center w-70 h-10 border-1 p-3 flex flex-row items-center text-md transition-all group-hover:scale-105">
                    Instagram <p className="sm:flex hidden">(_zubair.jar_)</p>
                  </div>
                </Link>
              </div>
              <div>
                <Link className="relative group" target="_blank" href="https://youtube.com">
                  <div className="sm:w-99 sm:justify-start justify-center w-70 h-10 border-1 p-3 flex flex-row items-center text-md transition-all group-hover:scale-105">
                    Youtube <p className="sm:flex hidden">(Trevvix)</p>
                  </div>
                </Link>
              </div>
              <div>
                <Link className="relative group" target="_blank" href="mailto:sheikhzubairahmed3949@gmail.com">
                  <div className="sm:w-99 sm:justify-start justify-center w-70 h-10 border-1 p-3 flex flex-row items-center text-md transition-all group-hover:scale-105">
                    Email
                  </div>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
