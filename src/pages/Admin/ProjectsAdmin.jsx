import React, { useEffect, useState } from "react";
import { getAllProjects, deleteProject } from "../../services/Services";
import AddProject from "./AddProject";

export default function ProjectsAdmin() {
  const [projects, setProjects] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await getAllProjects();
      setProjects(res);
    } catch (error) {
      console.error(error);
    }
  };

  // Delete project
  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this project?");
    if (!confirm) return;

    try {
      await deleteProject(id);
      setProjects((prev) => prev.filter((p) => p._id !== id));
      alert("Project deleted successfully!");
    } catch (error) {
      console.error(error);
      alert(error.message || "Failed to delete project");
    }
  };

  return (
    <div className="w-full min-h-screen bg-white p-6">
      {/* Header and Toggle Button */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Projects</h2>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="bg-[#465A86] text-white px-4 py-2 rounded-lg hover:bg-[#394a6d] transition duration-300"
        >
          {showAddForm ? "Back to List" : "Add New Project"}
        </button>
      </div>

      {/* Add Project Form */}
      {showAddForm && (
        <div className="mb-6">
          <AddProject
            onSuccess={() => {
              fetchProjects();
              setShowAddForm(false);
            }}
          />
        </div>
      )}

      {/* Projects List */}
      {!showAddForm && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.length > 0 ? (
            projects.map((p) => (
              <div
                key={p._id}
                className="bg-white rounded-lg shadow-md overflow-hidden relative hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={
                    p.image && p.image.startsWith("http")
                      ? p.image
                      : `http://localhost:5000/uploads/projects/${p.image}`
                  }
                  alt={p.name}
                  className="w-full h-48 sm:h-56 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{p.name}</h3>
                  <p className="text-sm text-gray-600">{p.description}</p>
                </div>
                <button
                  onClick={() => handleDelete(p._id)}
                  className="absolute top-3 right-3 px-2 py-1 text-xs bg-red-600 text-white rounded hover:bg-red-700 shadow"
                >
                  Delete
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">No projects found.</p>
          )}
        </div>
      )}
    </div>
  );
}
