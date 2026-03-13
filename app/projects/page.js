import Navbar from "../components/navbar";
import AlertBox from "../components/alertBox";

export default function ProjectsPage(){
    return(
        <main className="h-screen bg-blac-950 p-0 flex flex-col items-center gap-2">
            <Navbar />
            <AlertBox header="Welcome!" 
            content={underConstructionMessage.message} />
        </main>
    )
}