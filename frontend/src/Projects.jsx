import React from "react";
import useFetchData from "./useFetchdata";

function  Projects(){
  const projects = useFetchData(`${import.meta.env.VITE_API_URL}/api/projects`)
  console.log(projects);
  
  return (
    <section id="projects" className="py-16 px-6 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">Mes Projets</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects?.map((project) => (
            <div key={project.id} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
              <img src={project.images} alt={project.title} className="rounded-md mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
              <a href={project.github_url} target="_blank" className="text-blue-500 mt-2 inline-block">Voir le projet</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default Projects;
