import { HiArrowNarrowUp, HiArrowDown } from "react-icons/hi";
import { PieChart } from '@mui/x-charts/PieChart';

function Home() {
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
          <p style={{ fontSize: "18px", marginTop: "10px" }}>200</p>
        </div>
      </div>
    </div>

    <div className="col">
      <div className="card h-100 shadow-lg rounded" style={{ backgroundColor: "#242424", color: "white" }}>
        <div className="card-body text-center">
          <h5 className="card-title">Delivered Parcels</h5>
          <HiArrowNarrowUp style={{ color: "green" }} />
          <HiArrowDown style={{ color: "red" }} />
          <p style={{ fontSize: "18px", marginTop: "10px" }}>2000</p>
        </div>
      </div>
    </div>

    <div className="col">
      <div className="card h-100 shadow-lg rounded" style={{ backgroundColor: "#242424", color: "white" }}>
        <div className="card-body text-center">
          <h5 className="card-title">Pending Parcel</h5>
          <HiArrowNarrowUp style={{ color: "green" }} />
          <HiArrowDown style={{ color: "red" }} />
          <p style={{ fontSize: "18px", marginTop: "10px" }}>100</p>
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
              { id: 0, value: 10, label: 'Pending Parcels' },
              { id: 1, value: 15, label: 'Delivered Parcels' },
              { id: 2, value: 2, label: 'Rejected Parcels' },
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