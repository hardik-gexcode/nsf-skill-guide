import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Globe, User, LogIn } from "lucide-react";
import margdarshakLogo from "@/assets/margdarshak-logo.jpg";

const Header = () => {
  const [language, setLanguage] = useState("EN");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (email: string, password: string) => {
    // Sample credentials
    if (email === "demo@margdarshak.in" && password === "demo123") {
      setUser({ name: "Demo User", email });
      setIsLoggedIn(true);
    }
  };

  const handleSignup = (name: string, email: string, password: string) => {
    setUser({ name, email });
    setIsLoggedIn(true);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img 
            src={margdarshakLogo} 
            alt="Margdarshak" 
            className="h-10 w-10 rounded-lg shadow-md"
          />
          <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Margdarshak
          </h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-foreground hover:text-primary transition-colors">
            Home
          </a>
          <a href="#skills" className="text-foreground hover:text-primary transition-colors">
            Skills
          </a>
          <a href="#market" className="text-foreground hover:text-primary transition-colors">
            Market Intelligence
          </a>
          <a href="#agni-lab" className="text-foreground hover:text-primary transition-colors">
            Agni Lab
          </a>
        </nav>

        {/* Right section */}
        <div className="flex items-center space-x-4">
          {/* Language Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLanguage(language === "EN" ? "HI" : "EN")}
            className="flex items-center space-x-1"
          >
            <Globe className="h-4 w-4" />
            <span>{language}</span>
          </Button>

          {/* Auth Section */}
          {isLoggedIn ? (
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-gradient-primary flex items-center justify-center">
                <User className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-medium">{user?.name}</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setIsLoggedIn(false);
                  setUser(null);
                }}
              >
                Logout
              </Button>
            </div>
          ) : (
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="hero" size="sm" className="flex items-center space-x-2">
                  <LogIn className="h-4 w-4" />
                  <span>Login</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle className="text-center">Welcome to Margdarshak</DialogTitle>
                </DialogHeader>
                <Tabs defaultValue="login" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="login">Login</TabsTrigger>
                    <TabsTrigger value="signup">Sign Up</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="login" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="demo@margdarshak.in" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" placeholder="demo123" />
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p>Demo credentials:</p>
                      <p>Email: demo@margdarshak.in</p>
                      <p>Password: demo123</p>
                    </div>
                    <Button 
                      className="w-full" 
                      variant="hero"
                      onClick={() => handleLogin("demo@margdarshak.in", "demo123")}
                    >
                      Login
                    </Button>
                  </TabsContent>
                  
                  <TabsContent value="signup" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Your full name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-email">Email</Label>
                      <Input id="signup-email" type="email" placeholder="your.email@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-password">Password</Label>
                      <Input id="signup-password" type="password" placeholder="Create a password" />
                    </div>
                    <Button 
                      className="w-full" 
                      variant="hero"
                      onClick={() => handleSignup("New User", "new@margdarshak.in", "newpass")}
                    >
                      Create Account
                    </Button>
                  </TabsContent>
                </Tabs>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;