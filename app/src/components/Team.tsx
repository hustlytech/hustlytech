
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Twitter } from "lucide-react";

// Team member data
const teamMembers = [
  {
    name: "Uttej Terlapu",
    role: "Web Dev Lead & Ops",
    bio: "Drives scalable web solutions with a focus on full-stack development, UX, and streamlined operations.",
    image: "https://doeresults.gitam.edu/photo/img.aspx?id=Vu21csen0400010",
    socials: {
      linkedin: "https://linkedin.com/in/uttej-terlapu",
      github: "https://github.com/uttejterlapu"
    },
    expertise: [
      "Full-Stack Development",
      "React.js",
      "UI/UX",
      "Performance Tuning",
      "DevOps",
      "Project Management"
    ]
  },
  {
    name: "Udumala Nithin Reddy",
    role: "Cyber Security Lead",
    bio: "Secures systems through proactive threat detection and robust defense strategies.",
    image: "https://doeresults.gitam.edu/photo/img.aspx?id=Vu21csen0400007",
    socials: {
      twitter: "https://twitter.com/samchen",
      linkedin: "https://linkedin.com/in/samchen",
      github: "https://github.com/samchen"
    },
    expertise: [
      "Threat Analysis",
      "Network Security",
      "Pen Testing",
      "Vulnerability Scanning",
      "Security Design",
      "Incident Handling"
    ]
  },
  {
    name: "Sanjeev Varma",
    role: "Blockchain Specialist",
    bio: "Builds secure DApps with expertise in smart contracts and Web3 integrations.",
    image: "https://doeresults.gitam.edu/photo/img.aspx?id=Vu21csen0400048",
    socials: {
      // twitter: "https://twitter.com/jamiewilson",
      linkedin: "https://linkedin.com/in/sanjeev-varma7",
      github: "https://github.com/Sanjeevvarmabetter"
    },
    expertise: [
      "Smart Contracts",
      "Blockchain Design",
      "Web3",
      "Solidity",
      "DApp Development",
      "React.js"
    ]
  },
  // {
  //   name: "Gandhi Aron Prakash",
  //   role: "Business Development Manager",
  //   bio: "Driving growth through strategic partnerships, market expansion, and client engagement. Experienced in aligning business goals with cutting-edge technology solutions.",
  //   image: "https://doeresults.gitam.edu/photo/img.aspx?id=Vu21csen0400204",
  //   socials: {
  //     linkedin: "https://linkedin.com/in/aaron-prakash-gandi-9432bb223"
  //   },
  //   expertise: [
  //     "Business Strategy",
  //     "Client Relationship Management",
  //     "Market Analysis",
  //     "Partnership Development",
  //     "Sales Enablement",
  //     "Growth Hacking"
  //   ]    
  // }
];


const Team = () => {
  return (
    <section id="team" className="section-padding bg-hustly-light dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-hustly-accent font-semibold">OUR TEAM</span>
          <h2 className="text-4xl font-bold text-hustly-primary mt-2 mb-6 dark:text-white">
            Meet the Hustlers
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto dark:text-gray-300">
            Our diverse team of experts brings together years of experience in AI, web development,
            and blockchain technologies to deliver exceptional digital solutions.
          </p>
        </div>

        <div className="flex mx-auto max-w-7xl px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center ">

          {teamMembers.map((member, index) => (
            <Card key={index} className="bg-white dark:bg-gray-800 overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
              <div className="relative group">
                <div className="overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full  object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-hustly-primary/80 to-transparent">
                  <div className="flex justify-end space-x-2">
                    {member.socials.twitter && (
                      <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-white hover:text-hustly-accent transition-colors">
                        <Twitter size={18} />
                      </a>
                    )}
                    {member.socials.linkedin && (
                      <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-hustly-accent transition-colors">
                        <Linkedin size={18} />
                      </a>
                    )}
                    {member.socials.github && (
                      <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-hustly-accent transition-colors">
                        <Github size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-hustly-primary mb-1 dark:text-white">{member.name}</h3>
                <p className="text-hustly-accent font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4 dark:text-gray-300">{member.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-hustly-secondary text-hustly-primary rounded-full dark:bg-gray-700 dark:text-gray-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Team;
