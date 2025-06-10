
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download } from "lucide-react";

const ResumeSection = () => {
  const experience = [
    {
      title: "Business Analyst (Solutions Design and Delivery)",
      company: "Uniting Church of NSWACT, Sydney",
      period: "Nov 2022 - Present",
      description: [
        "Developed and governed Power BI solutions, including interactive dashboards, data models, and best practices.",
        "Managed SQL databases while ensuring data quality, security (RLS), and BI asset distribution.",
        "Streamlined processes and applications using Promapp, Visio, and PowerApps, and supported data migrations.",
        "Led stakeholder engagement for requirements, testing, documentation, and user training."
      ]
    },
    {
      title: "Business Analyst (Contract)",
      company: "DHL Life Sciences and Healthcare Supply Chain, Sydney",
      period: "May 2021 – Nov 2022",
      description: [
        "Coordinated full lifecycle testing, from requirements gathering to execution and reporting.",
        "Automated reporting via Excel, utilizing Power Query and VBA for efficient data presentation.",
        "Created Power BI dashboards to visualize data from diverse sources and present key insights.",
        "Managed and trained a team of 3 in test case execution and data analysis."
      ]
    },
    {
      title: "Junior Data Analyst (Internship)",
      company: "Netball Australia, Victoria",
      period: "Aug 2020 – Nov 2020",
      description: [
        "Analyzed 1000+ matches using R and Rapid Miner to uncover performance trends and deliver insights.",
        "Performed extensive data cleansing to ensure data quality and identify anomalies.",
        "Visualized and presented findings in Tableau, effectively communicating recommendations to stakeholders.",
        "Provided improvement ideas for data products and supported system/product decisions with analysis."
      ]
    }
  ];

  const education = [
    {
      degree: "Master of Business Analytics",
      institution: "Deakin University, Melbourne, Australia",
      period: "",
      details: ""
    },
    {
      degree: "Bachelor of Commerce",
      institution: "Mahatma Gandhi University, Kerala, India",
      period: "",
      details: "Major: Finance and Taxation."
    }
  ];

  const certifications = [
    {
      title: "SharePoint Admin Essentials",
      issuer: "Microsoft",
      date: "2024"
    },
    {
      title: "Power Platform Fundamentals",
      issuer: "Microsoft",
      date: "2024"
    },
    {
      title: "Watson Analytics 101",
      issuer: "IBM",
      date: "2020"
    },
    {
      title: "Python 101 for Data Science",
      issuer: "IBM",
      date: "2020"
    }
  ];

  return (
    <section id="resume" className="py-24 section-padding bg-secondary relative">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 fly-up">Professional Overview</h2>
          <div className="w-24 h-1 bg-primary mx-auto fly-up"></div>
        </div>
        
        <Tabs defaultValue="experience" className="max-w-4xl mx-auto animate-on-scroll">
          <TabsList className="grid grid-cols-3 w-full fly-up">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
          </TabsList>
          
          <TabsContent value="experience" className="mt-6 space-y-8 stagger-children">
            {experience.map((job, index) => (
              <Card key={index} className="backdrop-blur-sm bg-background/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#cc73f8]/40">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{job.title}</CardTitle>
                      <CardDescription>{job.company}</CardDescription>
                    </div>
                    <span className="text-sm text-muted-foreground">{job.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    {job.description.map((item, i) => (
                      <li key={i} className="text-muted-foreground">{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="education" className="mt-6 space-y-8 stagger-children">
            {education.map((edu, index) => (
              <Card key={index} className="backdrop-blur-sm bg-background/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#cc73f8]/40">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{edu.degree}</CardTitle>
                      <CardDescription>{edu.institution}</CardDescription>
                    </div>
                    {edu.period && <span className="text-sm text-muted-foreground">{edu.period}</span>}
                  </div>
                </CardHeader>
                {edu.details && (
                  <CardContent>
                    <p className="text-muted-foreground">{edu.details}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="certifications" className="mt-6 space-y-4 stagger-children">
            {certifications.map((cert, index) => (
              <Card key={index} className="backdrop-blur-sm bg-background/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#cc73f8]/40">
                <CardHeader className="py-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle className="text-lg">{cert.title}</CardTitle>
                      <CardDescription>{cert.issuer}</CardDescription>
                    </div>
                    <span className="text-sm text-muted-foreground">{cert.date}</span>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
        
        <div className="mt-16 text-center animate-on-scroll">
          <h3 className="text-xl md:text-2xl font-bold mb-6 fly-up">Want to know more?</h3>
          <Button asChild size="lg" className="rounded-full px-8 py-6 text-lg font-semibold bg-[#b455fd] hover:bg-[#9b30e2] border-0 text-white fly-up">
            <a href="./resume.pdf" download>
              <Download className="mr-2" />
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
