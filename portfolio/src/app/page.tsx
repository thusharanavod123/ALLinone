import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-primary">Your Name</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            DevOps Engineer | Project Manager | Financial Analyst
          </p>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            I bridge the gap between technology, project delivery, and financial optimization. 
            Passionate about streamlining processes and driving business value through automation and strategic planning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/projects">View My Work</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                I'm a versatile professional with expertise in DevOps automation, project management, and financial analysis. 
                I help organizations optimize their operations through technology and strategic planning.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                With experience in cloud infrastructure, CI/CD pipelines, agile methodologies, and financial modeling, 
                I bring a unique perspective that combines technical excellence with business acumen.
              </p>
              <Button asChild>
                <Link href="/about">Learn More About Me</Link>
              </Button>
            </div>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">AWS</Badge>
                <Badge variant="secondary">Docker</Badge>
                <Badge variant="secondary">Kubernetes</Badge>
                <Badge variant="secondary">Jenkins</Badge>
                <Badge variant="secondary">Agile</Badge>
                <Badge variant="secondary">Jira</Badge>
                <Badge variant="secondary">Excel</Badge>
                <Badge variant="secondary">Power BI</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project 1 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>CI/CD Pipeline Automation</CardTitle>
                <CardDescription>
                  Automated deployment pipeline reducing deployment time by 80%
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Jenkins</Badge>
                  <Badge variant="outline">Docker</Badge>
                  <Badge variant="outline">AWS</Badge>
                  <Badge variant="outline">Terraform</Badge>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/projects">View Project</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Project 2 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Financial Dashboard</CardTitle>
                <CardDescription>
                  Real-time financial reporting system with automated data processing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Power BI</Badge>
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">SQL</Badge>
                  <Badge variant="outline">Excel</Badge>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/projects">View Project</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Project 3 */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Agile Project Management</CardTitle>
                <CardDescription>
                  Implemented agile methodologies improving team productivity by 40%
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Jira</Badge>
                  <Badge variant="outline">Confluence</Badge>
                  <Badge variant="outline">Scrum</Badge>
                  <Badge variant="outline">Kanban</Badge>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/projects">View Project</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild>
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl mb-8 opacity-90">
            I'm always interested in new opportunities to optimize processes and drive business value.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
