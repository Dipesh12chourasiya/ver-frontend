import { useState } from "react";
import { addProject } from "../../services/Services";
import ImageCropper from "../../components/ImageCropper";

export default function AddProject({ onSuccess }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null); // Original file
  const [croppedFile, setCroppedFile] = useState(null);   // Cropped file
  const [showCropper, setShowCropper] = useState(false);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  // File selected
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setSelectedFile(URL.createObjectURL(file));
    setShowCropper(true);
  };

  // After cropping
  const handleCropComplete = (file) => {
    setCroppedFile(file);
    setShowCropper(false);
  };

  // Form submit
  const handleSubmit = async (e) => {
  e.preventDefault();
  setMsg("");

  if (!croppedFile || !name || !description) {
    setMsg("Please fill all fields and crop an image.");
    return;
  }

  try {
    setLoading(true);
    await addProject(croppedFile, name, description); // <-- pass separately
    setMsg("Project added successfully!");
    setName("");
    setDescription("");
    setSelectedFile(null);
    setCroppedFile(null);
    if (onSuccess) onSuccess();
  } catch (error) {
    setMsg(error.message || "Failed to add project");
  } finally {
    setLoading(false);
  }
};


  return (
    <section className="mb-6 max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-2xl font-semibold mb-5 text-gray-800">Add New Project</h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* File Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Project Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full border border-gray-300 rounded-lg p-2 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />
        </div>

        {/* Project Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Project Name
          </label>
          <input
            type="text"
            placeholder="Project Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />
        </div>

        {/* Project Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Project Description
          </label>
          <textarea
            placeholder="Project Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none"
            rows={4}
            required
          />
        </div>

        {/* Status Message */}
        {msg && <div className="text-sm text-green-600">{msg}</div>}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#465A86] text-white font-semibold py-2 rounded-lg hover:bg-[#394a6d] transition duration-300"
          disabled={loading}
        >
          {loading ? "Uploading..." : "Add Project"}
        </button>
      </form>

      {/* Image Cropper Modal */}
      {showCropper && selectedFile && (
        <ImageCropper
          imageSrc={selectedFile}
          onCropComplete={handleCropComplete}
        />
      )}
    </section>
  );
}
