import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-background py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            DevOps Engineer, Project Manager, and Financial Analyst with a passion for process optimization
          </p>
        </div>

        {/* Story Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">My Story</h2>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              I started my career with a fascination for how technology can streamline business operations. 
              What began as a focus on automation quickly evolved into a comprehensive understanding of DevOps, 
              project management, and financial analysis.
            </p>
            <p>
              I believe in creating efficient, scalable solutions that not only solve technical challenges 
              but also drive measurable business value. Every project is an opportunity to optimize processes 
              and improve organizational performance.
            </p>
            <p>
              When I'm not optimizing systems or managing projects, you can find me exploring new automation tools, 
              contributing to process improvement initiatives, or analyzing financial data to identify optimization opportunities.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* DevOps */}
            <Card>
              <CardHeader>
                <CardTitle>DevOps & Infrastructure</CardTitle>
                <CardDescription>Cloud platforms, automation, and infrastructure management</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">AWS</Badge>
                  <Badge variant="secondary">Azure</Badge>
                  <Badge variant="secondary">Docker</Badge>
                  <Badge variant="secondary">Kubernetes</Badge>
                  <Badge variant="secondary">Jenkins</Badge>
                  <Badge variant="secondary">GitLab CI/CD</Badge>
                  <Badge variant="secondary">Terraform</Badge>
                  <Badge variant="secondary">Ansible</Badge>
                  <Badge variant="secondary">Linux</Badge>
                  <Badge variant="secondary">Shell Scripting</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Project Management */}
            <Card>
              <CardHeader>
                <CardTitle>Project Management</CardTitle>
                <CardDescription>Agile methodologies and project management tools</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Agile</Badge>
                  <Badge variant="secondary">Scrum</Badge>
                  <Badge variant="secondary">Kanban</Badge>
                  <Badge variant="secondary">Jira</Badge>
                  <Badge variant="secondary">Confluence</Badge>
                  <Badge variant="secondary">Trello</Badge>
                  <Badge variant="secondary">Asana</Badge>
                  <Badge variant="secondary">MS Project</Badge>
                  <Badge variant="secondary">Risk Management</Badge>
                  <Badge variant="secondary">Stakeholder Management</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Finance */}
            <Card>
              <CardHeader>
                <CardTitle>Financial Analysis</CardTitle>
                <CardDescription>Financial modeling, reporting, and analysis tools</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Excel</Badge>
                  <Badge variant="secondary">Power BI</Badge>
                  <Badge variant="secondary">Tableau</Badge>
                  <Badge variant="secondary">SQL</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">Financial Modeling</Badge>
                  <Badge variant="secondary">Budget Planning</Badge>
                  <Badge variant="secondary">Cost Analysis</Badge>
                  <Badge variant="secondary">ROI Analysis</Badge>
                  <Badge variant="secondary">QuickBooks</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Other */}
            <Card>
              <CardHeader>
                <CardTitle>Other Skills</CardTitle>
                <CardDescription>Additional areas of expertise</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Process Optimization</Badge>
                  <Badge variant="secondary">Automation</Badge>
                  <Badge variant="secondary">Data Analysis</Badge>
                  <Badge variant="secondary">Business Intelligence</Badge>
                  <Badge variant="secondary">Change Management</Badge>
                  <Badge variant="secondary">Team Leadership</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Senior DevOps Engineer</CardTitle>
                <CardDescription>Tech Company • 2022 - Present</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Leading DevOps initiatives including CI/CD pipeline automation, infrastructure as code, 
                  and cloud migration projects. Reduced deployment time by 80% and improved system reliability.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Project Manager</CardTitle>
                <CardDescription>Consulting Firm • 2020 - 2022</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Managed multiple technology projects using Agile methodologies. Improved team productivity by 40% 
                  and delivered projects 15% under budget while maintaining quality standards.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Financial Analyst</CardTitle>
                <CardDescription>Financial Services • 2018 - 2020</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Conducted financial analysis, created automated reporting dashboards, and provided insights 
                  that led to 25% cost reduction in operational expenses.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in Working Together?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            I'm always open to discussing new opportunities to optimize processes and drive business value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Get In Touch</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/projects">View My Work</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
} 