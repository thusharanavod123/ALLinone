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
            Passionate developer with a love for creating meaningful digital experiences
          </p>
        </div>

        {/* Story Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">My Story</h2>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              I started my journey in web development with a curiosity about how things work on the internet. 
              What began as a hobby quickly turned into a passion, and now I'm fortunate enough to do what I love for a living.
            </p>
            <p>
              I believe in writing clean, maintainable code and creating user experiences that are both beautiful and functional. 
              Every project is an opportunity to learn something new and push the boundaries of what's possible.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or sharing knowledge with the developer community. I'm always excited to take on new challenges and collaborate with amazing people.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Frontend */}
            <Card>
              <CardHeader>
                <CardTitle>Frontend Development</CardTitle>
                <CardDescription>Modern web technologies and frameworks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">HTML5</Badge>
                  <Badge variant="secondary">CSS3</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                  <Badge variant="secondary">shadcn/ui</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Backend */}
            <Card>
              <CardHeader>
                <CardTitle>Backend Development</CardTitle>
                <CardDescription>Server-side technologies and databases</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">Express.js</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
                  <Badge variant="secondary">REST APIs</Badge>
                  <Badge variant="secondary">GraphQL</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Tools */}
            <Card>
              <CardHeader>
                <CardTitle>Tools & Platforms</CardTitle>
                <CardDescription>Development tools and deployment platforms</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Git</Badge>
                  <Badge variant="secondary">GitHub</Badge>
                  <Badge variant="secondary">Vercel</Badge>
                  <Badge variant="secondary">Docker</Badge>
                  <Badge variant="secondary">VS Code</Badge>
                  <Badge variant="secondary">Figma</Badge>
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
                  <Badge variant="secondary">UI/UX Design</Badge>
                  <Badge variant="secondary">Responsive Design</Badge>
                  <Badge variant="secondary">Performance Optimization</Badge>
                  <Badge variant="secondary">SEO</Badge>
                  <Badge variant="secondary">Testing</Badge>
                  <Badge variant="secondary">Agile/Scrum</Badge>
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
                <CardTitle>Senior Full Stack Developer</CardTitle>
                <CardDescription>Tech Company • 2022 - Present</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Leading development of web applications using React, Next.js, and Node.js. 
                  Collaborating with cross-functional teams to deliver high-quality products.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Frontend Developer</CardTitle>
                <CardDescription>Digital Agency • 2020 - 2022</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Built responsive websites and web applications for various clients. 
                  Worked with modern frameworks and ensured optimal user experience.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Junior Developer</CardTitle>
                <CardDescription>Startup • 2019 - 2020</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Started my professional journey working on small projects and learning 
                  from experienced developers. Gained foundational knowledge in web development.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in Working Together?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            I'm always open to discussing new opportunities and exciting projects.
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