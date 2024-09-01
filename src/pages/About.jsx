import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { CTA } from "../components";
import { experiences, skills } from "../constants";
import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className="max-container px-4 py-10 bg-gray-50">
      {/* Introduction Section */}
      <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center text-center">
        <img
          src="./src/assets/images/profile.jpg" // Replace with your profile image
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover mb-6"
        />
        <h1 className="text-3xl font-bold text-gray-800">
          Hello, I'm{" "}
          <span className="text-blue-600">
            Boddula Vaishnavi
          </span>{" "}
          💟
        </h1>
        <p className="mt-3 text-gray-500">
          Software Engineer and Web Developer
        </p>
      </div>

      {/* Skills Section */}
      <div className="py-12">
        <h3 className="text-2xl font-semibold text-gray-700">My Skills</h3>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              className="bg-blue-100 p-6 rounded-lg shadow-md flex flex-col items-center"
              key={skill.name}
            >
              <img
                src={skill.imageUrl}
                alt={skill.name}
                className="w-16 h-16 object-contain mb-4"
              />
              <p className="text-blue-600 text-center">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="py-12">
        <h3 className="text-2xl font-semibold text-gray-700">Internships</h3>
        <p className="mt-2 text-gray-500">
          I've worked as an intern, leveling up my skills and teaming up with smart people. Here's the rundown:
        </p>

        <div className="mt-10">
          <VerticalTimeline layout="1-column-left">
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                contentStyle={{
                  background: '#f9fafb', // Light gray background
                  color: '#333', // Dark text color
                  border: `4px solid ${experience.iconBg}`, // Border color matches the icon background
                  borderRadius: '8px', // Rounded corners
                  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
                }}
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {experience.title}
                </h3>
                <p className="text-md font-medium text-gray-600">
                  {experience.company_name}
                </p>
                <ul className="mt-4 list-disc ml-5 space-y-2 text-gray-600">
                  {experience.points.map((point, index) => (
                    <li key={`experience-point-${index}`} className="text-sm">
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-gray-300 my-12" />

      <CTA />
    </section>
  );
};

export default About;
