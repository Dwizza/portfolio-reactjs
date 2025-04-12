import React from "react";
import useFetchData from "./useFetchdata";
function Hero(){
  
const hero = useFetchData('http://127.0.0.1:8000/api/users')
const skills = useFetchData('http://127.0.0.1:8000/api/skills')
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 pt-20">
      <div className="text-center px-4">
        <img src="https://intranet.youcode.ma/storage/users/profile/thumbnail/1101-1727859750.JPG" alt="profile" className="w-32 h-32 rounded-full mx-auto mb-4 animate-bounce" />
        {hero?.map(user => (
          <React.Fragment key={user.id}>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">{user.name}</h1>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white md:text-2xl">{user.email}</h2>
          </React.Fragment>
        ))}
        <p className="text-blue-600 dark:text-blue-400">Développeur Web Junior</p>
        {skills?.map(skill => (
          <span key={skill.id} className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">{skill.name}</span>
        ))}
        <p className="mt-2 text-gray-600 dark:text-gray-300">"Créer, apprendre, partager."</p>
      </div>
    </section>
  );
};


export default Hero;
