import { useEffect, useState } from "react";
import ClientCard from "../../components/ClientCard";
import { getClients } from "../../services/Services";

const Clients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const res = await getClients();
      setClients(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 py-16 px-4 md:px-16">
      
      <h2 className="text-4xl font-bold text-center mb-10">
        Happy Clients
      </h2>

      {/* Clients Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {clients.map((client) => (
          <ClientCard
            key={client._id}
            image={
              client.image && client.image.startsWith("http")
                ? client.image
                : `http://localhost:5000/uploads/clients/${client.image}`
            }
            name={client.name}
            designation={client.designation}
            description={client.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Clients;
