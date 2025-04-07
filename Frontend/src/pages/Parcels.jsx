import { DataGrid } from '@mui/x-data-grid';
import { FaArrowLeft, FaTrash } from "react-icons/fa"; 
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
function Parcels() {


  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "senderName", headerName: "Sender Name", flex: 1 },
    { field: "recipientName", headerName: "Recipient Name", flex: 1 },
    { field: "from", headerName: "From", flex: 1 },
    { field: "to", headerName: "To", flex: 1 },
    { field: "cost", headerName: "Cost ($)", type: "number", flex: 0.7 },
  ];
  
const rows = [
  { id: 1, senderName: "John Doe", recipientName: "Jane Doe", from: "New York", to: "Los Angeles", cost: 15.0 },
  { id: 2, senderName: "Alice Brown", recipientName: "Mike Smith", from: "Chicago", to: "Houston", cost: 18.0 },
  { id: 3, senderName: "Chris Evans", recipientName: "Robert Downey", from: "San Francisco", to: "Miami", cost: 12.5 },
  { id: 4, senderName: "Laura Wilson", recipientName: "Emily Davis", from: "Seattle", to: "Denver", cost: 14.0 },
  { id: 5, senderName: "Peter Parker", recipientName: "Mary Jane", from: "Queens", to: "Brooklyn", cost: 10.0 },
  { id: 6, senderName: "Tony Stark", recipientName: "Pepper Potts", from: "Malibu", to: "New York", cost: 25.0 },
  { id: 7, senderName: "Bruce Wayne", recipientName: "Alfred Pennyworth", from: "Gotham", to: "Metropolis", cost: 30.0 },
  { id: 8, senderName: "Diana Prince", recipientName: "Steve Trevor", from: "Themyscira", to: "Washington", cost: 22.0 },
  { id: 9, senderName: "Natasha Romanoff", recipientName: "Clint Barton", from: "Moscow", to: "New York", cost: 16.0 },
  { id: 10, senderName: "Scott Lang", recipientName: "Hope Van Dyne", from: "San Francisco", to: "Atlanta", cost: 19.0 },
];




return (
  <div className="container my-4">
    <div className="bg-light p-3 rounded-3 shadow-sm" style={{ maxWidth: "100%", overflowX: "auto" }}>
      <Link to="/Myparcels">
        <FaArrowLeft className="text-dark mb-2" />
      </Link>

      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start mb-3">
        <span style={{ fontSize: "20px", fontWeight: "bold" }}>All Parcels</span>
        <span style={{ fontWeight: "500" }}>Mohammed Osama</span>
      </div>

      <div style={{ height: 400, minWidth: "600px" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </div>
    </div>
  </div>
);
}

export default Parcels