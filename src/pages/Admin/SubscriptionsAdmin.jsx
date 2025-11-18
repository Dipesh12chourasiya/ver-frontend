import React, { useEffect, useState } from "react";
import { getSubscribersAdmin } from "../../services/Services";

export default function SubscribersAdmin() {
  const [subs, setSubs] = useState([]);

  useEffect(() => {
    fetchSubs();
  }, []);

  const fetchSubs = async () => {
    try {
      const res = await getSubscribersAdmin();
      setSubs(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full">
      <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800">
        Subscribers
      </h3>

      {subs && subs.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {subs.map((s) => (
            <div
              key={s._id}
              className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
            >
              <p className="text-gray-800 font-medium break-words">{s.email}</p>
              <span className="text-xs text-gray-400 mt-2">
                Subscribed on: {new Date(s.createdAt).toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center mt-6">
          No subscribers yet.
        </p>
      )}
    </div>
  );
}
