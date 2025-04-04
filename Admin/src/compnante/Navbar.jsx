import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <nav className="navbar " style={{ height: "70px", backgroundColor: "#E9EB77" }} >
            <div className="container-fluid px-5 d-flex justify-content-between">
                <div className="w-25">
                    <Link to="/">
                        <img width="200px" src="../../public/logo.png" alt="" />
                    </Link>
                </div>
                <button className="btn fw-semibold fs-6">Logout</button>
            </div>
        </nav>

    )
}

export default Navbar