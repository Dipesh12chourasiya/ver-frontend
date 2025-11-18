import { useState } from "react";
import { subscribeEmail } from "../../services/Services.js";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await subscribeEmail(email);  
      console.log("Newsletter subscribed:", data);

      alert("Subscribed Successfully!");
      setEmail("");
    } catch (error) {
      console.error("Subscription Error:", error);
      alert(error?.message || "Something went wrong!");
    }
  };

  return (
    <section className="w-full bg-blue-600 py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        
        <h2 className="text-3xl font-bold text-white mb-4">
          Subscribe to Our Newsletter
        </h2>

        <p className="text-white mb-6">
          Stay updated with our latest projects and announcements.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row items-center gap-4 justify-center"
        >
          <input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full md:w-2/3 p-3 rounded-lg border outline-none text-white text-sm shadow-sm border-white"
          />

          <button
            type="submit"
            className="bg-white hover:bg-blue-600 text-black hover:text-white font-semibold px-6 py-3 rounded-lg shadow-md transition hover:border-1 hover:border-white"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
