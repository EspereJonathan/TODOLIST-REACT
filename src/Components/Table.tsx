import { useRef, useState } from "react"
import { List } from "./Input"
type Props = {
    titre:string,
    className?:string
    id?: number,
    Tittle?:string,
    Description?:string

}

export const Table : React.FC<Props> = (props) =>{
    const {titre,id,Tittle,Description,className} = props
    
    
    return(
            List.length === 0 ? (
                <div className={`${className} container`} id="list">
                    <h1>{titre}</h1>
                    <table className="table table-dark">
                        <thead>
                            <tr>
                                <th scope="col">Title</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>empty......</tr>
                            <tr>empty......</tr>
                        </tbody>
                    </table>
                </div>
            ) : <div className={`${className} container`} id="list">
                <h1>{titre}</h1>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {List.map(list => (
                            <tr>{list}</tr>
                        ))}
                    </tbody>
                </table>
            </div>
    )
}