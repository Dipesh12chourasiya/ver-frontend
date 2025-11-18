import { useState } from "react";
import { submitContactForm } from "../../services/Services.js"; 

export default function Contact({ hideTitle = false }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    city: "",
  });

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    setLoading(true);

    try {
      const res = await submitContactForm(formData);

      console.log("Submitted:", res);
      setMsg("Contact form submitted successfully!");

      // Clear form
      setFormData({
        fullName: "",
        email: "",
        mobile: "",
        city: "",
      });

    } catch (error) {
      setMsg(error.message || "Submission failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>

      {!hideTitle && (
        <h2 className="text-2xl font-semibold text-center text-white mb-6">
          Get a Free Consultation
        </h2>
      )}

      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
        className="w-full p-3 rounded-lg outline-none text-sm text-white border border-white"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-3 rounded-lg outline-none text-sm text-white border border-white"
        required
      />

      <input
        type="tel"
        name="mobile"
        placeholder="Mobile Number"
        value={formData.mobile}
        onChange={handleChange}
        className="w-full p-3 rounded-lg outline-none text-sm text-white border border-white"
        required
      />

      <input
        type="text"
        name="city"
        placeholder="Area, City"
        value={formData.city}
        onChange={handleChange}
        className="w-full p-3 rounded-lg outline-none text-sm text-white border border-white"
        required
      />

      {msg && (
        <p className="text-center text-sm text-white">{msg}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="bg-[#FF6D2E] hover:bg-[#e85f22] transition-all p-3 rounded-lg text-white font-semibold mt-2 disabled:opacity-50"
      >
        {loading ? "Submitting..." : "Get Quick Quote"}
      </button>
    </form>
  );
}
