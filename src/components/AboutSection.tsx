
import { Badge } from "@/components/ui/badge";
import { 
  Database, 
  BarChart3, 
  Code, 
  Settings, 
  FileSpreadsheet,
  Brain,
  GitBranch,
  Zap
} from "lucide-react";

const AboutSection = () => {
  const techStack = [
    { name: "Python", icon: "🐍", category: "Programming" },
    { name: "R Studio", icon: "📊", category: "Analytics" },
    { name: "SQL", icon: "🗄️", category: "Database" },
    { name: "Power BI", icon: "📈", category: "Visualization" },
    { name: "Tableau", icon: "📊", category: "Visualization" },
    { name: "Excel", icon: "📋", category: "Analysis" },
    { name: "Power Query", icon: "🔄", category: "ETL" },
    { name: "DAX", icon: "🧮", category: "Analytics" },
    { name: "VBA", icon: "⚙️", category: "Automation" },
    { name: "MySQL", icon: "🐬", category: "Database" },
    { name: "Oracle", icon: "🔮", category: "Database" },
    { name: "SharePoint", icon: "🔗", category: "Platform" },
    { name: "PowerApps", icon: "📱", category: "Development" },
    { name: "Visio", icon: "🗺️", category: "Process" },
    { name: "SPSS", icon: "📈", category: "Statistics" },
    { name: "Rapid Miner", icon: "⛏️", category: "Mining" }
  ];

  return (
    <section className="h-screen overflow-y-auto section-padding relative gradient-background-secondary">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="grid grid-cols-12 grid-rows-12 h-full w-full opacity-5">
          {[...Array(144)].map((_, i) => (
            <div key={i} className="border border-white/10"></div>
          ))}
        </div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full filter blur-[128px] opacity-30"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-primary/20 rounded-full filter blur-[100px] opacity-25"></div>
      </div>
      
      <div className="container mx-auto relative z-10 py-24">
        <div className="mb-16 text-center animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 fly-up">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto fly-up">
            Get to know more about my background, experience, and what drives my passion for data analytics.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-4 fly-up"></div>
        </div>
        
        <div className="max-w-4xl mx-auto animate-on-scroll">
          <div className="text-center mb-12 fly-up">
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Experienced Business Analyst with expertise across multiple domains, including Supply Chain, Non-Profit Organization, and finance. 
              Skilled in requirements gathering, data analysis, market research, and business intelligence tools such as Power BI, Tableau, and Python. 
              Proficient in system automation, stakeholder engagement, process mapping, and managing end-to-end system development and maintenance.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mb-8">
              Adept at translating complex data into actionable insights, managing cross-functional projects, and delivering solutions that drive business performance. 
              While my core expertise is in data, I'm a lifelong learner constantly seeking new solutions, delving into the latest technologies and tools, 
              and staying at the forefront of AI and emerging data science trends.
            </p>
          </div>

          {/* Tech Stack Section */}
          <div className="mb-16 fly-up">
            <h3 className="text-2xl font-bold text-center mb-8">My Tech Stack</h3>
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
              {techStack.map((tech, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card/80 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-3xl mb-2">{tech.icon}</div>
                  <span className="text-sm font-medium text-center">{tech.name}</span>
                  <span className="text-xs text-muted-foreground mt-1">{tech.category}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 stagger-children">
            <div className="space-y-6 animate-on-scroll">
              <div className="flex items-center gap-3 mb-4">
                <Code className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold">Programming & Analytics</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Python", "R Studio", "SQL", "VBA", "DAX"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1">{skill}</Badge>
                ))}
              </div>
            </div>

            <div className="space-y-6 animate-on-scroll">
              <div className="flex items-center gap-3 mb-4">
                <BarChart3 className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold">Visualization & BI</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Power BI", "Tableau", "IBM Watson Analytics", "Google Data Studio", "Excel"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1">{skill}</Badge>
                ))}
              </div>
            </div>

            <div className="space-y-6 animate-on-scroll">
              <div className="flex items-center gap-3 mb-4">
                <Database className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold">Database & Cloud</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Oracle", "MySQL", "MS Access", "SharePoint", "Dataverse"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1">{skill}</Badge>
                ))}
              </div>
            </div>

            <div className="space-y-6 animate-on-scroll">
              <div className="flex items-center gap-3 mb-4">
                <Settings className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold">Business & Project Management</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Agile", "Scrum", "Requirements Analysis", "Process Mapping", "Stakeholder Engagement"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1">{skill}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
