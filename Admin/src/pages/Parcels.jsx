import { DataGrid, } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa"
import { FiEdit } from "react-icons/fi";
function Parcels() {

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "senderName", headerName: "Sender Name", width: 150 },
    { field: "recipientName", headerName: "Recipient Name", width: 150 },
    { field: "from", headerName: "From", width: 120 },
    { field: "to", headerName: "To", width: 120 },
    { field: "cost", headerName: "Cost ($)", type: "number", width: 50 },
    {
      field: "edit", headerName: "Edit", width: 130,
      renderCell: (params) => {
        return (
          <button className='btn btn-primary'>
            Edit <FiEdit style={{ color: "white", marginLeft: "3px" }} />
          </button>
        );
      }
    },
    {
      field: "delete", headerName: "Delete", width: 130,
      renderCell: (params) => {
        return (
          <button className='btn btn-danger'>
            Delete <FaTrash style={{ color: "white", marginLeft: "3px" }} />
          </button>
        );
      }
    },
  ];
  
  const rows = [
    { id: 1, senderName: "John Doe", recipientName: "Jane Doe", from: "New York", to: "Los Angeles", weight: 2.5, cost: 15.0 },
    { id: 2, senderName: "Alice Brown", recipientName: "Mike Smith", from: "Chicago", to: "Houston", weight: 3.0, cost: 18.0 },
    { id: 3, senderName: "Chris Evans", recipientName: "Robert Downey", from: "San Francisco", to: "Miami", weight: 1.8, cost: 12.5 },
    { id: 4, senderName: "Laura Wilson", recipientName: "Emily Davis", from: "Seattle", to: "Denver", weight: 2.2, cost: 14.0 },
    { id: 5, senderName: "Peter Parker", recipientName: "Mary Jane", from: "Queens", to: "Brooklyn", weight: 2.0, cost: 10.0 },
    { id: 6, senderName: "Tony Stark", recipientName: "Pepper Potts", from: "Malibu", to: "New York", weight: 4.5, cost: 25.0 },
    { id: 7, senderName: "Bruce Wayne", recipientName: "Alfred Pennyworth", from: "Gotham", to: "Metropolis", weight: 5.0, cost: 30.0 },
    { id: 8, senderName: "Diana Prince", recipientName: "Steve Trevor", from: "Themyscira", to: "Washington", weight: 3.8, cost: 22.0 },
    { id: 9, senderName: "Natasha Romanoff", recipientName: "Clint Barton", from: "Moscow", to: "New York", weight: 2.9, cost: 16.0 },
    { id: 10, senderName: "Scott Lang", recipientName: "Hope Van Dyne", from: "San Francisco", to: "Atlanta", weight: 3.3, cost: 19.0 },
  ];
  
  return (
    <div className="container-fluid p-3" style={{ backgroundColor: "whitesmoke" }}>
      <div className="d-flex justify-content-between">
        <h1 className="p-1 m-2" style={{ fontSize: "20px" }}>All Parcels</h1>
        <Link to="/NewParcel">
          <button className="p-2 btn btn-dark m-2">New Parcel</button>
        </Link>
      </div>
  
      <div style={{ width: '100%' }}>
        <DataGrid rows={rows} columns={columns} checkboxSelection />
      </div>
    </div>
  );
  


}

export default Parcels