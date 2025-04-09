import { useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { PuplicRequest } from '../requsetMethod';
import { logOut } from '../redux/userRedux';
import { jwtDecode } from "jwt-decode";


const MyParcels = () => {
  const [open, setOpen] = useState(false);
  const [parcels, setParcels] = useState([]);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  console.log(user);
  const token = user.currentUser.token
  console.log(token);
  
  const decoded = jwtDecode(token)
console.log(decoded);

  const dispatch = useDispatch();

  // فك تشفير التوكن واستخراج البريد الإلكتروني للمستخدم
  
  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const getParcels = async () => {
      const email = decoded.email; // استخراج البريد الإلكتروني من التوكن
      if (email) {
        try {
          const res = await PuplicRequest.post("/parcel/me", {
            email: email, // إرسال البريد الإلكتروني
          });

          setParcels(res.data.parcels); // تعيين البيانات للـ state
        } catch (error) {
          console.log(error);
        }
      }
    };

    getParcels();
  }, []); // أضفنا تعيين empty dependency array لأننا لا نحتاج إلى تكرار الاستعلام بعد التوكن

  const Logout = () => {
    dispatch(logOut());
    localStorage.removeItem("token"); // إزالة التوكن من localStorage عند تسجيل الخروج
    navigate("/login");
  };

  return (
    <div>
      <div className="d-flex justify-content-end align-items-center mt-3 position-relative" style={{ cursor: "pointer" }}>
        <div className="text-light" onClick={handleOpen} style={{ fontSize: "18px", fontWeight: "600" }}>
          <FaUser className="me-2" /> {decoded.FullName || "Loading..."}
        </div>

        {open && (
          <div
            className="position-absolute shadow-lg rounded-3 p-3"
            style={{
              top: "25px",
              right: "0",
              width: "250px",
              backgroundColor: "#f8f9fa",
              zIndex: "999",
              boxShadow: "0px 10px 15px rgba(0,0,0,0.1)",
            }}
          >
            <ul className="list-unstyled m-0">
              <Link to="/allparcels">
                <li className="my-2 element text-center p-2 rounded" style={{ cursor: "pointer", transition: "background-color 0.3s ease, color 0.3s ease" }}>
                  All Parcels
                </li>
              </Link>
              <li className="my-2 element text-center p-2 rounded" style={{ cursor: "pointer", transition: "background-color 0.3s ease, color 0.3s ease" }}>
                Statement
              </li>
              <li className="my-2 element text-center p-2 rounded" onClick={Logout} style={{ cursor: "pointer", transition: "background-color 0.3s ease, color 0.3s ease" }}>
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className="container mt-4">
        <h2 className="text-white" style={{ fontSize: "25px", fontWeight: "600" }}>My Parcels</h2>

        {/* Parcel Item */}
        {parcels.map((parcel, index) => {
          const formattedDate = new Date(parcel.date).toLocaleDateString("en-GB");  // تنسيق اليوم/شهر/سنة

          return (
            <Link to={`parcel/${parcel._id}`} style={{textDecoration:"none"}} key={index}>
              <div className="d-flex flex-column flex-md-row justify-content-between bg-light mb-3 p-3 rounded-3 shadow-sm">
                <div className="flex-grow-1">
                  <ul>
                    <li>From: {parcel.from}</li>
                    <li>Weight: {parcel.weight + "g"}</li>
                    <li>Date: {formattedDate}</li> {/* التاريخ منسق هنا */}
                    <li>Sender: {parcel.senderName}</li>
                  </ul>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <span>To: {parcel.to}</span>
                  <button className={parcel.status === 1 ? "btn btn-dark mt-2" : "btn btn-success mt-2"}>
                    {parcel.status === 1 ? "Pending" : "Delivered"}
                  </button>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MyParcels;
















































































































































































// import { useEffect, useState } from 'react';
// import { FaUser } from 'react-icons/fa';
// import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from "react-redux";
// import { PuplicRequest } from '../requsetMethod';
// import { logOut } from '../redux/userRedux';

// const MyParcels = () => {
//   const [open, setOpen] = useState(false);
//   const [parcels, setParcels] = useState([]);
//   const navigate = useNavigate();
//   const user = useSelector((state) => state.user);
//   console.log(user);
  
//   const dispatch = useDispatch();

//   const handleOpen = () => {
//     setOpen(!open);
//   };

//   useEffect(() => {
//     const getParcels = async () => {
//       try {
//         const res = await PuplicRequest.post("/parcel/me", {
//           email: user.currentUser.email  // إرسال البريد الإلكتروني
//         });

//         setParcels(res.data.parcels);  // تعيين البيانات للـ state
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     if (user?.currentUser?.email) {
//       getParcels();  // فقط قم بالاستعلام إذا كان المستخدم مسجلاً
//     }
//   }, [user?.currentUser?.email]);  // إضافة dependecy على البريد الإلكتروني للمستخدم

//   const Logout = () => {
//     dispatch(logOut());
//     navigate("/login");
//   };

//   return (
//     <div>
//       <div className="d-flex justify-content-end align-items-center mt-3 position-relative" style={{ cursor: "pointer" }}>
//         <div className="text-light" onClick={handleOpen} style={{ fontSize: "18px", fontWeight: "600" }}>
//           <FaUser className="me-2" /> {user?.currentUser?.fullName || "Loading..."}
//         </div>

//         {open && (
//           <div
//             className="position-absolute shadow-lg rounded-3 p-3"
//             style={{
//               top: "25px",
//               right: "0",
//               width: "250px",
//               backgroundColor: "#f8f9fa",
//               zIndex: "999",
//               boxShadow: "0px 10px 15px rgba(0,0,0,0.1)",
//             }}
//           >
//             <ul className="list-unstyled m-0">
//               <Link to="/allparcels">
//                 <li className="my-2 element text-center p-2 rounded" style={{ cursor: "pointer", transition: "background-color 0.3s ease, color 0.3s ease" }}>
//                   All Parcels
//                 </li>
//               </Link>
//               <li className="my-2 element text-center p-2 rounded" style={{ cursor: "pointer", transition: "background-color 0.3s ease, color 0.3s ease" }}>
//                 Statement
//               </li>
//               <li className="my-2 element text-center p-2 rounded" onClick={Logout} style={{ cursor: "pointer", transition: "background-color 0.3s ease, color 0.3s ease" }}>
//                 Logout
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>

//       <div className="container mt-4">
//         <h2 className="text-white" style={{ fontSize: "25px", fontWeight: "600" }}>My Parcels</h2>

//         {/* Parcel Item */}
//         {parcels.map((parcel, index) => {
//           const formattedDate = new Date(parcel.date).toLocaleDateString("en-GB");  // تنسيق اليوم/شهر/سنة

//           return (
//             <Link to={`parcel/${parcel._id}`} key={index}>
//               <div className="d-flex flex-column flex-md-row justify-content-between bg-light mb-3 p-3 rounded-3 shadow-sm">
//                 <div className="flex-grow-1">
//                   <ul>
//                     <li>From: {parcel.from}</li>
//                     <li>Weight: {parcel.weight + "g"}</li>
//                     <li>Date: {formattedDate}</li> {/* التاريخ منسق هنا */}
//                     <li>Sender: {parcel.senderName}</li>
//                   </ul>
//                 </div>
//                 <div className="d-flex flex-column align-items-center">
//                   <span>To: {parcel.to}</span>
//                   <button className={parcel.status === 1 ? "btn btn-dark mt-2" : "btn btn-success mt-2"}>
//                     {parcel.status === 1 ? "Pending" : "Delivered"}
//                   </button>
//                 </div>
//               </div>
//             </Link>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default MyParcels;

























// import { useEffect, useState } from 'react';
// import { FaUser } from 'react-icons/fa';
// import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from "react-redux"
// import { PuplicRequest } from '../requsetMethod';
// import { logOut } from '../redux/userRedux';


// const MyParcels = () => {
//   const [open, setOpen] = useState(false);
//   const [parcels, setParcels] = useState([])
//   const navigate = useNavigate()
//   const user = useSelector((state) => state.user)
//   const dispatch = useDispatch()
//   const handleOpen = () => {
//     setOpen(!open);
//   }

//   useEffect(() => {
//     const getParcels = async () => {
//       try {
//         const res = await PuplicRequest.post("/parcel/me")
//         email: user.currentUser.email

//         // console.log(res.data.parcels);

//         setParcels(res.data.parcels)
//       } catch (error) {
//         // console.log(error);

//       }
//     }

//     getParcels()


//   }, [])

//   console.log(parcels);

//   const Logout = () => {
//     dispatch(logOut())
//     navigate("/login")
//   }

//   return (
//     <div>
//       <div className="d-flex justify-content-end align-items-center mt-3 position-relative" style={{ cursor: "pointer" }}>
//         <div className="text-light" onClick={handleOpen} style={{ fontSize: "18px", fontWeight: "600" }}>
//           <FaUser className="me-2" /> Mohamed Osama
//         </div>

//         {open && (
//           <div
//             className="position-absolute shadow-lg rounded-3 p-3"
//             style={{
//               top: "25px",
//               right: "0",
//               width: "250px",
//               backgroundColor: "#f8f9fa",
//               zIndex: "999",
//               boxShadow: "0px 10px 15px rgba(0,0,0,0.1)",
//             }}
//           >
//             <ul className="list-unstyled m-0">
//               <Link to="/allparcels">
//                 <li className="my-2 element text-center p-2 rounded" style={{ cursor: "pointer", transition: "background-color 0.3s ease, color 0.3s ease" }}>
//                   All Parcels
//                 </li>
//               </Link>
//               <li className="my-2 element text-center p-2 rounded" style={{ cursor: "pointer", transition: "background-color 0.3s ease, color 0.3s ease" }}>
//                 Statement
//               </li>
//               <li className="my-2 element text-center p-2 rounded" onClick={Logout} style={{ cursor: "pointer", transition: "background-color 0.3s ease, color 0.3s ease" }}>
//                 Logout
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>

//       <div className="container mt-4">
//         <h2 className="text-white" style={{ fontSize: "25px", fontWeight: "600" }}>My Parcels</h2>

//         {/* Parcel Item */}
//         {parcels.map((parcel, index) => {
//           const formattedDate = new Date(parcel.date).toLocaleDateString("en-GB"); // تنسيق اليوم/شهر/سنة

//           return (
//             <Link to={`parcel/${parcel._id}`} key={index}>


//               <div className="d-flex flex-column flex-md-row justify-content-between bg-light mb-3 p-3 rounded-3 shadow-sm">
//                 <div className="flex-grow-1">
//                   <ul>
//                     <li>From: {parcel.from} </li>
//                     <li>Weight: {parcel.weight + "g"}</li>
//                     <li>Date: {formattedDate}</li> {/* التاريخ منسق هنا */}
//                     <li>Sender: {parcel.senderName}</li>
//                   </ul>
//                 </div>
//                 <div className="d-flex flex-column align-items-center">
//                   <span>To: {parcel.to} </span>
//                   <button className={parcel.status === 1 ? "btn btn-dark mt-2" : "btn btn-success mt-2"}>
//                     {parcel.status === 1 ? "pending " : "Delliverd"}
//                   </button>
//                 </div>
//               </div>


//             </Link>
//           );
//         })}

//       </div>
//     </div>

//   )
// };


// export default MyParcels;