import { useState } from "react";
import { addClient } from "../../services/Services.js";
import ImageCropper from "../../components/ImageCropper.jsx";

export default function AddClient({ onSuccess }) {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null); // Original file
  const [croppedFile, setCroppedFile] = useState(null);   // Cropped file
  const [showCropper, setShowCropper] = useState(false);  // Show cropper
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setSelectedFile(URL.createObjectURL(file));
    setShowCropper(true);
  };

  const handleCropComplete = (file) => {
    setCroppedFile(file);
    setShowCropper(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");

    if (!croppedFile) {
      alert("Please upload and crop an image");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("designation", designation);
    formData.append("description", description);
    formData.append("image", croppedFile);

    try {
      setLoading(true);
      await addClient(formData);
      setMsg("Client added successfully!");

      setName("");
      setDesignation("");
      setDescription("");
      setSelectedFile(null);
      setCroppedFile(null);

      if (onSuccess) onSuccess();
    } catch (error) {
      setMsg(error.message || "Failed to add client");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mb-6 max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-2xl font-semibold mb-5 text-gray-800">
        Add New Client
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* File Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Client Image
          </label>
          <input
            className="w-full border border-gray-300 rounded-lg p-2 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            required
          />
        </div>

        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Client Name
          </label>
          <input
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="Client Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        {/* Designation */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Designation
          </label>
          <input
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="Client Designation"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none"
            placeholder="Client Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
          {loading ? "Uploading..." : "Add Client"}
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
