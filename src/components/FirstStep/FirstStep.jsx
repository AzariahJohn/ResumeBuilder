import React, {useState} from 'react'
import {DataContext} from '../Data'
import { useNavigate } from 'react-router-dom'

const FirstStep = () => {

    const [firstName, setFirstName] = useState("")
    const [secondName, setSecondName] = useState("")
    const [emailAddress, setEmailAddress] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const history = useNavigate()

    const { data, setDataAndNext } = React.useContext(DataContext);

    const nextPage = () =>{
        const tempData = {firstName, secondName, emailAddress, phoneNumber}
        setDataAndNext({...data, tempData})
        history("/second-step")
    }

  return (
    <div>
        <input className="form-control" type="text" placeholder="First Name" onChange={(e) => {setFirstName(e.target.value)}}></input>
        <input className="form-control" type="text" placeholder="Second Name" onChange={(e) => {setSecondName(e.target.value)}}></input>
        <input className="form-control" type="text" placeholder="Email Address" onChange={(e) => {setEmailAddress(e.target.value)}}></input>
        <input className="form-control" type="text" placeholder="Phone Number" onChange={(e) => {setPhoneNumber(e.target.value)}}></input>
        
        <div>
            <button className="btn m-3 btn-primary" onClick={nextPage}>Next</button>
        </div>
        
    </div>
  )
}

export default FirstStep