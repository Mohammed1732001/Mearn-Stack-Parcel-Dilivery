import NavBar from "../components/NavBar.jsx"
import Footer from "../components/Footer.jsx"
import { useState } from "react"

function Login() {

  const [showPassword, setShowPassword] = useState(false)
  const handleTogglePassword = () => {
    setShowPassword(!showPassword)
  }
  return (
    <>
      <NavBar />
      <div
        className="d-flex justify-content-evenly align-items-center p-5 flex-column-reverse flex-lg-row"
        style={{ height: "90.5vh", color: "gray" }}
      >
        <div className="text-center text-lg-start">
          <img
            src="../../public/hero.png"
            alt="Hero"
            className="img-fluid"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
        <div
          className="d-flex flex-column justify-content-center align-items-center"
          style={{width: "100%",maxWidth: "450px",backgroundColor: "#E9EB77",borderRadius: "15px",padding: "30px 20px"}}>
        
          <input
            type="text"
            placeholder="Enter your email"
            className="p-3 mb-3 w-100"
            style={{
              borderRadius: "5px",
              border: "1px solid #ddd",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            }}
          />
          <div className="position-relative w-100 mb-3">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="p-3 w-100"
              style={{
                borderRadius: "5px",
                border: "1px solid #ddd",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
              }}
            />
            <span
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                fontSize: "18px",
              }}
              onClick={handleTogglePassword}
            >
              {showPassword ? "👁️" : "🔒"}
            </span>
          </div>
          <button
            className="btn btn-dark w-100 p-3 mt-3"style={{borderRadius: "5px",backgroundColor: "#333",color: "white",}} >
            Login
          </button>
        </div>
      </div>


      <Footer />
    </>
  )
}

export default Login