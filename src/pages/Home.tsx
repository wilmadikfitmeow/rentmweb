import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, MessageSquare, Home as HomeIcon } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import heroProperty from "@/assets/hero-property.jpg";

const Home = () => {
  const steps = [
    {
      icon: Search,
      title: "View available rental homes in our neighborhood",
      description: "Take a look at the houses currently available for rent in our residential area.",
    },
    {
      icon: MessageSquare,
      title: "Send an inquiry for the house you're interested in",
      description: "Let us know which house you would like more info on and we'll get back to you promptly.",
    },
    {
      icon: HomeIcon,
      title: "Move into your new home with ease",
      description: "Once everything is confirmed, get ready for a smooth and hassle-free move-in.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-hero-gradient text-primary-foreground py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: `url(${heroProperty})` }}
        />
        <div className="absolute inset-0 bg-primary/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Find Your Perfect Home
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Discover quality rental units in Sitio Tiaong, Antipolo City
            </p>
            <Link to="/listings">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                View Available Units
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -bottom-10 left-0 w-full h-32 bg-accent-gradient rounded-t-[100%] opacity-30"></div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-surface-clean">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Find Your Dream House as Easy as 1,2,3
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="text-center bg-card border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="bg-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                      <Icon className="h-8 w-8 text-accent-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold mb-4 text-card-foreground">
                      {index + 1}. {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Looking for the new home?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              We have a space that for you! This well-built, maintained house is visited by renters like you.
            </p>
            <Link to="/listings">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-accent py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-primary rounded-lg p-2">
                  <HomeIcon className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-lg font-bold text-accent-foreground">RentMinder</span>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2 text-accent-foreground">Contact</h3>
              <p className="text-accent-foreground/80">0917-XXX-XXXX</p>
              <p className="text-accent-foreground/80">Email: rentmindersupport@gmail.com</p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2 text-accent-foreground">Location</h3>
              <p className="text-accent-foreground/80">Sitio Tiaong, Antipolo City</p>
            </div>
          </div>
          
          <div className="border-t border-accent-foreground/20 mt-8 pt-4 text-center">
            <p className="text-accent-foreground/60 text-sm">© 2024 RentMinder. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;