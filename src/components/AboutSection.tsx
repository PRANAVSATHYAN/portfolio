
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from "react";

const AboutSection = () => {
  const skills = [
    {
      category: "Programming",
      items: ["Python", "R", "SQL"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-data-blue"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M22 8a2 2 0 0 0-2-2h-8L9 3H4a2 2 0 0 0-2 2"/></svg>
      )
    },
    {
      category: "Data Analysis",
      items: ["Power BI", "Tableau", "Excel", "IBM SPSS"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-data-green"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
      )
    },
    {
      category: "Business Skills",
      items: ["Requirements Analysis", "Market Research", "Process Mapping", "Stakeholder Management"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-data-orange"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6.5a2.5 2.5 0 0 0 0 5h3a2.5 2.5 0 0 1 0 5H6"/><path d="M12 3v3"/><path d="M12 21v-3"/></svg>
      )
    },
  ];
  
  return (
    <section id="about" className="min-h-screen py-24 section-padding gradient-background-secondary relative flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="grid grid-cols-12 grid-rows-12 h-full w-full opacity-5">
          {[...Array(144)].map((_, i) => (
            <div key={i} className="border border-white/10"></div>
          ))}
        </div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#cc73f8] rounded-full filter blur-[128px] opacity-20"></div>
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-primary rounded-full filter blur-[100px] opacity-25"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#9b30e2] rounded-full filter blur-[150px] opacity-10"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="mb-16 text-center animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 fly-up">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto fly-up"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photo Section */}
          <div className="order-1 lg:order-1 flex justify-center animate-on-scroll">
            <div className="relative fly-up">
              <div className="absolute -left-6 -top-6 w-80 h-80 bg-accent rounded-full filter blur-3xl opacity-40"></div>
              <div className="absolute -right-6 -bottom-6 w-80 h-80 bg-data-blue rounded-full filter blur-3xl opacity-30"></div>
              <div className="rounded-2xl overflow-hidden border-8 border-background/20 shadow-2xl relative z-10 hover:scale-105 transition-transform duration-300">
                <img
                  src="https://i.imgur.com/sRrQSG6.jpeg"
                  alt="Pranav Sathyan - Data Analyst"
                  className="w-[350px] h-[350px] object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-accent rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="order-2 lg:order-2 animate-on-scroll space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 fly-up">My Background</h3>
              <p className="mb-4 text-muted-foreground fly-up leading-relaxed">
                Experienced Business Analyst with expertise across multiple domains, including Supply Chain, Non-Profit Organization, and finance. 
                Skilled in requirements gathering, data analysis, market research, and business intelligence tools such as Power BI, Tableau, and Python.
              </p>
              <p className="mb-6 text-muted-foreground fly-up leading-relaxed">
                Proficient in system automation, stakeholder engagement, process mapping, and managing end-to-end system development and maintenance. 
                Adept at translating complex data into actionable insights, managing cross-functional projects, and delivering solutions that drive business performance.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 fly-up">My Interests</h3>
              <p className="text-muted-foreground fly-up leading-relaxed">
                While my core expertise is in data, I'm a lifelong learner constantly seeking new solutions, delving into the latest technologies and tools, 
                and staying at the forefront of AI and emerging data science trends. Beyond my professional pursuits, I enjoy staying active with badminton, 
                exploring new places and cultures through travel, indulging in diverse foods, and unwinding with movies.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-center fly-up">Skills & Tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-on-scroll stagger-children">
            {skills.map((skill, index) => (
              <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#cc73f8]/40 backdrop-blur-sm bg-background/40 hover:scale-105 fly-up">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="mt-1">
                      {skill.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">{skill.category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {skill.items.map((item, i) => (
                          <span 
                            key={i} 
                            className="bg-background text-foreground px-3 py-1 rounded-full text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
