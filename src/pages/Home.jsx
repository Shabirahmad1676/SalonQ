import React, { useState } from "react";
import UserForm from "./UserForm";
import AdminDashboard from "./AdminDashboard";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const sectionVariants = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -40 },
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white p-6 text-center text-2xl font-bold">
        SmartQ Portal
      </header>

      {/* Hero Section */}
      {!activeComponent && (
        <motion.section
          className="text-center py-20 px-6 bg-blue-50"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-6">
            Welcome to SmartQ
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Streamline queue management with ease and efficiency.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setActiveComponent("user")}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              User Access
            </button>
            <button
              onClick={() => setActiveComponent("admin")}
              className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition"
            >
              Admin Panel
            </button>
          </div>
        </motion.section>
      )}

      {/* Render Component Based on Selection */}
      <main className="px-4 py-8 flex-grow">
      <AnimatePresence mode="wait">
  {activeComponent === "user" && (
    <motion.div
      key="user"
      variants={sectionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      <UserForm setActiveComponent={setActiveComponent} />
    </motion.div>
  )}
  {activeComponent === "admin" && (
    <motion.div
      key="admin"
      variants={sectionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      <AdminDashboard setActiveComponent={setActiveComponent} />
    </motion.div>
  )}
</AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-center text-sm py-4 border-t">
        &copy; 2025 SmartQ. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;