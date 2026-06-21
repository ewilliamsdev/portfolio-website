import React from "react";

const embedded_skills = [
    { skill: "C++" },
    { skill: "Python" },
    { skill: "MATLAB" },
    { skill: "Linux" },
  ];

const frontend_skills = [
    { skill: "Next.js" },
    { skill: "React.js" },
    { skill: "TypeScript" },
    { skill: "JavaScript" },
    { skill: "HTML5" },
    { skill: "CSS3" },
    { skill: "Tailwind CSS" },
    { skill: "C# WPF" },
  ];

const backend_skills = [
    { skill: "Node.js" },
    { skill: "Python" },
    { skill: "API Integration" },
  ];

const uiux_skills = [
    { skill: "Figma" },
    { skill: "Adobe XD" },
  ];

const AboutSection = () => {
  return (
    <div id="about-section" className="p-6 md:p-40">
    <section>
        <div>
          <h1 className="my-20 md:my-10 text-center font-bold text-4xl"><span className="underline underline-offset-8 decoration-accent-color decoration-4">About Me</span></h1>
        </div>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left w-full md:w-auto">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">Learn More About Me!</h1>
            <p className="text-xl">
              My name is Eric and I am Software Engineer based in the Grand Canyon state 🌵 (Tucson, AZ).
            </p>
            <br />
            <p className="text-xl">
              I have experience in embedded programming, frontend development, backend development, and UI/UX design. Graduated from 
              <a 
                href="https://www.gmu.edu/" className="font-bold cursor-pointer"> George Mason University
              </a> in 2023 with a BS in Computer Science. Currently pursuing a MS in Computer Science from 
              <a 
                href="https://www.gatech.edu"
                className="font-bold cursor-pointer"> Georgia Institute of Technology
              </a>.
            </p>
            <br />
            <p className="text-xl">
              For fun, I enjoy photography, travel, and learning new languages. I believe that challenging myself with hobbies such as these provide me with new experiences and always being a student of the world! 🌎
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">My Skills</h1>
            <h3 className="text-red-500 text-center text-xl font-bold mb-3 md:text-left">Embedded Programming</h3>
            <div className="flex flex-wrap flex-row justify-center z-10 mb-6 md:justify-start">
              {embedded_skills.map((item) => {
                return (
                  <p key={item.skill} className="bg-red-200 px-4 py-2 mr-2 mt-2 text-red-500 rounded font-semibold">{item.skill}</p>
                );
              })}
            </div>
            <h3 className="text-orange-500 text-center text-xl font-bold mb-3 md:text-left">Frontend Development</h3>
            <div className="flex flex-wrap flex-row justify-center z-10 mb-6 md:justify-start">
              {frontend_skills.map((item) => {
                return (
                  <p key={item.skill} className="bg-orange-200 px-4 py-2 mr-2 mt-2 text-orange-500 rounded font-semibold">{item.skill}</p>
                );
              })}
            </div>
            <h3 className="text-blue-500 text-center text-xl font-bold mb-3 md:text-left">Backend Development</h3>
            <div className="flex flex-wrap flex-row justify-center z-10 mb-6 md:justify-start">
              {backend_skills.map((item) => {
                return (
                  <p key={item.skill} className="bg-blue-200 px-4 py-2 mr-2 mt-2 text-blue-500 rounded font-semibold">{item.skill}</p>
                );
              })}
            </div>
            <h3 className="text-violet-500 text-center text-xl font-bold mb-3 md:text-left">UI/UX Design</h3>
            <div className="flex flex-wrap flex-row justify-center z-10 mb-6 md:justify-start">
              {uiux_skills.map((item) => {
                return (
                  <p key={item.skill} className="bg-violet-200 px-4 py-2 mr-2 mt-2 text-violet-500 rounded font-semibold">{item.skill}</p>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      </div>
  )
}

export default AboutSection;