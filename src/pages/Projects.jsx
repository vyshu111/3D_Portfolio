import { Link } from "react-router-dom";
import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {
  return (
    <section className='max-container p-10 bg-gray-50'>
      <h1 className='head-text text-center'>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Projects
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed text-center'>
        Throughout the years, I've built up my skills through various projects, 
        but these are the ones I hold closest to my heart. Many are open-source, 
        inviting you to delve into the codebase and contribute your unique insights 
        and enhancements. Your collaboration and ideas are greatly appreciated!
      </p>

      <div className='flex flex-wrap my-20 gap-16 justify-center'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full shadow-md rounded-lg overflow-hidden' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`}>
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img
                    src={project.iconUrl}
                    alt={`${project.name} icon`} // Descriptive alt text
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              </div>
            </div>

            <div className='mt-5 flex flex-col p-5'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>{project.description}</p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600'
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt='arrow pointing to the live link'
                  className='w-4 h-4 object-contain'
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200 my-10' />

      <CTA />
    </section>
  );
};

export default Projects;
