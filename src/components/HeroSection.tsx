import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Brain, 
  TrendingUp, 
  Users, 
  Target,
  Sparkles,
  BookOpen,
  Zap
} from "lucide-react";
import { initializeUserJourney } from "@/services/api";

const HeroSection = () => {
  const navigate = useNavigate();
  
  return (
    <section id="home" className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-2">
              <Badge variant="secondary" className="mb-4">
                AI-Powered Career Guidance
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Unlock Your{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Potential
                </span>{" "}
                with Margdarshak
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Your AI-powered career navigator that creates personalized learning paths, 
                connects you with mentors, and keeps you ahead of market trends.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                variant="hero" 
                size="lg" 
                className="group"
                onClick={async () => {
                  // Initialize journey in backend before navigating
                  await initializeUserJourney();
                  navigate("/auth");
                }}
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Features
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Active Learners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">500+</div>
                <div className="text-sm text-muted-foreground">Skills Covered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="grid grid-cols-2 gap-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Card className="glow-primary hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">AI Profiling</h3>
                <p className="text-sm text-muted-foreground">
                  Intelligent analysis of your skills and career goals
                </p>
              </CardContent>
            </Card>

            <Card className="glow-accent hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Market Intelligence</h3>
                <p className="text-sm text-muted-foreground">
                  Real-time insights into industry trends and demands
                </p>
              </CardContent>
            </Card>

            <Card className="hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Mentorship</h3>
                <p className="text-sm text-muted-foreground">
                  Connect with industry experts and experienced professionals
                </p>
              </CardContent>
            </Card>

            <Card className="hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Personalized Paths</h3>
                <p className="text-sm text-muted-foreground">
                  Tailored learning journeys based on your unique profile
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* User Types Section */}
        <div className="mt-20 space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Perfect for Every Career Stage</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Whether you're just starting out, changing careers, or advancing in your field, 
              Margdarshak adapts to your unique journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Beginners</h3>
                <p className="text-muted-foreground mb-4">
                  Discover your interests and get guided through personalized career exploration
                </p>
                <ul className="text-sm space-y-2 text-left">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    Interest discovery surveys
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    Career exploration paths
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    Foundational skill building
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Mid-Career</h3>
                <p className="text-muted-foreground mb-4">
                  Enhance your existing skills and explore new opportunities in your field
                </p>
                <ul className="text-sm space-y-2 text-left">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3" />
                    Skill enhancement recommendations
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3" />
                    Career transition guidance
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3" />
                    Industry certifications
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Professionals</h3>
                <p className="text-muted-foreground mb-4">
                  Stay competitive with continuous learning and market insights
                </p>
                <ul className="text-sm space-y-2 text-left">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                    Advanced skill development
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                    Leadership training
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                    Industry networking
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;