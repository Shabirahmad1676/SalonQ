import UserCard from "@/components/UseCard";
import React, { useEffect, useState } from "react";

const AdminDashboard = ({ setActiveComponent }) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("users")) || [];
    setUserData(savedData);
  }, []);

  const handleDelete = (phone) => {
    const filtered = userData.filter((u) => u.phone !== phone);
    setUserData(filtered);
    localStorage.setItem("users", JSON.stringify(filtered));
  };

  const printToken = (user) => {
    const popup = window.open("", "_blank", "width=400,height=300");
    popup.document.write(`
      <html><head><title>Print</title></head><body>
        <h2>${user.name}</h2>
        <p>Phone: ${user.phone}</p>
        <div style="font-size: 24px; font-weight: bold;">Token: ${user.token}</div>
        <script>window.onload = () => window.print()</script>
      </body></html>
    `);
  };

 const handleMarkAsServed = (phone) => {
  const servedIndex = userData.findIndex((user) => user.phone === phone);

  const updatedData = userData.map((user, index) => {
    if (index === servedIndex) {
      return { ...user, served: true };
    }

    if (index > servedIndex) {
      return { ...user, waitingTime: (index - servedIndex) * 15 }; // Adjust 15 to your service duration
    }

    return user;
  });

  setUserData(updatedData);
  localStorage.setItem("users", JSON.stringify(updatedData));
};

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      {userData.length === 0 ? (
        <p>No users submitted yet.</p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {userData.map((user) => (
            <UserCard
              key={user.phone}
              user={user}
              onDelete={handleDelete}
              onPrint={printToken}
              onMarkAsServed={handleMarkAsServed}
            />
          ))} 
        </ul>
      )}
      <button
        onClick={() => setActiveComponent(null)}
        className="mt-4 bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition"
      >
        Back
      </button>
    </div>
  );
};

export default AdminDashboard;