import { HiArrowNarrowUp, HiArrowDown, HiUser, HiInbox, HiCheckCircle } from "react-icons/hi";
import { PieChart } from '@mui/x-charts/PieChart';
import { useState, useEffect } from "react";
import { PuplicRequest } from "./requestMethod";

function Home() {
  const [parcels, setParcels] = useState([]);
  const [users, setUsers] = useState([]);
  const [topUsers, setTopUsers] = useState([]);  // لتخزين قائمة المستخدمين الذين لديهم أكثر الطرود الموصلة
  const [loading, setLoading] = useState(true);  // لإدارة حالة التحميل

  // تتبع عدد الطرود الموصلة والمعلقة
  const [deliveredCount, setDeliveredCount] = useState(0);
  const [pendingCount, setPendingCount] = useState(0);

  // تتبع عدد المستخدمين
  const userCount = users.length;

  // تحميل الطرود والمستخدمين
  useEffect(() => {
    const getData = async () => {
      setLoading(true);  // عند بدء تحميل البيانات

      try {
        // تحميل الطرود والمستخدمين في نفس الـ useEffect
        const parcelRes = await PuplicRequest.get("/parcel");
        const userRes = await PuplicRequest.get("/user");

        // تحديد الطرود الموصلة والمعلقة
        const delivered = parcelRes.data.parcels.filter(parcel => parcel.status === 3 || parcel.status === 2).length;
        const pending = parcelRes.data.parcels.filter(parcel => parcel.status === 1 || parcel.status === 0).length;

        setDeliveredCount(delivered);
        setPendingCount(pending);

        setParcels(parcelRes.data.parcels);
        setUsers(userRes.data.user);

        const assignedEmails = parcelRes.data.parcels.map(parcel => parcel.assignedToEmail);

        const emailCounts = assignedEmails.reduce((acc, email) => {
          acc[email] = (acc[email] || 0) + 1;
          return acc;
        }, {});
        
        // ترتيب الإيميلات حسب عدد الطرود
        const emailCountArray = Object.entries(emailCounts);
        emailCountArray.sort((a, b) => b[1] - a[1]);
        const emails = emailCountArray.map(item => item[0]);
        
        // تصفية المستخدمين الذين لديهم أكثر الطرود الموصلة
        const matchedUsers = userRes.data.user.filter(user => emails.includes(user.email));

        // أخذ أفضل 3 مستخدمين
        setTopUsers(matchedUsers.slice(0, 3).map(user => user.fullName));

      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setLoading(false);  // إنهاء حالة التحميل
      }
    };

    getData();
  }, []);

  return (
    <div>
      {/* البطاقات */}
      <div className="row mx-auto mt-1 row-cols-1 row-cols-md-3 g-4">
        <Card 
          title="Users" 
          value={userCount} 
          icon={<HiUser style={{ fontSize: "30px", color: "green" }} />} 
        />
        <Card 
          title="Delivered Parcels" 
          value={deliveredCount} 
          icon={<HiCheckCircle style={{ fontSize: "30px", color: "green" }} />} 
        />
        <Card 
          title="Pending Parcel" 
          value={pendingCount} 
          icon={<HiInbox style={{ fontSize: "30px", color: "orange" }} />} 
        />
      </div>

      {/* القسم السفلي */}
      <div className="d-flex flex-wrap justify-content-between mt-3 gap-3">
        <div className="shadow-lg rounded" style={{ flex: "1 1 300px", minWidth: "280px", maxWidth: "600px", height: "100%" }}>
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
            style={{ width: '100%', height: '300px' }} // تحديد ارتفاع مناسب
          />
        </div>

        <div className="shadow-lg rounded p-2 text-light" style={{ flex: "1 1 250px", minWidth: "250px", backgroundColor: "#242424" }}>
          <h4>Recent Top Users</h4>
          {loading ? <p>Loading...</p> : (
            <ul style={{ paddingLeft: "20px", listStyleType: "none" }}>
              {topUsers.length > 0 ? (
                topUsers.map((user, index) => (
                  <li key={index} style={{ margin: "10px 0", fontSize: "18px", fontWeight: "bold", color: "#00ff99" }}>
                    <HiUser style={{ marginRight: "10px", color: "#00ff99" }} />
                    {user}
                  </li>
                ))
              ) : (
                <p>No top users</p>
              )}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

// مكون Card
const Card = ({ title, value, icon }) => {
  return (
    <div className="col">
      <div className="card h-100 shadow-lg rounded" style={{ backgroundColor: "#242424", color: "white", transition: "0.3s", padding: "15px" }}>
        <div className="card-body text-center">
          <h5 className="card-title">{title}</h5>
          <div className="icon-container" style={{ fontSize: "40px", marginBottom: "15px" }}>
            {icon}
          </div>
          <p style={{ fontSize: "18px", marginTop: "10px" }}>{value}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;