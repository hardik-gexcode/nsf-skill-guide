import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { 
  Flame, 
  Zap, 
  Lightbulb, 
  Code, 
  Trophy, 
  Calendar,
  Clock,
  Users,
  Star,
  Rocket,
  Brain,
  Target,
  Loader2
} from "lucide-react";
import { joinChallenge, startLearningModule } from "@/services/api";

const AgniLab = () => {
  const [joiningChallengeId, setJoiningChallengeId] = useState<string | null>(null);
  const [launchingTool, setLaunchingTool] = useState<string | null>(null);
  const [startingChallenge, setStartingChallenge] = useState<string | null>(null);

  // Handler: Join challenge
  const handleJoinChallenge = async (challengeId: string, challengeTitle: string) => {
    setJoiningChallengeId(challengeId);
    try {
      const response = await joinChallenge(challengeId);
      if (response.success) {
        toast.success(`Joined: ${challengeTitle}! ${response.message}`);
      }
    } catch (error) {
      toast.error('Failed to join challenge.');
    } finally {
      setJoiningChallengeId(null);
    }
  };

  // Handler: Launch mini tool
  const handleLaunchTool = async (toolName: string) => {
    setLaunchingTool(toolName);
    try {
      const response = await startLearningModule(`tool_${toolName.toLowerCase().replace(/\s+/g, '_')}`);
      if (response.success) {
        toast.success(`Launching ${toolName}...`);
        // In production, navigate to response.sessionUrl
      }
    } catch (error) {
      toast.error('Failed to launch tool.');
    } finally {
      setLaunchingTool(null);
    }
  };

  // Handler: Start interactive challenge
  const handleStartInteractiveChallenge = async (challengeId: string, challengeTitle: string) => {
    setStartingChallenge(challengeId);
    try {
      const response = await startLearningModule(`interactive_${challengeId}`);
      if (response.success) {
        toast.success(`Starting: ${challengeTitle}`);
      }
    } catch (error) {
      toast.error('Failed to start challenge.');
    } finally {
      setStartingChallenge(null);
    }
  };

  // Handler: Boost score
  const handleBoostScore = () => {
    toast.info('Complete more challenges to boost your Agni Flame score!');
  };

  // Handler: Read more news
  const handleReadMore = (title: string) => {
    toast.info(`Opening article: ${title}`);
    // In production, navigate to article page
  };

  // Handler: Load more news
  const handleLoadMoreNews = () => {
    toast.info('Loading more knowledge bytes...');
  };

  const techSparks = [
    {
      title: "AI Innovation Challenge",
      description: "Build the next breakthrough AI application",
      deadline: "15 days",
      participants: 2500,
      prize: "₹50,000",
      difficulty: "Advanced"
    },
    {
      title: "Green Tech Hackathon",
      description: "Create sustainable technology solutions",
      deadline: "22 days", 
      participants: 1800,
      prize: "₹30,000",
      difficulty: "Intermediate"
    },
    {
      title: "FinTech Innovation",
      description: "Revolutionize financial services",
      deadline: "8 days",
      participants: 3200,
      prize: "₹75,000",
      difficulty: "Advanced"
    }
  ];

  const miniTools = [
    {
      name: "Salary Calculator",
      description: "Calculate expected salary based on skills and location",
      icon: <Target className="h-6 w-6" />,
      category: "Career"
    },
    {
      name: "Skill Gap Analyzer",
      description: "Identify gaps between current and desired skills",
      icon: <Brain className="h-6 w-6" />,
      category: "Assessment"
    },
    {
      name: "Learning Path Generator",
      description: "Create custom learning roadmaps with AI",
      icon: <Rocket className="h-6 w-6" />,
      category: "Planning"
    },
    {
      name: "Interview Prep Bot",
      description: "Practice interviews with AI-powered questions",
      icon: <Lightbulb className="h-6 w-6" />,
      category: "Preparation"
    },
    {
      name: "Resume Builder",
      description: "AI-enhanced resume creation and optimization",
      icon: <Code className="h-6 w-6" />,
      category: "Tools"
    },
    {
      name: "Market Trend Predictor",
      description: "Predict future skill demands using AI",
      icon: <Zap className="h-6 w-6" />,
      category: "Analytics"
    }
  ];

  const knowledgeBytes = [
    {
      title: "Meta Launches Advanced AI Coding Assistant",
      category: "AI & Tech",
      time: "2 hours ago",
      impact: "High",
      relevance: 92
    },
    {
      title: "India's Green Energy Sector Creates 500K New Jobs",
      category: "Sustainability",
      time: "5 hours ago",
      impact: "Medium",
      relevance: 78
    },
    {
      title: "Quantum Computing Breakthrough Opens New Career Paths", 
      category: "Emerging Tech",
      time: "1 day ago",
      impact: "High",
      relevance: 85
    },
    {
      title: "Government Announces ₹1000Cr Skill Development Fund",
      category: "Policy",
      time: "2 days ago",
      impact: "High",
      relevance: 95
    }
  ];

  const interactiveBites = [
    {
      title: "AI Ethics Quiz",
      description: "Test your knowledge of AI ethics and bias",
      duration: "5 min",
      difficulty: "Intermediate",
      points: 50
    },
    {
      title: "Blockchain Basics Challenge",
      description: "Master the fundamentals of blockchain",
      duration: "10 min", 
      difficulty: "Beginner",
      points: 75
    },
    {
      title: "Data Science Puzzle",
      description: "Solve real-world data analysis problems",
      duration: "15 min",
      difficulty: "Advanced", 
      points: 100
    }
  ];

  return (
    <section id="agni-lab" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Flame className="h-4 w-4 mr-2" />
            Agni Lab - Innovation Hub
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            Ignite Your{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Innovation Journey
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experiment, learn, and innovate with cutting-edge tools, challenges, and insights. 
            Stay ahead of the curve with our AI-powered innovation lab.
          </p>
        </div>

        <Tabs defaultValue="challenges" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="challenges">Tech Sparks</TabsTrigger>
            <TabsTrigger value="tools">Mini Tools</TabsTrigger>
            <TabsTrigger value="bytes">Knowledge Bytes</TabsTrigger>
            <TabsTrigger value="interactive">Interactive Bites</TabsTrigger>
          </TabsList>

          <TabsContent value="challenges" className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Monthly Tech Spark Challenges</h3>
              <p className="text-muted-foreground">
                Participate in innovation challenges and showcase your skills
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {techSparks.map((challenge, index) => (
                <Card key={index} className="relative overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary" />
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <Badge variant={challenge.difficulty === "Advanced" ? "destructive" : challenge.difficulty === "Intermediate" ? "secondary" : "success"}>
                          {challenge.difficulty}
                        </Badge>
                        <CardTitle className="text-lg leading-tight">{challenge.title}</CardTitle>
                        <p className="text-muted-foreground text-sm">{challenge.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-1">
                          <Trophy className="h-4 w-4 text-accent" />
                          <span className="font-semibold text-accent">{challenge.prize}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{challenge.deadline} left</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>{challenge.participants} joined</span>
                      </div>
                    </div>

                    <Button 
                      className="w-full group-hover:scale-105 transition-transform" 
                      variant="hero"
                      onClick={() => handleJoinChallenge(`challenge_${index}`, challenge.title)}
                      disabled={joiningChallengeId === `challenge_${index}`}
                    >
                      {joiningChallengeId === `challenge_${index}` ? (
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      ) : (
                        <Flame className="h-4 w-4 mr-2" />
                      )}
                      {joiningChallengeId === `challenge_${index}` ? 'Joining...' : 'Join Challenge'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Card className="inline-block p-6 bg-gradient-primary text-white">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Flame className="h-6 w-6" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-lg">Agni Flame Meter</div>
                    <div className="text-white/90">Your Innovation Score: 875/1000</div>
                  </div>
                  <Button variant="secondary" size="sm" onClick={handleBoostScore}>
                    Boost Score
                  </Button>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="tools" className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Free AI-Powered Mini Tools</h3>
              <p className="text-muted-foreground">
                Productivity tools and calculators to accelerate your career growth
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {miniTools.map((tool, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-white">
                        {tool.icon}
                      </div>
                      <Badge variant="outline">{tool.category}</Badge>
                    </div>
                    <CardTitle className="text-lg">{tool.name}</CardTitle>
                    <p className="text-muted-foreground text-sm">{tool.description}</p>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => handleLaunchTool(tool.name)}
                      disabled={launchingTool === tool.name}
                    >
                      {launchingTool === tool.name ? (
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      ) : (
                        <Zap className="h-4 w-4 mr-2" />
                      )}
                      {launchingTool === tool.name ? 'Launching...' : 'Launch Tool'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="bytes" className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Bytes of Knowledge</h3>
              <p className="text-muted-foreground">
                AI-curated news and insights tailored to your career interests
              </p>
            </div>

            <div className="space-y-4">
              {knowledgeBytes.map((byte, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge variant="outline">{byte.category}</Badge>
                          <Badge variant={byte.impact === "High" ? "destructive" : "secondary"}>
                            {byte.impact} Impact
                          </Badge>
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-accent" />
                            <span className="text-sm font-medium">{byte.relevance}% relevant</span>
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{byte.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{byte.time}</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" onClick={() => handleReadMore(byte.title)}>
                        Read More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button variant="outline" onClick={handleLoadMoreNews}>Load More News</Button>
            </div>
          </TabsContent>

          <TabsContent value="interactive" className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Interactive Learning Bites</h3>
              <p className="text-muted-foreground">
                Quick quizzes and challenges to test and expand your knowledge
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {interactiveBites.map((bite, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <Badge variant={bite.difficulty === "Advanced" ? "destructive" : bite.difficulty === "Intermediate" ? "secondary" : "success"}>
                          {bite.difficulty}
                        </Badge>
                        <CardTitle className="text-lg">{bite.title}</CardTitle>
                        <p className="text-muted-foreground text-sm">{bite.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-accent">{bite.points}</div>
                        <div className="text-xs text-muted-foreground">points</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{bite.duration}</span>
                      </div>
                    </div>

                    <Button 
                      className="w-full" 
                      variant="hero"
                      onClick={() => handleStartInteractiveChallenge(`bite_${index}`, bite.title)}
                      disabled={startingChallenge === `bite_${index}`}
                    >
                      {startingChallenge === `bite_${index}` ? (
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      ) : (
                        <Brain className="h-4 w-4 mr-2" />
                      )}
                      {startingChallenge === `bite_${index}` ? 'Starting...' : 'Start Challenge'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="p-6 bg-gradient-subtle">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Weekly Streaks</h3>
                <p className="text-muted-foreground mb-4">
                  Keep your learning momentum going! Complete daily challenges to maintain your streak.
                </p>
                <div className="flex justify-center items-center space-x-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">7</div>
                    <div className="text-sm text-muted-foreground">Day Streak</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary">425</div>
                    <div className="text-sm text-muted-foreground">Total Points</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent">12</div>
                    <div className="text-sm text-muted-foreground">Badges Earned</div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default AgniLab;