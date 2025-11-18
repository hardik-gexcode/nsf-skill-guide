import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Code, 
  Palette, 
  Calculator, 
  Briefcase, 
  BookOpen, 
  Zap,
  Target,
  Award,
  TrendingUp
} from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Technology",
      description: "Programming, AI, Data Science, Cybersecurity",
      courses: 150,
      progress: 85,
      color: "bg-primary"
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Design",
      description: "UI/UX, Graphic Design, Product Design",
      courses: 95,
      progress: 72,
      color: "bg-secondary"
    },
    {
      icon: <Calculator className="h-6 w-6" />,
      title: "Finance",
      description: "Accounting, Investment, Financial Analysis",
      courses: 80,
      progress: 68,
      color: "bg-accent"
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Business",
      description: "Management, Marketing, Operations",
      courses: 120,
      progress: 90,
      color: "bg-info"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Legal",
      description: "Corporate Law, IP Rights, Compliance",
      courses: 65,
      progress: 55,
      color: "bg-warning"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Emerging Skills",
      description: "Blockchain, IoT, Green Technology",
      courses: 45,
      progress: 40,
      color: "bg-success"
    }
  ];

  const featuredPrograms = [
    {
      title: "AI & Machine Learning Specialist",
      provider: "NCVET",
      duration: "6 months",
      level: "Advanced",
      rating: 4.8,
      students: 2500
    },
    {
      title: "Digital Marketing Professional",
      provider: "NSQF Level 6",
      duration: "4 months",
      level: "Intermediate",
      rating: 4.6,
      students: 3200
    },
    {
      title: "Full Stack Web Developer",
      provider: "SWAYAM",
      duration: "8 months",
      level: "Beginner to Advanced",
      rating: 4.9,
      students: 1800
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Skills & Learning Paths
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            Explore Skills Aligned with{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Market Demands
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI analyzes real-time market data to recommend the most in-demand skills 
            and creates personalized learning paths mapped to NSQF standards.
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center text-white`}>
                    {category.icon}
                  </div>
                  <Badge variant="outline">{category.courses} courses</Badge>
                </div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
                <p className="text-muted-foreground">{category.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span>Market Demand</span>
                    <span className="font-medium">{category.progress}%</span>
                  </div>
                  <Progress value={category.progress} className="h-2" />
                  <Button variant="outline" className="w-full">
                    Explore Learning Path
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Programs */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">Featured Training Programs</h3>
            <p className="text-muted-foreground">
              Government-recognized programs with industry partnerships
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredPrograms.map((program, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary" />
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <Badge variant="outline">{program.provider}</Badge>
                      <CardTitle className="text-lg leading-tight">{program.title}</CardTitle>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1">
                        <Award className="h-4 w-4 text-accent" />
                        <span className="font-semibold">{program.rating}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-muted-foreground">Duration</div>
                      <div className="font-medium">{program.duration}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Level</div>
                      <div className="font-medium">{program.level}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <TrendingUp className="h-4 w-4" />
                      <span>{program.students} students enrolled</span>
                    </div>
                  </div>

                  <Button className="w-full" variant="hero">
                    <Target className="h-4 w-4 mr-2" />
                    Start Learning Path
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* AI Recommendations */}
        <div className="mt-16 bg-card rounded-2xl p-8 border">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                AI-Powered Skill Recommendations
              </h3>
              <p className="text-muted-foreground mb-6">
                Our intelligent system analyzes your profile, career goals, and market trends 
                to suggest the most relevant skills for your growth.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Personalized based on your background</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  <span>Aligned with industry demands</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span>Continuously updated recommendations</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-subtle rounded-xl p-6">
              <h4 className="font-semibold mb-4">Your Personalized Skills Assessment</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Data Analysis</span>
                  <Badge variant="success">92% Match</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Project Management</span>
                  <Badge variant="secondary">85% Match</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Cloud Computing</span>
                  <Badge variant="accent">78% Match</Badge>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                Take Full Assessment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;