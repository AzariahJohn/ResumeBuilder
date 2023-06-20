import React from 'react'
import { useNavigate } from 'react-router-dom'

function EditPage() {

    const history = useNavigate();

    const nextPage = () => {
        history("/final-step")
    }

  return (
    <div>EditPage

        <button className="btn m-3 btn-primary" onClick={nextPage}>Next</button>
    </div>
  )
}

export default EditPage