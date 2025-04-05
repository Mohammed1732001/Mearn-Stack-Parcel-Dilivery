import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <nav className="navbar" style={{ height: "70px", backgroundColor: "#E9EB77" }}>
            <div className="container-fluid px-3 d-flex flex-wrap justify-content-between align-items-center">
                <div className="d-flex align-items-center" style={{ maxWidth: "200px" }}>
                    <Link to="/">
                        <img src="../../public/logo.png" alt="Logo" style={{ width: "100%", maxWidth: "150px", height: "auto" }} />
                    </Link>
                </div>
                <button className="btn fw-semibold fs-6 mt-2 mt-sm-0">Logout</button>
            </div>
        </nav>
    )
}

export default Navbar