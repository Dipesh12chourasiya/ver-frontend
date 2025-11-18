/* eslint-disable react/prop-types */
const ClientCard = ({ image, name, designation, description }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-all duration-300">
      <div className="flex flex-col items-center text-center">
        
        {/* Client image */}
        <img 
          src={image}
          alt={name}
          className="w-20 h-20 rounded-full object-cover border-2 border-gray-300 mb-4"
        />

        {/* Name */}
        <h3 className="text-xl font-semibold">{name}</h3>

        {/* Designation */}
        <p className="text-sm text-gray-500 mb-3">{designation}</p>

        {/* Description */}
        <p className="text-gray-600 text-sm">
          "{description}"
        </p>
      </div>
    </div>
  );
}

export default ClientCard;
