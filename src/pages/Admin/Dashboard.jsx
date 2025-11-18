import React, { useState } from "react";
import ProjectsAdmin from "./ProjectsAdmin";
import ClientsAdmin from "./ClientsAdmin";
import ContactsAdmin from "./ContactsAdmin";
import SubscribersAdmin from "./SubscriptionsAdmin";

export default function AdminDashboard() {
  const [tab, setTab] = useState("dashboard"); // dashboard | projects | clients | contacts | subscribers

  const handleLogout = () => {
  const confirmLogout = window.confirm("Do you really want to logout?");
  if (confirmLogout) {
    localStorage.removeItem("admin");
    window.location.href = "/admin/login";
  }
};


  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white border-b md:border-b-0 md:border-r p-4 flex flex-col justify-between">
        <div>
          <div className="text-xl font-bold mb-6 text-[#465A86] text-center md:text-left">
            Admin Panel
          </div>

          <nav className="flex flex-col gap-2 text-gray-700">
            <button
              onClick={() => setTab("dashboard")}
              className={`text-left py-2 px-3 rounded w-full text-left ${
                tab === "dashboard"
                  ? "bg-[#E8EEF9] font-semibold"
                  : "hover:bg-gray-100"
              }`}
            >
              Dashboard
            </button>

            <button
              onClick={() => setTab("projects")}
              className={`text-left py-2 px-3 rounded w-full ${
                tab === "projects"
                  ? "bg-[#E8EEF9] font-semibold"
                  : "hover:bg-gray-100"
              }`}
            >
              Projects
            </button>

            <button
              onClick={() => setTab("clients")}
              className={`text-left py-2 px-3 rounded w-full ${
                tab === "clients"
                  ? "bg-[#E8EEF9] font-semibold"
                  : "hover:bg-gray-100"
              }`}
            >
              Clients
            </button>

            <button
              onClick={() => setTab("contacts")}
              className={`text-left py-2 px-3 rounded w-full ${
                tab === "contacts"
                  ? "bg-[#E8EEF9] font-semibold"
                  : "hover:bg-gray-100"
              }`}
            >
              Contact Messages
            </button>

            <button
              onClick={() => setTab("subscribers")}
              className={`text-left py-2 px-3 rounded w-full ${
                tab === "subscribers"
                  ? "bg-[#E8EEF9] font-semibold"
                  : "hover:bg-gray-100"
              }`}
            >
              Subscribers
            </button>
          </nav>
        </div>

        {/* Logout Button at Bottom */}
        <button
          onClick={handleLogout}
          className="mt-6 w-full py-2 px-3 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition"
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6 overflow-auto">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">
            {tab === "dashboard"
              ? "Dashboard"
              : tab.charAt(0).toUpperCase() + tab.slice(1)}
          </h1>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
          {tab === "dashboard" && (
            <div>
              <h2 className="text-lg font-medium mb-4">Welcome, Admin</h2>
              <p className="text-sm text-gray-600">
                Use the sidebar to manage projects, clients, contact messages, and subscribers.
              </p>
            </div>
          )}

          {tab === "projects" && <ProjectsAdmin />}
          {tab === "clients" && <ClientsAdmin />}
          {tab === "contacts" && <ContactsAdmin />}
          {tab === "subscribers" && <SubscribersAdmin />}
        </div>
      </main>
    </div>
  );
}
