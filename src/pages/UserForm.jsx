// pages/UserForm.js
import React, { useState, useEffect } from "react";

const UserForm = ({ setActiveComponent }) => {
  const [user, setUser] = useState({ name: "", phone: "", service: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleForm = (e) => {
    e.preventDefault();
    const trimmedName = user.name.trim();
    const trimmedPhone = user.phone.trim();

    if (!trimmedName || !trimmedPhone || !user.service)
      return alert("All fields required including service");
    if (trimmedPhone.length < 10)
      return alert("Phone must be at least 10 digits");

    const existing = JSON.parse(localStorage.getItem("users")) || [];
    
    if (existing.some((u) => u.phone === trimmedPhone)) {
      alert("Phone already exists");
      return;
    }

    const token = Math.floor(100000 + Math.random() * 600000);
     const waitingTime = existing.length * 15;

    const newUser = { ...user, token, waitingTime };

  
    const updated = [...existing, newUser];
    localStorage.setItem("users", JSON.stringify(updated));
    setUser({ name: "", phone: "" });
    alert("Submitted successfully!");
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl font-bold mb-4">User Form</h1>
      <form onSubmit={handleForm} className="flex flex-col gap-4 w-[300px]">
        <input
          name="name"
          value={user.name}
          onChange={handleChange}
          type="text"
          placeholder="Full Name"
          className="border p-2 rounded"
        />
        <select
          name="service"
          value={user.service}
          onChange={handleChange}
          className="border-2 border-gray-300 p-4 rounded "
        >
          <option value="">Select Service</option>
          <option value="Haircut">Haircut</option>
          <option value="Facial">Facial</option>
          <option value="Beard Trim">Beard Trim</option>
          <option value="Hair Color">Hair Color</option>
          <option value="Massage">Massage</option>
        </select>

        <input
          name="phone"
          value={user.phone}
          onChange={handleChange}
          type="tel"
          placeholder="Phone Number"
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-blue-600 text-white py-2 rounded">
          Submit
        </button>
      </form>
      <button
        onClick={() => setActiveComponent(null)}
        className="mt-4 bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition"
      >
        Back
      </button>
    </div>
  );
};

export default UserForm;
