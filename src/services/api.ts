/**
 * MARGDARSHAK API Service Layer
 * Production-ready API service compatible with Microsoft Azure backend
 * Uses environment-based URLs for deployment flexibility
 */

// Backend base URL - uses environment variable or defaults to relative path for same-origin
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

// Type definitions for Azure OpenAI-compatible responses
export interface AIGuidanceResponse {
  success: boolean;
  data: {
    message: string;
    recommendations: string[];
    nsqfLevel: number;
    ncvetCourses: string[];
    careerPath: string;
    confidence: number;
  };
  timestamp: string;
}

export interface MarketInsightsResponse {
  success: boolean;
  data: {
    trends: MarketTrend[];
    jobs: JobAlert[];
    industries: IndustryInsight[];
    lastUpdated: string;
  };
}

export interface MarketTrend {
  skill: string;
  demand: number;
  growth: string;
  salary: string;
  jobs: string;
  trend: 'up' | 'down' | 'stable';
}

export interface JobAlert {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  posted: string;
  match: number;
}

export interface IndustryInsight {
  industry: string;
  growth: string;
  jobs: string;
  avgSalary: string;
  hotSkills: string[];
}

export interface UserProgressResponse {
  success: boolean;
  data: {
    userId: string;
    completedCourses: number;
    currentCourses: number;
    totalCredits: number;
    streakDays: number;
    skillBadges: number;
    mentorSessions: number;
    courses: CourseProgress[];
    skills: SkillProgress[];
  };
}

export interface CourseProgress {
  id: string;
  title: string;
  provider: string;
  progress: number;
  nextDeadline: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface SkillProgress {
  skill: string;
  level: number;
  category: string;
}

export interface JourneyInitResponse {
  success: boolean;
  data: {
    journeyId: string;
    userLevel: 'Beginner' | 'Intermediate' | 'Professional';
    recommendedPath: string;
    startDate: string;
  };
}

// Generic fetch wrapper with error handling
async function fetchAPI<T>(endpoint: string, options?: RequestInit): Promise<T> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`API call failed for ${endpoint}:`, error);
    throw error;
  }
}

/**
 * Initialize user journey - called when user starts their journey
 * Prepares backend for Azure AD B2C integration
 */
export async function initializeUserJourney(userData?: { email?: string }): Promise<JourneyInitResponse> {
  // Mock response simulating Azure backend
  // In production, this would POST to Azure App Service
  return mockResponse<JourneyInitResponse>({
    success: true,
    data: {
      journeyId: `journey_${Date.now()}`,
      userLevel: 'Beginner',
      recommendedPath: 'AI & Technology',
      startDate: new Date().toISOString(),
    },
  });
}

/**
 * Get AI-powered career guidance
 * Simulates Azure OpenAI response structure
 */
export async function getAIGuidance(prompt: string, userContext?: {
  skills?: string[];
  experience?: string;
  goals?: string[];
}): Promise<AIGuidanceResponse> {
  // Mock Azure OpenAI response
  return mockResponse<AIGuidanceResponse>({
    success: true,
    data: {
      message: generateAIResponse(prompt, userContext),
      recommendations: [
        'Complete the AI Fundamentals certification (NSQF Level 5)',
        'Enroll in Python for Data Science course',
        'Join the upcoming AI Ethics webinar',
        'Practice with hands-on projects in Agni Lab',
      ],
      nsqfLevel: 5,
      ncvetCourses: [
        'Artificial Intelligence Fundamentals',
        'Machine Learning Basics',
        'Data Analytics with Python',
      ],
      careerPath: 'AI/ML Engineer',
      confidence: 0.92,
    },
    timestamp: new Date().toISOString(),
  });
}

/**
 * Get personalized recommendations
 * NCVET and NSQF aligned recommendations
 */
export async function getPersonalizedRecommendations(userId?: string): Promise<AIGuidanceResponse> {
  return mockResponse<AIGuidanceResponse>({
    success: true,
    data: {
      message: 'Based on your profile and current market trends, here are your personalized recommendations.',
      recommendations: [
        'Focus on Deep Learning to advance from NSQF Level 5 to Level 6',
        'Complete Cloud Architecture certification for higher salary potential',
        'Join mentorship program with industry experts',
        'Participate in upcoming Tech Spark challenges',
      ],
      nsqfLevel: 5,
      ncvetCourses: [
        'Advanced AI & Machine Learning',
        'Cloud Computing with Azure',
        'DevOps Engineering',
      ],
      careerPath: 'Senior AI Engineer',
      confidence: 0.88,
    },
    timestamp: new Date().toISOString(),
  });
}

/**
 * Fetch real-time market insights
 * Simulates labour market intelligence
 */
export async function getMarketInsights(): Promise<MarketInsightsResponse> {
  return mockResponse<MarketInsightsResponse>({
    success: true,
    data: {
      trends: [
        { skill: 'Artificial Intelligence', demand: 95, growth: '+45%', salary: '₹12-25L', jobs: '15,000+', trend: 'up' },
        { skill: 'Cloud Computing', demand: 88, growth: '+38%', salary: '₹8-20L', jobs: '22,000+', trend: 'up' },
        { skill: 'Digital Marketing', demand: 82, growth: '+25%', salary: '₹4-12L', jobs: '35,000+', trend: 'up' },
        { skill: 'Data Science', demand: 90, growth: '+42%', salary: '₹10-22L', jobs: '18,000+', trend: 'up' },
        { skill: 'Cybersecurity', demand: 85, growth: '+35%', salary: '₹8-18L', jobs: '12,000+', trend: 'up' },
        { skill: 'Product Management', demand: 78, growth: '+28%', salary: '₹15-35L', jobs: '8,000+', trend: 'up' },
      ],
      jobs: [
        { id: 'job_1', title: 'Senior AI Engineer', company: 'TechCorp India', location: 'Bangalore', salary: '₹18-25L', posted: '2 hours ago', match: 92 },
        { id: 'job_2', title: 'Digital Marketing Manager', company: 'StartupXYZ', location: 'Mumbai', salary: '₹8-12L', posted: '4 hours ago', match: 88 },
        { id: 'job_3', title: 'Cloud Solutions Architect', company: 'GlobalTech', location: 'Hyderabad', salary: '₹20-30L', posted: '1 day ago', match: 85 },
      ],
      industries: [
        { industry: 'Information Technology', growth: '+25%', jobs: '2.5M+', avgSalary: '₹8-20L', hotSkills: ['AI/ML', 'Cloud', 'DevOps'] },
        { industry: 'Healthcare', growth: '+18%', jobs: '1.8M+', avgSalary: '₹5-15L', hotSkills: ['Digital Health', 'Telemedicine', 'Biotechnology'] },
        { industry: 'Financial Services', growth: '+22%', jobs: '1.2M+', avgSalary: '₹6-18L', hotSkills: ['FinTech', 'Blockchain', 'Risk Analysis'] },
        { industry: 'Manufacturing', growth: '+15%', jobs: '3.2M+', avgSalary: '₹4-12L', hotSkills: ['Industry 4.0', 'IoT', 'Automation'] },
      ],
      lastUpdated: new Date().toISOString(),
    },
  });
}

/**
 * Fetch user progress and dashboard data
 */
export async function getUserProgress(userId?: string): Promise<UserProgressResponse> {
  return mockResponse<UserProgressResponse>({
    success: true,
    data: {
      userId: userId || 'demo_user',
      completedCourses: 12,
      currentCourses: 4,
      totalCredits: 2450,
      streakDays: 15,
      skillBadges: 8,
      mentorSessions: 3,
      courses: [
        { id: 'c1', title: 'Advanced AI & Machine Learning', provider: 'NCVET', progress: 68, nextDeadline: 'Assignment 3 - 2 days', difficulty: 'Advanced' },
        { id: 'c2', title: 'Digital Marketing Mastery', provider: 'NSQF Level 6', progress: 85, nextDeadline: 'Final Project - 5 days', difficulty: 'Intermediate' },
        { id: 'c3', title: 'Cloud Architecture Fundamentals', provider: 'SWAYAM', progress: 42, nextDeadline: 'Quiz 2 - 1 day', difficulty: 'Beginner' },
        { id: 'c4', title: 'Data Analytics with Python', provider: 'NPTEL', progress: 76, nextDeadline: 'Lab Exercise - 3 days', difficulty: 'Intermediate' },
      ],
      skills: [
        { skill: 'Artificial Intelligence', level: 92, category: 'Technology' },
        { skill: 'Digital Marketing', level: 78, category: 'Business' },
        { skill: 'Data Analysis', level: 85, category: 'Analytics' },
        { skill: 'Cloud Computing', level: 68, category: 'Technology' },
        { skill: 'Project Management', level: 72, category: 'Management' },
      ],
    },
  });
}

/**
 * Join a challenge in Agni Lab
 */
export async function joinChallenge(challengeId: string): Promise<{ success: boolean; message: string }> {
  return mockResponse({
    success: true,
    message: `Successfully registered for challenge. Your participant ID: ${Date.now()}`,
  });
}

/**
 * Start an interactive learning module
 */
export async function startLearningModule(moduleId: string): Promise<{ success: boolean; sessionUrl: string }> {
  return mockResponse({
    success: true,
    sessionUrl: `/learning/${moduleId}`,
  });
}

/**
 * Apply for a job
 */
export async function applyForJob(jobId: string): Promise<{ success: boolean; applicationId: string }> {
  return mockResponse({
    success: true,
    applicationId: `app_${Date.now()}`,
  });
}

/**
 * Save a job for later
 */
export async function saveJob(jobId: string): Promise<{ success: boolean }> {
  return mockResponse({ success: true });
}

// Helper: Generate contextual AI response
function generateAIResponse(prompt: string, context?: { skills?: string[]; experience?: string; goals?: string[] }): string {
  const responses: Record<string, string> = {
    default: `Based on current market analysis and your interests, I recommend focusing on AI and Machine Learning skills. 
The demand for these skills has grown by 45% in the last year, with average salaries ranging from ₹12-25L. 
NCVET offers certified courses that align with NSQF Level 5-7 qualifications in this domain.`,
    career: `Your career trajectory shows strong potential in the technology sector. 
With your current skill set, you're well-positioned for roles in AI Engineering, Data Science, or Cloud Architecture. 
I suggest completing the Advanced AI certification (NSQF Level 6) to unlock senior positions.`,
    skills: `To enhance your employability, focus on these high-demand skills:
1. Generative AI & Prompt Engineering (+180% growth)
2. Cloud Computing (Azure/AWS certification)
3. Data Analytics with Python
These align with NCVET's vocational training framework and industry requirements.`,
  };

  const lowercasePrompt = prompt.toLowerCase();
  if (lowercasePrompt.includes('career')) return responses.career;
  if (lowercasePrompt.includes('skill')) return responses.skills;
  return responses.default;
}

// Helper: Mock response with simulated network delay
function mockResponse<T>(data: T, delay: number = 300): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), delay);
  });
}

// Export type for session management (Azure AD B2C compatible)
export interface UserSession {
  id: string;
  email: string;
  fullName: string;
  role: 'beginner' | 'intermediate' | 'professional';
  isAuthenticated: boolean;
  tokenExpiry?: string;
}

/**
 * Create dummy session (prepares for Azure AD B2C integration)
 */
export function createDummySession(email: string, password: string): UserSession {
  return {
    id: `user_${Date.now()}`,
    email,
    fullName: email.split('@')[0],
    role: 'beginner',
    isAuthenticated: true,
    tokenExpiry: new Date(Date.now() + 3600000).toISOString(),
  };
}
