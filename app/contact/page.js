import Navbar from "../components/navbar";

export default function ContactPage(){
    return(
        <main className="h-screen bg-black-950 p-0 flex flex-col items-center gap-2">
            <Navbar activePage='contact'/>
        </main>
    )
}