import React from "react";

const UserCard = ({ user, onDelete, onPrint, onMarkAsServed }) => {
  return (
    <li className="border p-4 rounded shadow">
      <h3 className="text-lg font-bold">{user.name}</h3>
      <p>Phone: {user.phone}</p>
      <p>Token: {user.token}</p>
       <p>Waiting Time: {user.waitingTime} minutes</p>
      {user.served ? (
        <p className="text-green-600 font-semibold mt-2">Served</p>
      ) : (
        <button
          onClick={() => onMarkAsServed(user.phone)}
          className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
          Mark as Served
        </button>
      )}
      <div className="flex gap-2 mt-4">
        <button
          onClick={() => onPrint(user)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Print Token
        </button>
        <button
          onClick={() => onDelete(user.phone)}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default UserCard;