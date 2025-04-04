import { DataGrid, } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa"
import { FiEdit } from "react-icons/fi";
function Users() {
  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "fullName", headerName: "Full Name", width: 100 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "age", headerName: "Age", type: "number", width: 80},
    { field: "address", headerName: "Address", width: 200 },
    {
      field: "edit", headerName: "Edit", width: 120,
      renderCell: (params) => {
        return (
          <>
            <button className='btn btn-primary'>Edit <FiEdit style={{ color: "white", marginLeft: "3px" }} /> </button>
          </>
        )
      }
    },
    {
      field: "delete", headerName: "Delete", width: 120,
      renderCell: (params) => {
        return (
          <>
            <button className='btn btn-danger'>Delete <FaTrash style={{ color: "white", marginLeft: "3px" }} /></button>
          </>
        )
      }
    },
  ];
  
  const rows = [
    { id: 1, fullName: "John Doe", email: "john.doe@example.com", age: 30, country: "USA", address: "123 Main St, New York" },
    { id: 2, fullName: "Alice Brown", email: "alice.brown@example.com", age: 25, country: "UK", address: "45 Elm St, London" },
    { id: 3, fullName: "Chris Evans", email: "chris.evans@example.com", age: 40, country: "Canada", address: "78 Maple St, Toronto" },
    { id: 4, fullName: "Laura Wilson", email: "laura.wilson@example.com", age: 28, country: "Germany", address: "56 Birch St, Berlin" },
    { id: 5, fullName: "Peter Parker", email: "peter.parker@example.com", age: 22, country: "USA", address: "99 Spider St, Queens" },
    { id: 6, fullName: "Tony Stark", email: "tony.stark@example.com", age: 45, country: "USA", address: "Stark Tower, New York" },
    { id: 7, fullName: "Bruce Wayne", email: "bruce.wayne@example.com", age: 38, country: "USA", address: "Wayne Manor, Gotham" },
    { id: 8, fullName: "Diana Prince", email: "diana.prince@example.com", age: 32, country: "Greece", address: "Themyscira" },
    { id: 9, fullName: "Natasha Romanoff", email: "natasha.romanoff@example.com", age: 35, country: "Russia", address: "Unknown" },
  ];
  


  return (
    <div className="m-2 p-3 " style={{ backgroundColor: "whitesmoke" }}>
      <div className="d-flex justify-content-between">
        <h1 className="p-1 m-2" style={{ fontSize: "20px" }}> All Users </h1>
        <button className="p-2 btn btn-dark m-2" >New User</button>
      </div>


      <DataGrid rows={rows} columns={columns} checkboxSelection />

    </div>
  )
}

export default Users