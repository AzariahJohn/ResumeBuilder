import React, {useState} from 'react'
import {DataContext} from '../Data'
import { useNavigate } from "react-router-dom";

const SecondStep = () => {
    const [fathersName, setfathersName] = useState("")
    const [MothersName, setMothersName] = useState("")
    const [gitLink, setgitLink] = useState("")
    const [linkedinLink, setlinkedinLink] = useState("")
    const history = useNavigate()

    const { data, setDataAndNext } = React.useContext(DataContext);

    const nextPage = () =>{
        const tempData = {fathersName, MothersName, gitLink, linkedinLink}
        setDataAndNext({...data, tempData})
        history("/third-step")
    }

    const prevPage = () => {
        console.log("StepOne Data")
        console.log(data);
        history("/")
    }

  return (
    <div>
        <input className="form-control" type="text" placeholder="Father's Name" onChange={(e) => {setfathersName(e.target.value)}}></input>
        <input className="form-control" type="text" placeholder="Mother's Name" onChange={(e) => {setMothersName(e.target.value)}}></input>
        <input className="form-control" type="text" placeholder="Github Repo Link" onChange={(e) => {setgitLink(e.target.value)}}></input>
        <input className="form-control" type="text" placeholder="Linkedin User Name" onChange={(e) => {setlinkedinLink(e.target.value)}}></input>
        
        <div>
            <button className="btn m-3 btn-primary" onClick={prevPage}>Previous</button>
            <button className="btn m-3 btn-primary" onClick={nextPage}>Next</button>
        </div>
        
    </div>
  )
}

export default SecondStep