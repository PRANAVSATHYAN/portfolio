
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ResumeSection = () => {
  const experience = [
    {
      title: "Senior Data Analyst",
      company: "TechCorp Solutions",
      period: "2021 - Present",
      description: [
        "Led a team of 3 analysts working on complex data projects across multiple departments",
        "Developed automated ETL pipelines saving 20+ hours of manual work weekly",
        "Created executive dashboards used by C-level executives for strategic planning",
        "Implemented A/B testing framework that improved conversion rates by 18%"
      ]
    },
    {
      title: "Data Analyst",
      company: "FinData Inc.",
      period: "2018 - 2021",
      description: [
        "Analyzed market trends and competitive landscape for investment decisions",
        "Built predictive models for customer churn with 82% accuracy",
        "Optimized SQL queries reducing report generation time by 60%",
        "Collaborated with product teams to implement data-driven features"
      ]
    },
    {
      title: "Junior Analyst",
      company: "Retail Insights Group",
      period: "2016 - 2018",
      description: [
        "Performed sales analysis and created regular performance reports",
        "Assisted in developing KPI tracking systems for multiple departments",
        "Cleaned and preprocessed large datasets for analysis",
        "Contributed to the development of the company's first customer segmentation model"
      ]
    }
  ];

  const education = [
    {
      degree: "Master of Science in Data Analytics",
      institution: "University of Data Science",
      period: "2015 - 2016",
      details: "Specialized in statistical analysis and machine learning. Thesis on predictive modeling of consumer behavior."
    },
    {
      degree: "Bachelor of Science in Statistics",
      institution: "State University",
      period: "2011 - 2015",
      details: "Minor in Computer Science. Graduated with honors."
    }
  ];

  const certifications = [
    {
      title: "Google Data Analytics Professional Certificate",
      issuer: "Google",
      date: "2022"
    },
    {
      title: "Microsoft Certified: Data Analyst Associate",
      issuer: "Microsoft",
      date: "2021"
    },
    {
      title: "Tableau Desktop Specialist",
      issuer: "Tableau",
      date: "2020"
    }
  ];

  return (
    <section id="resume" className="py-24 section-padding bg-secondary">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Resume</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="flex justify-center mb-12">
          <Button asChild size="lg" className="rounded-md">
            <a href="/resume.pdf" download>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
              Download Resume
            </a>
          </Button>
        </div>
        
        <Tabs defaultValue="experience" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-3 w-full">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
          </TabsList>
          
          <TabsContent value="experience" className="mt-6 space-y-8">
            {experience.map((job, index) => (
              <Card key={index}>
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
          
          <TabsContent value="education" className="mt-6 space-y-8">
            {education.map((edu, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{edu.degree}</CardTitle>
                      <CardDescription>{edu.institution}</CardDescription>
                    </div>
                    <span className="text-sm text-muted-foreground">{edu.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{edu.details}</p>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="certifications" className="mt-6 space-y-4">
            {certifications.map((cert, index) => (
              <Card key={index}>
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
      </div>
    </section>
  );
};

export default ResumeSection;
