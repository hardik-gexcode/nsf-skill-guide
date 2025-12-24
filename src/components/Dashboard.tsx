import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { 
  User, 
  TrendingUp, 
  Award, 
  BookOpen, 
  Target,
  Clock,
  Star,
  Zap,
  Brain,
  MessageCircle,
  Calendar,
  Users,
  Loader2
} from "lucide-react";
import { 
  getUserProgress, 
  getPersonalizedRecommendations, 
  getAIGuidance,
  startLearningModule,
  type UserProgressResponse,
  type AIGuidanceResponse 
} from "@/services/api";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState<AIGuidanceResponse | null>(null);
  const [userProgress, setUserProgress] = useState<UserProgressResponse['data'] | null>(null);

  // Fetch user progress on mount
  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const response = await getUserProgress();
        if (response.success) {
          setUserProgress(response.data);
        }
      } catch (error) {
        console.error('Failed to fetch user progress:', error);
      }
    };
    fetchProgress();
  }, []);

  // Handler: AI Chatbot button
  const handleAIChatbot = async () => {
    setAiLoading(true);
    try {
      const response = await getAIGuidance('career guidance', {
        skills: userProgress?.skills.map(s => s.skill) || [],
        goals: ['career advancement', 'skill development'],
      });
      setAiResponse(response);
      toast.success('AI guidance generated successfully!');
    } catch (error) {
      toast.error('Failed to get AI guidance. Please try again.');
    } finally {
      setAiLoading(false);
    }
  };

  // Handler: Get Personalized Recommendations
  const handleGetRecommendations = async () => {
    setLoading(true);
    try {
      const response = await getPersonalizedRecommendations();
      if (response.success) {
        setAiResponse(response);
        toast.success('Personalized recommendations loaded!');
      }
    } catch (error) {
      toast.error('Failed to fetch recommendations.');
    } finally {
      setLoading(false);
    }
  };

  // Handler: Continue Learning
  const handleContinueLearning = async (courseId: string, courseTitle: string) => {
    try {
      const response = await startLearningModule(courseId);
      if (response.success) {
        toast.success(`Resuming: ${courseTitle}`);
        // In production, navigate to response.sessionUrl
      }
    } catch (error) {
      toast.error('Failed to start learning module.');
    }
  };

  // Handler: Start Recommended Path
  const handleStartRecommendedPath = async () => {
    setLoading(true);
    try {
      const response = await startLearningModule('recommended-path');
      if (response.success) {
        toast.success('Starting your personalized learning path!');
      }
    } catch (error) {
      toast.error('Failed to start learning path.');
    } finally {
      setLoading(false);
    }
  };

  // Use fetched data or fallback to defaults
  const userStats = {
    completedCourses: userProgress?.completedCourses || 12,
    currentCourses: userProgress?.currentCourses || 4,
    totalCredits: userProgress?.totalCredits || 2450,
    streakDays: userProgress?.streakDays || 15,
    skillBadges: userProgress?.skillBadges || 8,
    mentorSessions: userProgress?.mentorSessions || 3
  };

  const currentCourses = [
    {
      title: "Advanced AI & Machine Learning",
      provider: "NCVET",
      progress: 68,
      nextDeadline: "Assignment 3 - 2 days",
      difficulty: "Advanced"
    },
    {
      title: "Digital Marketing Mastery",
      provider: "NSQF Level 6",
      progress: 85,
      nextDeadline: "Final Project - 5 days",
      difficulty: "Intermediate"
    },
    {
      title: "Cloud Architecture Fundamentals",
      provider: "SWAYAM",
      progress: 42,
      nextDeadline: "Quiz 2 - 1 day",
      difficulty: "Beginner"
    },
    {
      title: "Data Analytics with Python",
      provider: "NPTEL",
      progress: 76,
      nextDeadline: "Lab Exercise - 3 days",
      difficulty: "Intermediate"
    }
  ];

  const skillProgress = [
    { skill: "Artificial Intelligence", level: 92, category: "Technology" },
    { skill: "Digital Marketing", level: 78, category: "Business" },
    { skill: "Data Analysis", level: 85, category: "Analytics" },
    { skill: "Cloud Computing", level: 68, category: "Technology" },
    { skill: "Project Management", level: 72, category: "Management" }
  ];

  const earnedBadges = [
    { name: "AI Expert", description: "Completed 5 AI courses", date: "2 days ago", rarity: "rare" },
    { name: "Quick Learner", description: "Finished course in record time", date: "1 week ago", rarity: "common" },
    { name: "Mentor's Choice", description: "Highly rated by mentor", date: "2 weeks ago", rarity: "epic" },
    { name: "Data Master", description: "Mastered data analysis", date: "3 weeks ago", rarity: "rare" }
  ];

  const upcomingEvents = [
    {
      title: "AI Ethics Webinar",
      type: "Live Session",
      date: "Tomorrow, 3:00 PM",
      attendees: 245
    },
    {
      title: "Career Guidance Session",
      type: "Mentorship",
      date: "Friday, 4:00 PM",
      attendees: 1
    },
    {
      title: "Tech Innovation Challenge",
      type: "Competition",
      date: "Next Week",
      attendees: 1200
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome back, Demo User!</h1>
              <p className="text-muted-foreground">Continue your learning journey and achieve your goals.</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" onClick={handleAIChatbot} disabled={aiLoading}>
                {aiLoading ? (
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                ) : (
                  <MessageCircle className="h-4 w-4 mr-2" />
                )}
                AI Chatbot (50 credits)
              </Button>
              <Button variant="hero" onClick={handleGetRecommendations} disabled={loading}>
                {loading ? (
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                ) : (
                  <Brain className="h-4 w-4 mr-2" />
                )}
                Get Personalized Recommendations
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-primary">{userStats.completedCourses}</div>
              <div className="text-sm text-muted-foreground">Courses Completed</div>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-secondary">{userStats.totalCredits}</div>
              <div className="text-sm text-muted-foreground">Total Credits</div>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-accent">{userStats.streakDays}</div>
              <div className="text-sm text-muted-foreground">Day Streak</div>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-success">{userStats.skillBadges}</div>
              <div className="text-sm text-muted-foreground">Skill Badges</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="courses" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="courses">Current Courses</TabsTrigger>
            <TabsTrigger value="skills">Skills Progress</TabsTrigger>
            <TabsTrigger value="badges">Achievements</TabsTrigger>
            <TabsTrigger value="calendar">Upcoming</TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {currentCourses.map((course, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <Badge variant="outline">{course.provider}</Badge>
                        <CardTitle className="text-lg leading-tight">{course.title}</CardTitle>
                      </div>
                      <Badge variant={course.difficulty === "Advanced" ? "destructive" : course.difficulty === "Intermediate" ? "secondary" : "success"}>
                        {course.difficulty}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Progress</span>
                        <span className="font-medium">{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{course.nextDeadline}</span>
                      </div>
                    </div>

                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => handleContinueLearning(`course_${index}`, course.title)}
                    >
                      Continue Learning
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="skills" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-xl font-bold">Your Skill Portfolio</h3>
                {skillProgress.map((skill, index) => (
                  <Card key={index} className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <div className="font-medium">{skill.skill}</div>
                        <div className="text-sm text-muted-foreground">{skill.category}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">{skill.level}%</div>
                        <div className="text-xs text-muted-foreground">Proficiency</div>
                      </div>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </Card>
                ))}
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-bold">Recommended Next Steps</h3>
                <Card className="p-6 bg-gradient-subtle">
                  <h4 className="font-semibold mb-4">AI Skill Enhancement Plan</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Deep Learning Specialization</span>
                      <Badge variant="success">High Priority</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Natural Language Processing</span>
                      <Badge variant="secondary">Medium Priority</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Computer Vision</span>
                      <Badge variant="outline">Low Priority</Badge>
                    </div>
                  </div>
                  <Button variant="hero" className="w-full mt-4" onClick={handleStartRecommendedPath} disabled={loading}>
                    {loading ? 'Starting...' : 'Start Recommended Path'}
                  </Button>
                </Card>

                <Card className="p-6">
                  <h4 className="font-semibold mb-4">Market Alignment Score</h4>
                  <div className="text-center mb-4">
                    <div className="text-4xl font-bold text-success">92%</div>
                    <div className="text-sm text-muted-foreground">Your skills match current market demands</div>
                  </div>
                  <Button variant="outline" className="w-full">
                    View Detailed Analysis
                  </Button>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="badges" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {earnedBadges.map((badge, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                      badge.rarity === "epic" ? "bg-gradient-primary" : 
                      badge.rarity === "rare" ? "bg-gradient-secondary" : 
                      "bg-muted"
                    }`}>
                      <Award className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">{badge.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{badge.description}</p>
                    <div className="text-xs text-muted-foreground">Earned {badge.date}</div>
                    <Badge 
                      variant={badge.rarity === "epic" ? "destructive" : badge.rarity === "rare" ? "secondary" : "outline"}
                      className="mt-2"
                    >
                      {badge.rarity}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="p-6 bg-gradient-primary text-white">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Achievement Progress</h3>
                <p className="text-white/90 mb-4">You're on track to unlock amazing rewards!</p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">8/10</div>
                    <div className="text-sm text-white/80">Expert Badges</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">3/5</div>
                    <div className="text-sm text-white/80">Mentor Reviews</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">15/30</div>
                    <div className="text-sm text-white/80">Day Streak</div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="calendar" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-xl font-bold">Upcoming Events</h3>
                {upcomingEvents.map((event, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <Badge variant="outline">{event.type}</Badge>
                          </div>
                          <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4" />
                              <span>{event.date}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Users className="h-4 w-4" />
                              <span>{event.attendees} attending</span>
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Join
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-bold">Today's Learning Goal</h3>
                <Card className="p-6">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="h-10 w-10 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2">Complete 2 Learning Modules</h4>
                    <p className="text-muted-foreground mb-4">You're 1 module away from your daily goal!</p>
                    <Progress value={50} className="mb-4" />
                    <Button variant="hero" className="w-full">
                      Continue Learning
                    </Button>
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-subtle">
                  <h4 className="font-semibold mb-4">Weekly Insights</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Learning Hours</span>
                      <span className="font-medium">12.5 hrs</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Courses Progressed</span>
                      <span className="font-medium">4 courses</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Skill Points Earned</span>
                      <span className="font-medium">+285 pts</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Dashboard;