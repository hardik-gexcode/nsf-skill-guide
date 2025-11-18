import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, 
  DollarSign, 
  Users, 
  MapPin, 
  Clock,
  ArrowUp,
  ArrowDown,
  Briefcase,
  Target,
  Zap
} from "lucide-react";

const MarketIntelligence = () => {
  const marketTrends = [
    {
      skill: "Artificial Intelligence",
      demand: 95,
      growth: "+45%",
      salary: "₹12-25L",
      jobs: "15,000+",
      trend: "up"
    },
    {
      skill: "Cloud Computing",
      demand: 88,
      growth: "+38%",
      salary: "₹8-20L", 
      jobs: "22,000+",
      trend: "up"
    },
    {
      skill: "Digital Marketing",
      demand: 82,
      growth: "+25%",
      salary: "₹4-12L",
      jobs: "35,000+",
      trend: "up"
    },
    {
      skill: "Data Science",
      demand: 90,
      growth: "+42%",
      salary: "₹10-22L",
      jobs: "18,000+",
      trend: "up"
    },
    {
      skill: "Cybersecurity",
      demand: 85,
      growth: "+35%",
      salary: "₹8-18L",
      jobs: "12,000+",
      trend: "up"
    },
    {
      skill: "Product Management",
      demand: 78,
      growth: "+28%",
      salary: "₹15-35L",
      jobs: "8,000+",
      trend: "up"
    }
  ];

  const jobAlerts = [
    {
      title: "Senior AI Engineer",
      company: "TechCorp India",
      location: "Bangalore",
      salary: "₹18-25L",
      posted: "2 hours ago",
      match: 92
    },
    {
      title: "Digital Marketing Manager",
      company: "StartupXYZ",
      location: "Mumbai",
      salary: "₹8-12L",
      posted: "4 hours ago",
      match: 88
    },
    {
      title: "Cloud Solutions Architect",
      company: "GlobalTech",
      location: "Hyderabad",
      salary: "₹20-30L",
      posted: "1 day ago",
      match: 85
    }
  ];

  const industryInsights = [
    {
      industry: "Information Technology",
      growth: "+25%",
      jobs: "2.5M+",
      avgSalary: "₹8-20L",
      hotSkills: ["AI/ML", "Cloud", "DevOps"]
    },
    {
      industry: "Healthcare",
      growth: "+18%",
      jobs: "1.8M+",
      avgSalary: "₹5-15L",
      hotSkills: ["Digital Health", "Telemedicine", "Biotechnology"]
    },
    {
      industry: "Financial Services",
      growth: "+22%",
      jobs: "1.2M+",
      avgSalary: "₹6-18L",
      hotSkills: ["FinTech", "Blockchain", "Risk Analysis"]
    },
    {
      industry: "Manufacturing",
      growth: "+15%",
      jobs: "3.2M+",
      avgSalary: "₹4-12L",
      hotSkills: ["Industry 4.0", "IoT", "Automation"]
    }
  ];

  return (
    <section id="market" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Market Intelligence
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            Real-Time{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Market Insights
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay ahead with AI-powered analysis of job market trends, salary insights, 
            and skill demands across industries.
          </p>
        </div>

        <Tabs defaultValue="trends" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="trends">Market Trends</TabsTrigger>
            <TabsTrigger value="jobs">Job Alerts</TabsTrigger>
            <TabsTrigger value="insights">Industry Insights</TabsTrigger>
            <TabsTrigger value="forecast">Forecast</TabsTrigger>
          </TabsList>

          <TabsContent value="trends" className="space-y-6">
            <div className="grid gap-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {marketTrends.map((trend, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{trend.skill}</CardTitle>
                        <div className="flex items-center space-x-1">
                          <ArrowUp className="h-4 w-4 text-success" />
                          <span className="text-sm font-medium text-success">{trend.growth}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">{trend.demand}%</div>
                          <div className="text-xs text-muted-foreground">Demand Score</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-accent">{trend.jobs}</div>
                          <div className="text-xs text-muted-foreground">Open Positions</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <DollarSign className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">{trend.salary}</span>
                        </div>
                        <Badge variant="success">High Demand</Badge>
                      </div>

                      <Button variant="outline" className="w-full">
                        View Learning Path
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="jobs" className="space-y-6">
            <div className="grid gap-4">
              {jobAlerts.map((job, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-lg font-semibold">{job.title}</h3>
                          <Badge variant="success">{job.match}% Match</Badge>
                        </div>
                        <p className="text-muted-foreground mb-2">{job.company}</p>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <DollarSign className="h-4 w-4" />
                            <span>{job.salary}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{job.posted}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">Save</Button>
                        <Button variant="hero" size="sm">Apply</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center">
              <Button variant="outline">View All Job Alerts</Button>
            </div>
          </TabsContent>

          <TabsContent value="insights" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {industryInsights.map((industry, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{industry.industry}</CardTitle>
                      <div className="flex items-center space-x-1">
                        <TrendingUp className="h-4 w-4 text-success" />
                        <span className="font-medium text-success">{industry.growth}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-2xl font-bold text-primary">{industry.jobs}</div>
                        <div className="text-sm text-muted-foreground">Available Jobs</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-accent">{industry.avgSalary}</div>
                        <div className="text-sm text-muted-foreground">Avg. Salary</div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-sm font-medium mb-2">Hot Skills:</div>
                      <div className="flex flex-wrap gap-2">
                        {industry.hotSkills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="outline">{skill}</Badge>
                        ))}
                      </div>
                    </div>

                    <Button variant="outline" className="w-full">
                      Explore {industry.industry}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="forecast" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Skills Forecast 2024-2026</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Generative AI</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 h-2 bg-success rounded-full" />
                      <span className="text-sm font-medium">+180%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Quantum Computing</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-16 h-2 bg-primary rounded-full" />
                      <span className="text-sm font-medium">+120%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Sustainable Tech</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-14 h-2 bg-secondary rounded-full" />
                      <span className="text-sm font-medium">+95%</span>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Career Opportunities</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gradient-subtle rounded-lg">
                    <div>
                      <div className="font-medium">AI Ethics Specialist</div>
                      <div className="text-sm text-muted-foreground">Emerging Role</div>
                    </div>
                    <Badge variant="success">Hot</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gradient-subtle rounded-lg">
                    <div>
                      <div className="font-medium">Metaverse Designer</div>
                      <div className="text-sm text-muted-foreground">Future Role</div>
                    </div>
                    <Badge variant="secondary">Trending</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gradient-subtle rounded-lg">
                    <div>
                      <div className="font-medium">Climate Data Analyst</div>
                      <div className="text-sm text-muted-foreground">Growing Field</div>
                    </div>
                    <Badge variant="accent">Rising</Badge>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Personalized Market Forecast</h3>
              <p className="text-muted-foreground mb-4">
                Based on your profile and interests, here's what we predict for your career path:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gradient-subtle rounded-lg">
                  <Briefcase className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <div className="font-medium">Career Growth</div>
                  <div className="text-sm text-muted-foreground">+35% opportunities</div>
                </div>
                <div className="text-center p-4 bg-gradient-subtle rounded-lg">
                  <Target className="h-8 w-8 mx-auto mb-2 text-secondary" />
                  <div className="font-medium">Skill Relevance</div>
                  <div className="text-sm text-muted-foreground">92% future-ready</div>
                </div>
                <div className="text-center p-4 bg-gradient-subtle rounded-lg">
                  <Zap className="h-8 w-8 mx-auto mb-2 text-accent" />
                  <div className="font-medium">Earning Potential</div>
                  <div className="text-sm text-muted-foreground">+40% increase</div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default MarketIntelligence;