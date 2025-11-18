import React, { useEffect, useState } from "react";
import { getContactsAdmin } from "../../services/Services";

export default function ContactsAdmin() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await getContactsAdmin();
      setContacts(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full">
      <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800">
        Contact Submissions
      </h3>

      {contacts && contacts.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contacts.map((c) => (
            <div
              key={c._id}
              className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-between items-start mb-3">
                <h4 className="text-lg font-semibold text-gray-800">
                  {c.fullName}
                </h4>
                <span className="text-xs text-gray-400">
                  {new Date(c.createdAt).toLocaleString()}
                </span>
              </div>

              <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium text-gray-700">Email:</span> {c.email}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium text-gray-700">Mobile:</span> {c.mobile}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium text-gray-700">City:</span> {c.city}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center mt-6">
          No contact submissions yet.
        </p>
      )}
    </div>
  );
}
