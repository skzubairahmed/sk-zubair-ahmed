export default function AlertBox({header, content}){
    return(
        <div className="alert-box bg-slate-950 p-0 rounded-lg h-fit w-90 terminal-text flex flex-col gap-2 border-1 border-slate-500">
            <div className="border-x-0 border-t-0 border-1 border-slate-500 p-2">
                <h1 className="text-xl font-datatype">
                    {header}
                </h1>
            </div>
            <div className="p-2 text-md text-wrap">
                <p className="font-datatype" style={{whiteSpace:'pre-wrap'}}>
                    {content}
                </p>
            </div>
        </div>
    )
}