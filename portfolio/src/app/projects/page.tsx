import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "CI/CD Pipeline Automation",
      description: "Designed and implemented a comprehensive CI/CD pipeline that reduced deployment time by 80% and improved system reliability. Integrated automated testing, security scanning, and deployment to multiple environments.",
      image: "/api/placeholder/400/250",
      technologies: ["Jenkins", "Docker", "AWS", "Terraform", "Kubernetes"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "Financial Dashboard & Analytics",
      description: "Built a real-time financial reporting system with automated data processing and visualization. Provided insights that led to 25% cost reduction in operational expenses.",
      image: "/api/placeholder/400/250",
      technologies: ["Power BI", "Python", "SQL", "Excel", "Tableau"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "Agile Project Management Implementation",
      description: "Implemented agile methodologies across multiple teams, improving productivity by 40%. Established best practices for sprint planning, retrospectives, and continuous improvement.",
      image: "/api/placeholder/400/250",
      technologies: ["Jira", "Confluence", "Scrum", "Kanban", "Agile"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 4,
      title: "Cloud Infrastructure Migration",
      description: "Led the migration of on-premise infrastructure to AWS cloud, reducing costs by 30% and improving scalability. Implemented infrastructure as code using Terraform.",
      image: "/api/placeholder/400/250",
      technologies: ["AWS", "Terraform", "Docker", "Ansible", "Linux"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 5,
      title: "Budget Planning & Cost Analysis",
      description: "Developed comprehensive budget planning models and cost analysis frameworks. Created automated reporting systems for financial tracking and forecasting.",
      image: "/api/placeholder/400/250",
      technologies: ["Excel", "Power BI", "Financial Modeling", "Budget Planning", "ROI Analysis"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 6,
      title: "Process Automation & Optimization",
      description: "Identified and automated manual processes, reducing processing time by 60% and eliminating human errors. Implemented monitoring and alerting systems.",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "Shell Scripting", "Jenkins", "Monitoring", "Automation"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-background py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my expertise in DevOps automation, project management, and financial optimization
          </p>
        </div>

        {/* Featured Projects */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(project => project.featured).map((project) => (
              <Card key={project.id} className="hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-muted rounded-t-lg mb-4"></div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" asChild>
                      <Link href={project.liveUrl}>View Details</Link>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <Link href={project.githubUrl}>GitHub</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* All Projects */}
        <section>
          <h2 className="text-3xl font-bold mb-8">All Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-muted rounded-t-lg mb-4"></div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" asChild>
                      <Link href={project.liveUrl}>View Details</Link>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <Link href={project.githubUrl}>GitHub</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mt-16">
          <h2 className="text-3xl font-bold mb-4">Have a Project in Mind?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            I'm always interested in new opportunities to optimize processes and drive business value.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Let's Discuss Your Project</Link>
          </Button>
        </section>
      </div>
    </div>
  );
} 