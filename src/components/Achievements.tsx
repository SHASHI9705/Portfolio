import React from "react";
import { LinkedInIcon } from "./Icons";

const Achievements: React.FC = () => {
  const achievements = [
    
    {
      title: "AWS Certified Solutions Architect",
      date: "March 2025",
      description: "Successfully validated skills in designing secure, scalable, and highly available cloud architectures on AWS. Gained hands-on expertise in core AWS services including VPC, EC2, S3, IAM, RDS, Elastic Load Balancing, Auto Scaling, and CloudFront. Demonstrated ability to build cost-efficient, resilient solutions aligned with industry best practices and the AWS Well-Architected Framework.",
      image: "/images/awscert.png",
    },
    {
      title: "Winner – Nebula Hack (Hackathon)",
      date: "Feb 2025",
      description: "Developed an AI-powered skincare assistant called Lovely Skins, enabling users to analyze skin conditions from uploaded photos and receive real-time tips and dermatologist recommendations. Built a complete full-stack solution using Node.js, Express, MongoDB, integrated AI for skin analysis, and deployed securely on AWS with a 3-tier architecture. Awarded top position for innovation, practical use-case, and implementation quality within the 36-hour challenge.",
      image: "/images/nebula.jpg",
    },
  ];

  return (
    <section
      className="w-full min-h-[100vh] flex flex-col bg-transparent text-white pt-16 relative overflow-hidden"
      id="achievements"
    >
      <div className="flex flex-col items-center w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-wide text-center bg-gradient-to-r from-blue-400 via-green-400 to-blue-400 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x">
          Achievements & Certifications
        </h2>
        <div className="relative flex justify-center">
          <div
            className="h-1 w-[280px] md:w-[490px] bg-white rounded-full mb-8"
            style={{
              filter: "blur(0.5px)",
              maskImage: "linear-gradient(to right, black 80%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to right, black 80%, transparent 100%)",
              opacity: 0.7,
            }}
          />
        </div>
        <div className="grid grid-cols-1 gap-8 px-4 md:px-24">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row bg-white/10 rounded-xl shadow-lg p-12 gap-12 max-w-4xl mx-auto"
            >
              <img
                src={achievement.image}
                alt={achievement.title}
                className="w-full md:w-1/3 h-40 object-cover rounded-lg"
              />
              <div className="flex flex-col justify-center md:w-2/3">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-blue-400">
                    {achievement.title}
                  </h3>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    <LinkedInIcon  />
                  </a>
                </div>
                <p className="text-sm text-gray-300 font-semibold mt-2">
                  {achievement.date}
                </p>
                <p className="text-sm text-gray-300 mt-2">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;