import { useEffect, useRef, useState } from "react"
import "./Style.css"
interface params {
    style?:string
    className?: string
}

export const List : Array<String | null> = [];

export const Input: React.FC<params> = (props) => {
    const {className} = props

    const InputResult = useRef<HTMLInputElement | null>(null);
    const [info,setInfo] = useState<String | null>(null);
    const HandleOnSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        if(InputResult.current?.value != undefined){
            setInfo(InputResult.current?.value)
        }
        List.push(info)
    }
    return (
        <div className={`${className} container border`} id="inputContainer">
            <div>
                <h1>TO DO LIST</h1>
            </div>
            <h3>Add to list!</h3>
            <hr/>
                    <form onSubmit={HandleOnSubmit}>
                        <div className="form-group">
                        <label >Title</label>
                        <input type="text" className="form-control" 
                        placeholder="Title" ref={InputResult}/>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" htmlFor="inputGroupSelect01">State</label>
                        </div>
                        <select className="custom-select" id="inputGroupSelect01">
                            <option value="1">To do</option>
                            <option value="2">Doing</option>
                            <option value="3">Done</option>
                        </select>
                    </div>
                    <button className="btn btn-warning" type="submit">Add</button>
            </form>
                </div>
    )
}