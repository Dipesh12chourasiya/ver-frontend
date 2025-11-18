

const ProjectCard = ({ image, name, description }) => {
  return (
    <div className="rounded-lg shadow-md bg-white overflow-hidden hover:shadow-xl transition">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-4">
          {description}
        </p>
        <button className="px-4 py-2 bg-[#FF6D2E] hover:bg-[#e85f22] text-white rounded-md text-sm">
          Read More
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
