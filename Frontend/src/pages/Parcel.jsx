import {
  BsGeoAltFill, BsBoxSeam, BsCalendar3, BsPersonFill, BsCurrencyDollar, BsPersonCheckFill,
  BsHash, BsSticky, BsEnvelopeFill, BsEnvelopeOpenFill, BsClockHistory, BsSend, BsArrowLeft
} from "react-icons/bs";
import { Link } from "react-router-dom"
function Parcel() {
  return (
    <div className="container my-5">
      <div className="bg-white rounded-4 shadow p-4">
        <Link to="/allparcels" className="text-decoration-none mb-3 d-inline-block">
          <BsArrowLeft className="text-dark fs-4" />
        </Link>

        <div className="row gy-4">
          {/* العمود الأيسر */}
          <div className="col-12 col-lg-6">
            <ul className="list-unstyled">
              <li className="fw-bold mb-3">
                <BsGeoAltFill className="me-2 text-primary" />
                From: <span className="text-secondary">101ekekoev, USA</span>
              </li>
              <li className="fw-bold mb-3">
                <BsBoxSeam className="me-2 text-success" />
                Weight: <span className="text-secondary">200kg</span>
              </li>
              <li className="fw-bold mb-3">
                <BsCalendar3 className="me-2 text-info" />
                Date: <span className="text-secondary">17/3/2025</span>
              </li>
              <li className="fw-bold mb-3">
                <BsPersonFill className="me-2 text-dark" />
                Sender: <span className="text-secondary">John Doe</span>
              </li>
              <li className="fw-bold mb-3">
                <BsGeoAltFill className="me-2 text-primary" />
                To: <span className="text-secondary">10skkddmd, USA</span>
              </li>
              <li className="fw-bold mb-3">
                <BsCurrencyDollar className="me-2 text-warning" />
                Cost: <span className="text-secondary">$200</span>
              </li>
              <li className="fw-bold mb-3">
                <BsPersonCheckFill className="me-2 text-dark" />
                Recipient: <span className="text-secondary">Maickel Doe</span>
              </li>
              <li className="fw-bold mb-3">
                <BsHash className="me-2 text-muted" />
                Track ID: <span className="text-secondary">544954/55</span>
              </li>
              <li className="fw-bold mb-3">
                <BsSticky className="me-2 text-danger" />
                Note: <span className="fw-normal text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
              </li>
            </ul>
            <button className="btn btn-dark mt-2">
              <BsClockHistory className="me-1" />
              Pending
            </button>
          </div>

          {/* العمود الأيمن */}
          <div className="col-12 col-lg-6">
            <ul className="list-unstyled">
              <li className="fw-bold mb-3">
                <BsEnvelopeFill className="me-2 text-primary" />
                Sender Email: <span className="text-secondary">osos@gmail.com</span>
              </li>
              <li className="fw-bold mb-3">
                <BsEnvelopeOpenFill className="me-2 text-success" />
                Recipient Email: <span className="text-secondary">Mohammed@gmail.com</span>
              </li>
            </ul>

            <div className="mb-3">
              <textarea
                className="form-control"
                rows="6"
                placeholder="Leave a comment"
                style={{ backgroundColor: "whitesmoke" }}
              ></textarea>
            </div>
            <button className="btn btn-primary">
              <BsSend className="me-1" />
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Parcel