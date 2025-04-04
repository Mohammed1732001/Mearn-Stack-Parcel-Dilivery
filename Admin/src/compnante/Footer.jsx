

function Footer() {
  return (
    <div className="  px-5 container-fluid d-flex align-items-center justify-content-between" style={{ height: "60px", backgroundColor: "#E9EB77" }}>
      
      <div className="w-25">
      <img width={"200px"} src="../../public/logo.png" alt="" />
        
      </div>
      <ul className="mt-3 " style={{ listStyle: "none" }} >
        <li>Admin</li>
        <li>&with OSOS</li>
      </ul>
    </div>
  )
}

export default Footer