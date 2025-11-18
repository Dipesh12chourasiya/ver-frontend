import { useEffect, useState } from "react";
import ProjectCard from "../../components/ProjectCard";
import { getProjects } from "../../services/Services";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await getProjects();
      setProjects(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 py-16 px-4 md:px-16">
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-center mb-10">
        Our Projects
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project._id}
            image={
              project.image && project.image.startsWith("http")
                ? project.image
                : `http://localhost:5000/uploads/projects/${project.image}`
            }
            name={project.name}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
