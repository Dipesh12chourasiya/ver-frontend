import React, { useEffect, useState } from "react";
import { getClientsAdmin, deleteClient } from "../../services/Services";
import AddClient from "./AddClient";
import ClientCard from "../../components/ClientCard";

export default function ClientsAdmin() {
  const [clients, setClients] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const res = await getClientsAdmin();
      setClients(res);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this client?");
    if (!confirm) return;

    try {
      await deleteClient(id);
      setClients((prev) => prev.filter((c) => c._id !== id));
      alert("Client deleted successfully!");
    } catch (error) {
      console.error(error);
      alert(error.message || "Failed to delete client");
    }
  };

  return (
    <div className="w-full min-h-screen bg-white p-4 md:p-8">
      {/* Header with Add Button */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-0">
          Clients
        </h2>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="bg-[#465A86] hover:bg-[#394a6d] text-white font-semibold px-5 py-2 rounded-lg transition duration-300"
        >
          {showAddForm ? "Back to List" : "Add New Client"}
        </button>
      </div>

      {/* Add Client Form (toggle) */}
      {showAddForm && (
        <div className="mb-10">
          <AddClient
            onSuccess={() => {
              fetchClients();
              setShowAddForm(false);
            }}
          />
        </div>
      )}

      {/* Clients Grid */}
      {!showAddForm && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {clients.length > 0 ? (
            clients.map((c) => (
              <div key={c._id} className="relative">
                <ClientCard
                  image={
                    c.image && c.image.startsWith("http")
                      ? c.image
                      : `http://localhost:5000/uploads/clients/${c.image}`
                  }
                  name={c.name}
                  designation={c.designation}
                  description={c.description}
                />
                <button
                  onClick={() => handleDelete(c._id)}
                  className="absolute top-2 right-2 px-2 py-1 text-xs bg-red-600 text-white rounded hover:bg-red-700 shadow"
                >
                  Delete
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No clients found.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
