
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { PuplicRequest } from './requestMethod';


function NewParcel() {

  const [inputs, setInputs] = useState({})

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  const handleAddParcel = async () => {

    try {
      await PuplicRequest.post("/parcel", inputs)
      toast.success("Parcel has been successfully saved to dataBase.")
    } catch (error) {
      console.log(error);
      console.log(error.stack);
    

    }

  }

  return (

    <div className="container-fluid p-3 mt-2" style={{ boxSizing: "borderBox", backgroundColor: "whitesmoke", overflowX: "hidden" }}>
      <h1 className="p-1 m-2 text-center" style={{ fontSize: "20px" }}>New Parcel</h1>
      <div className="row d-flex flex-wrap w-100 ">
        <div className="col-12 col-md-6 col-lg-4 p-2">
          <div className="d-flex flex-column my-2">
            <label>From</label>
            <input type="text" className="form-control p-2" name='from' onChange={handleChange} placeholder="Ontario, USA" />
          </div>

          <div className="d-flex flex-column my-2">
            <label>To</label>
            <input type="text" className="form-control p-2" name='to' onChange={handleChange} placeholder="San Diego, USA" />
          </div>

          <div className="d-flex flex-column my-2">
            <label>Sender Name</label>
            <input type="text" className="form-control p-2" name='senderName' onChange={handleChange} placeholder="John Doe" />
          </div>

          <div className="d-flex flex-column my-2">
            <label>Recipient Name</label>
            <input type="text" className="form-control p-2" name='recipientName' onChange={handleChange} placeholder="Mary Doe" />
          </div>

          <div className="d-flex flex-column my-2">
            <label>Sender Email</label>
            <input type="email" name='senderEmail' onChange={handleChange} className="form-control p-2" placeholder="joan@gmail.com" />
          </div>

          <div className="d-flex flex-column my-2">
            <label>Recipient Email</label>
            <input type="email" name='recipientEmail' onChange={handleChange} className="form-control p-2" placeholder="mary@gmail.com" />
          </div>
        </div>


        <div className="col-12 col-md-6 col-lg-4 p-2">
          <div className="d-flex flex-column my-2">
            <label>Weight</label>
            <input type="number" name='weight' onChange={handleChange} className="form-control p-2" placeholder="200g" />
          </div>

          <div className="d-flex flex-column my-2">
            <label>Cost</label>
            <input type="number" name='cost' onChange={handleChange} className="form-control p-2" placeholder="$50" />
          </div>

          <div className="d-flex flex-column my-2">
            <label>Date</label>
            <input type="date" name='date' onChange={handleChange} className="form-control p-2" />
          </div>

          <div className="d-flex flex-column my-2">
            <label>Note</label>
            <textarea className="form-control p-2" name='note' onChange={handleChange} placeholder="Note about the parcel"></textarea>
          </div>

          <button className="btn btn-primary w-100 my-2" onClick={handleAddParcel}>Create</button>
          <ToastContainer />
        </div>
      </div>
    </div>




  )
}

export default NewParcel