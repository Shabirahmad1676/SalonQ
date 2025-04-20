# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.









// import React, { useEffect, useState } from "react";
// import UserCard from "./UseCard";

// const UserForm = () => {
//   const [user, setUser] = useState({
//     name: "",
//     phone: "",
//   });

//   const [userData, setUserData] = useState([]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser((prevUser) => ({ ...prevUser, [name]: value }));
//   };

//   const handleForm = (e) => {
//     e.preventDefault();

//     const trimmedPhone = user.phone.trim();
//     const trimmedName = user.name.trim();

//     if (!trimmedName || !trimmedPhone) {
//       alert("Please fill out both Name and Phone fields.");
//       return;
//     }

//     const isDuplicate = userData.some((u) => u.phone === trimmedPhone);
//     if (isDuplicate) {
//       alert("Phone number already exists!");
//       return;
//     }

//     if (user.phone.length < 10) {
//       alert("Phone number must be at least 10 digits.");
//       return;
//     }

//     const token = Math.floor(100000 + Math.random() * 600000);

//     const newUser = {
//       ...user,
//       token,
//     };

//     setUserData((prevUser) => [...prevUser, newUser]);
//     setUser({ name: "", phone: "" });
//   };

//   const printToken = (user) => {
//     const popup = window.open("", "_blank", "width=400,height=300");
//     popup.document.write(`
//       <html>
//         <head>
//           <title>Token Print</title>
//           <style>
//             body {
//               font-family: sans-serif;
//               text-align: center;
//               padding: 40px;
//             }
//             .token {
//               font-size: 2rem;
//               font-weight: bold;
//               background-color: #facc15;
//               color: #000;
//               padding: 20px;
//               border-radius: 10px;
//               display: inline-block;
//             }
//           </style>
//         </head>
//         <body>
//           <h2>User Token</h2>
//           <p><strong>Name:</strong> ${user.name}</p>
//           <p><strong>Phone:</strong> ${user.phone}</p>
//           <div class="token">${user.token}</div>
//           <script>
//             window.onload = function() {
//               window.print();
//             }
//           </script>
//         </body>
//       </html>
//     `);
//   };

//   useEffect(() => {
//     const savedData = JSON.parse(localStorage.getItem("users"));
//     if (savedData) {
//       setUserData(savedData);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("users", JSON.stringify(userData));
//   }, [userData]);

//   const handleDelete = (phone) => {
//     const confirm = window.confirm("Are you sure you want to delete this user?");
//     if (confirm) {
//       const filtered = userData.filter((u) => u.phone !== phone);
//       setUserData(filtered);
//     }
//   };
  

//   return (
//     <div className="mt-6 h-fit flex flex-col gap-4 items-center justify-center mx-auto w-full">
//       <h1 className="text-xl font-bold">Fill the Form and Get Your Token</h1>

//       <form
//         onSubmit={handleForm}
//         className="flex flex-col gap-4 items-center justify-center mx-auto w-full"
//       >
//         <input
//           name="name"
//           value={user.name}
//           onChange={handleChange}
//           type="text"
//           placeholder="Enter Full Name"
//           className="border-2 border-gray-300 p-4 rounded w-[32%]"
//         />

//         <input
//           name="phone"
//           value={user.phone}
//           onChange={handleChange}
//           type="tel"
//           placeholder="Enter Phone Number"
//           className="border-2 border-gray-300 p-4 rounded w-[32%]"
//         />

//         <button type="submit" className="bg-blue-500 text-white p-2 rounded">
//           Submit
//         </button>
//       </form>

//       {userData.length > 0 ? (
//   <div className="mt-6 w-[90%] max-w-6xl">
//     <h2 className="text-lg font-semibold mb-4">Submitted Users:</h2>
//     <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//       {userData.map((u, index) => (
//        <UserCard key={index} user={u} onDelete={handleDelete} onPrint={printToken}/>
      
//       ))}
//     </ul>
//   </div>
// ) : (
//   <p className="mt-6 text-gray-500">No user data available yet.</p>
// )}

//     </div>
//   );
// };

// export default UserForm;
