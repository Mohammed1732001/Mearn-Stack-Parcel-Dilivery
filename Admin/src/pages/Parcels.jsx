import { DataGrid, } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa"
import { FiEdit } from "react-icons/fi";
import { useState, useEffect } from 'react';
import { PuplicRequest } from './requestMethod';
function Parcels() {


  const [data, setData] = useState([]);


  const columns = [
    { field: "_id", headerName: "ID", width: 50 },
    { field: "senderName", headerName: "Sender Name", width: 150 },
    { field: "recipientName", headerName: "Recipient Name", width: 150 },
    { field: "from", headerName: "From", width: 120 },
    { field: "to", headerName: "To", width: 120 },
    { field: "cost", headerName: "Cost ($)", type: "number", width: 50 },
    {
      field: "edit", headerName: "Edit", width: 130,
      renderCell: (params) => {
        console.log(params);
        
        return (
          <Link to={`/parcel/${params.row._id}`}> 
            <button className='btn btn-primary'>
              Edit <FiEdit style={{ color: "white", marginLeft: "3px" }} />
            </button>
          </Link>
        );
      }
    },
    {
      field: "delete", headerName: "Delete", width: 130,
      renderCell: (params) => {
        return (
          <button className='btn btn-danger' onClick={()=>handleDelete(params.row._id)}>
            Delete <FaTrash style={{ color: "white", marginLeft: "3px" }} />
          </button>
        );
      }
    },
  ];

  useEffect(() => {
    const getParcels = async () => {


      try {
        const res = await PuplicRequest.get("/parcel")
        console.log(res);
        // console.log(res.data.parcels);


        setData(res.data)
      } catch (error) {
        console.log(error);

      }
    }


    getParcels()
  }, [])

  const handleDelete = async (id) => {
    try {
      await PuplicRequest.delete(`/parcel/${id}`)
      window.location.reload()
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="container-fluid p-3" style={{ backgroundColor: "whitesmoke" }}>
      <div className="d-flex justify-content-between">
        <h1 className="p-1 m-2" style={{ fontSize: "20px" }}>All Parcels</h1>
        <Link to="/NewParcel">
          <button className="p-2 btn btn-dark m-2">New Parcel</button>
        </Link>
      </div>

      <div style={{ width: '100%' }}>
        <DataGrid
          rows={data.parcels}
          getRowId={(row) => row._id}
          columns={columns} checkboxSelection />
      </div>
    </div>
  );



}

export default Parcels