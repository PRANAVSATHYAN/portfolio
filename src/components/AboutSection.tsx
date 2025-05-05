
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const skills = [
    {
      category: "Programming",
      items: ["Python", "R", "SQL", "JavaScript"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-data-blue"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M22 8a2 2 0 0 0-2-2h-8L9 3H4a2 2 0 0 0-2 2"/></svg>
      )
    },
    {
      category: "Data Analysis",
      items: ["Pandas", "NumPy", "Statistics", "Excel"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-data-green"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
      )
    },
    {
      category: "Visualization",
      items: ["Tableau", "Power BI", "Matplotlib", "Seaborn"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-data-orange"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6.5a2.5 2.5 0 0 0 0 5h3a2.5 2.5 0 0 1 0 5H6"/><path d="M12 3v3"/><path d="M12 21v-3"/></svg>
      )
    },
  ];
  
  return (
    <section id="about" className="py-24 section-padding bg-secondary">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">My Background</h3>
            <p className="mb-4 text-muted-foreground">
              As a data analyst with 5+ years of experience, I specialize in transforming raw data into meaningful business insights. 
              My journey in data analysis began with a degree in Statistics, and I've since expanded my expertise across various industries.
            </p>
            <p className="mb-6 text-muted-foreground">
              I'm passionate about using data to tell stories and drive decision-making. Whether it's optimizing business processes, 
              identifying market trends, or solving complex problems, I approach each project with curiosity and analytical rigor.
            </p>
            <h3 className="text-2xl font-bold mb-4">My Interests</h3>
            <p className="text-muted-foreground">
              Beyond working with data, I enjoy exploring new visualization techniques, contributing to open-source data projects, 
              and staying current with emerging technologies in data science. I believe in the power of data to transform organizations 
              and create positive change in the world.
            </p>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Skills & Tools</h3>
            
            {skills.map((skill, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
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
                            className="bg-background text-foreground px-3 py-1 rounded-full text-sm"
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
