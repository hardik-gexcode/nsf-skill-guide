import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Globe, User, LogIn } from "lucide-react";
import margdarshakLogo from "@/assets/margdarshak-logo.jpg";
import { toast } from "sonner";

const Header = () => {
  const [language, setLanguage] = useState("EN");
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error("Error signing out");
    } else {
      toast.success("Signed out successfully");
      setUser(null);
    }
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
          {user ? (
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-gradient-primary flex items-center justify-center">
                <User className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-medium">
                {user.user_metadata?.full_name || user.email}
              </span>
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          ) : (
            <Button 
              variant="hero" 
              size="sm" 
              className="flex items-center space-x-2"
              onClick={() => navigate("/auth")}
            >
              <LogIn className="h-4 w-4" />
              <span>Login</span>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;