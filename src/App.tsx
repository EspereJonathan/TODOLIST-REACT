import { useRef, useState } from "react";
import { Input } from "./Components/Input";
import { Table } from "./Components/Table";


const App: React.FC = () => {
    
    


    return (
        <>
            <Input/>
            <div  className="row">
                <Table titre="TODO" className="col-4"/>
                <Table titre="DOING" className="col-4"/>
                <Table titre="DONE" className="col-4"/>
            </div>
        </>
    )
}

export default App;