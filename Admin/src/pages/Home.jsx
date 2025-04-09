import { HiArrowNarrowUp, HiArrowDown } from "react-icons/hi";
import { PieChart } from '@mui/x-charts/PieChart';
import { useState } from "react";
import { useEffect } from "react";
import { PuplicRequest } from "./requestMethod";

function Home() {
  const [parcels, setParcels] = useState([])
  const [users, setUsers] = useState([])

  let userCount = users.length
  let deliveredCount = 0
  let pendingCount = 0

  if (Array.isArray(parcels)) {
    deliveredCount = parcels.filter(parcel => parcel.status === 3).length;
    pendingCount = parcels.filter(parcel => parcel.status === 1).length;
  }


  useEffect(() => {
    const getParcel = async () => {
      try {
        const res = await PuplicRequest.get("/parcel")
        setParcels(res.data.parcels)
      } catch (error) {
        console.log(error);
      }
    }

    getParcel()
  }, [])

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await PuplicRequest.get("/user")
        setUsers(res.data.user)
      } catch (error) {
        console.log("User Error:", error)
      }
    }
    getUsers()
  }, [])

  return (
    <div>
      {/* البطاقات */}
      <div className="row mx-auto mt-1 row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100 shadow-lg rounded" style={{ backgroundColor: "#242424", color: "white" }}>
            <div className="card-body text-center">
              <h5 className="card-title">Users</h5>
              <HiArrowNarrowUp style={{ color: "green" }} />
              <HiArrowDown style={{ color: "red" }} />
              <p style={{ fontSize: "18px", marginTop: "10px" }}>{userCount}</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 shadow-lg rounded" style={{ backgroundColor: "#242424", color: "white" }}>
            <div className="card-body text-center">
              <h5 className="card-title">Delivered Parcels</h5>
              <HiArrowNarrowUp style={{ color: "green" }} />
              <HiArrowDown style={{ color: "red" }} />
              <p style={{ fontSize: "18px", marginTop: "10px" }}>{deliveredCount}</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 shadow-lg rounded" style={{ backgroundColor: "#242424", color: "white" }}>
            <div className="card-body text-center">
              <h5 className="card-title">Pending Parcel</h5>
              <HiArrowNarrowUp style={{ color: "green" }} />
              <HiArrowDown style={{ color: "red" }} />
              <p style={{ fontSize: "18px", marginTop: "10px" }}>{pendingCount}</p>
            </div>
          </div>
        </div>
      </div>

      {/* القسم السفلي */}
      <div className="d-flex flex-wrap justify-content-between mt-3 gap-3">
        <div className="shadow-lg rounded" style={{ flex: "1 1 300px", minWidth: "280px", maxWidth: "600px", height: "300px" }}>
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: pendingCount, label: 'Pending Parcels' },
                  { id: 1, value: deliveredCount, label: 'Delivered Parcels' },
                  { id: 2, value: userCount, label: 'Users ' },
                ],
                innerRadius: 30,
                outerRadius: 100,
                paddingAngle: 5,
                cornerRadius: 5,
                startAngle: -45,
                endAngle: 225,
                cx: 150,
                cy: 150,
              }
            ]}
          />
        </div>

        <div className="shadow-lg rounded p-2 text-light" style={{ flex: "1 1 250px", minWidth: "250px", backgroundColor: "#242424" }}>
          <h4>Recent Users</h4>
          <ol>
            <li>joneea deeb</li>
            <li>mickel deeb</li>
          </ol>
        </div>
      </div>
    </div>

  )
}

export default Home