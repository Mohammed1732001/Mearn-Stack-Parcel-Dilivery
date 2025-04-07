
function NewUser() {
  return (
    <div className="container-fluid " style={{ backgroundColor: "whitesmoke" }}>
      <h1 className="p-1 m-2" style={{ fontSize: "20px" }}>New User</h1>

      <div className="d-flex flex-column my-2">
        <label htmlFor="">Full Name</label>
        <input type="text" className="form-control col-12 col-md-6 p-2" placeholder="James Doe" />
      </div>

      <div className="d-flex flex-column my-2">
        <label htmlFor="">Email</label>
        <input type="email" className="form-control col-12 col-md-6 p-2" placeholder="JamesDoe@gmail.com" />
      </div>

      <div className="d-flex flex-column my-2">
        <label htmlFor="">Age</label>
        <input type="number" className="form-control col-12 col-md-6 p-2" placeholder="20" />
      </div>

      <div className="d-flex flex-column my-2">
        <label htmlFor="">Country</label>
        <input type="text" className="form-control col-12 col-md-6 p-2" placeholder="California" />
      </div>

      <div className="d-flex flex-column my-2">
        <label htmlFor="">Address</label>
        <input type="text" className="form-control col-12 col-md-6 p-2" placeholder="Lura Ave, California" />
      </div>

      <button className="btn btn-primary col-12 col-md-6 my-2">Create</button>
    </div>

  )
}

export default NewUser