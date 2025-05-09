import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {
  const [input, setInput] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    const obj = {
      ...input,
      [name]: value
    }
    setInput(obj)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  }



  return (
    <>
      <div className="container">
        <h1>Form</h1>
        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" value={input.email} className="form-label">Email address</label>


            <input type="email" name="userEmail" onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />


            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" value={input.password} className="form-label">Password</label>


            <input type="password" name="userPassword" onChange={handleChange} className="form-control" id="exampleInputPassword1" />


          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>


    </>
  )
}

export default App
