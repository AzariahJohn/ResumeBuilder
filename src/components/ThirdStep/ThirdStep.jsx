import React from 'react'
import { useNavigate } from "react-router-dom";
import { DataContext } from '../Data';

const ThirdStep = () => {

    const history = useNavigate()
    const { data, setDataAndNext } = React.useContext(DataContext);

    const prev = () => {
        history("/second-step")
    }

    const next = () => {
        history("/final-step")
    }

    const dataReveal = () => {
        console.log(data.newData.tempData.fathersName)
    }

  return (
    <div>
        <div>
            <button className="btn m-3 btn-primary" onClick={prev}>Previous</button>
            <button className="btn m-3 btn-primary" onClick={dataReveal}>Data Reveal</button>
        </div>
    </div>
    
  )
}

export default ThirdStep