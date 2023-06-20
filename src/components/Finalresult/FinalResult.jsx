import React from 'react'
import { useNavigate } from 'react-router-dom'

const FinalResult = () => {

    const history = useNavigate();

    const edit = () => {
        history("/edit")
    }

    const print = () => {

    }

  return (
    <div>
        My Resume

        <button className="btn m-3 btn-primary" onClick={edit}>Edit</button>
        <button className="btn m-3 btn-primary" onClick={print}>Print</button>
    </div>
  )
}

export default FinalResult