import Footer from "../compnante/Footer"

function Login() {
  return (
    <div>
      <div className="d-flex justify-content-evenly align-items-center p-5 flex-column-reverse flex-lg-row" style={{ height: "90.5vh", color: "gray" }}>
        <div className="text-center text-lg-start">
          <h2 className="text-secondary fw-semibold" style={{ fontSize: "35px" }}>SendIT Admin</h2>
          <img src="../../public/hero.png" alt="Hero" className="img-fluid" style={{ maxWidth: "100%" }} />
        </div>
        <div style={{ width: "450px", height: "450px", backgroundColor: "#E9EB77", borderRadius: "10px" }}>
          <input type="text" placeholder="Enter your email" className="d-flex items-center justify-center p-2 my-4 w-75 mx-auto" style={{ borderRadius: "5px", border: "none" }} />
          <input type="password" placeholder="Enter your password" className="d-flex items-center justify-center p-2 my-4 w-75 mx-auto" style={{ borderRadius: "5px", border: "none" }} />
          <div className="d-flex justify-content-center align-items-center">
            <button className="btn btn-dark w-75 my-2 p-2 text-center mx-auto">Login</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Login