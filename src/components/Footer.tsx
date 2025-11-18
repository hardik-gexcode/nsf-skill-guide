import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Youtube
} from "lucide-react";
import margdarshakLogo from "@/assets/margdarshak-logo.jpg";

const Footer = () => {
  const quickLinks = [
    { name: "About Margdarshak", href: "#about" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Success Stories", href: "#success" },
    { name: "Career Guidance", href: "#guidance" },
    { name: "Contact Us", href: "#contact" }
  ];

  const programs = [
    { name: "NCVET Courses", href: "#ncvet" },
    { name: "NSQF Programs", href: "#nsqf" },
    { name: "SWAYAM Integration", href: "#swayam" },
    { name: "NPTEL Courses", href: "#nptel" },
    { name: "Industry Certifications", href: "#certifications" }
  ];

  const resources = [
    { name: "Market Intelligence", href: "#market" },
    { name: "Skill Assessment", href: "#assessment" },
    { name: "Learning Paths", href: "#paths" },
    { name: "Agni Lab", href: "#agni-lab" },
    { name: "AI Chatbot", href: "#chatbot" }
  ];

  const support = [
    { name: "Help Center", href: "#help" },
    { name: "Documentation", href: "#docs" },
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Accessibility", href: "#accessibility" }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        {/* Newsletter Section */}
        <div className="bg-gradient-hero rounded-2xl p-8 mb-16 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Stay Updated with Market Trends</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Get personalized insights, skill recommendations, and job alerts delivered to your inbox.
          </p>
          <div className="flex max-w-md mx-auto space-x-2">
            <Input 
              placeholder="Enter your email" 
              className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
            />
            <Button variant="secondary">Subscribe</Button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={margdarshakLogo} 
                alt="Margdarshak" 
                className="h-12 w-12 rounded-lg shadow-md"
              />
              <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Margdarshak
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              India's premier AI-powered career guidance platform, empowering millions of learners 
              with personalized skill development and market-aligned education.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span>support@margdarshak.in</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 1800-123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span>New Delhi, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 mt-6">
              <Button variant="ghost" size="sm" className="p-2 h-8 w-8">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 h-8 w-8">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 h-8 w-8">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 h-8 w-8">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 h-8 w-8">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold mb-4">Programs</h4>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index}>
                  <a 
                    href={program.href} 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Support */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3 mb-6">
              {resources.slice(0, 3).map((resource, index) => (
                <li key={index}>
                  <a 
                    href={resource.href} 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {support.slice(0, 3).map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            <p>© 2024 Margdarshak. All rights reserved. Powered by NCVET & AI Innovation.</p>
          </div>
          
          <div className="flex items-center space-x-6 text-sm">
            <a href="#privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#accessibility" className="text-muted-foreground hover:text-primary transition-colors">
              Accessibility
            </a>
          </div>
        </div>

        {/* Government Logos/Badges */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="text-center text-sm text-muted-foreground">
            <p className="mb-4">Recognized and supported by</p>
            <div className="flex items-center justify-center space-x-8 opacity-60">
              <div className="text-xs">
                <div className="font-medium">NCVET</div>
                <div>National Council for Vocational Education and Training</div>
              </div>
              <div className="text-xs">
                <div className="font-medium">NSQF</div>
                <div>National Skills Qualifications Framework</div>
              </div>
              <div className="text-xs">
                <div className="font-medium">Digital India</div>
                <div>Government of India Initiative</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;