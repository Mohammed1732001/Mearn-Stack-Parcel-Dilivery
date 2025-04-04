import { HiArrowNarrowUp, HiArrowDown } from "react-icons/hi";
import { PieChart } from '@mui/x-charts/PieChart';

function Home() {
  return (
    <div>
      <div class="row mx-auto mt-1 row-cols-1 row-cols-md-3 g-4">
        <div class="col ">
          <div class="card h-100 shadow-lg rounded " style={{ backgroundColor: "#242424", color: "white" }}>
            <div class="card-body text-center">
              <h5 class="card-title">Users</h5>
              <HiArrowNarrowUp style={{ color: "green" }} />
              <HiArrowDown style={{ color: "red" }} />

              <p style={{ fontWeight: "18px", marginTop: "10px" }}>200</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 shadow-lg rounded" style={{ backgroundColor: "#242424", color: "white" }}>
            <div class="card-body text-center">
              <h5 class="card-title">Delivered Parcels</h5>
              <HiArrowNarrowUp style={{ color: "green" }} />
              <HiArrowDown style={{ color: "red" }} />
              <p style={{ fontWeight: "18px", marginTop: "10px" }}>2000</p>
            </div>
          </div>
        </div><div class="col">
          <div class="card h-100 shadow-lg rounded" style={{ backgroundColor: "#242424", color: "white" }}>
            <div class="card-body text-center">
              <h5 class="card-title">Pending Parcel</h5>
              <HiArrowNarrowUp style={{ color: "green" }} />
              <HiArrowDown style={{ color: "red" }} />
              <p style={{ fontWeight: "18px", marginTop: "10px" }}>100</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="d-flex justify-content-between ">
        <div className="w-50 mt-3 shadow-lg rounded" style={{ width: "400px", height: "300px" }}>
          <PieChart
            series={[
              {
                data: [{ id: 0, value: 10, label: 'series A' },
                { id: 1, value: 15, label: 'series B' },
                { id: 2, value: 20, label: 'series C' },],
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
        <div className="shadow-lg rounded mt-3 w-25 " >
          <h3 className=" p-2 text-light ">Recent Users</h3>
          <ol>
            <li className=" text-light"> joneea deeb</li>
            <li className=" text-light"> mickel deeb</li>
          </ol>
        </div>
      </div>



    </div>
  )
}

export default Home