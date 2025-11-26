import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Get in touch with our team - we're here to help you find your perfect home
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-surface-clean">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                We'd Love to Hear from You
              </h2>
              <p className="text-muted-foreground text-lg">
                Can't find what you're looking for? Get in touch with the property manager directly.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-10">
              <Card className="bg-card border-0 shadow-sm">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2 text-card-foreground">Phone</h3>
                  <p className="text-sm text-foreground font-medium mb-1">0917-XXX-XXXX</p>
                  <p className="text-xs text-muted-foreground">Available 9 AM - 6 PM</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-0 shadow-sm">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2 text-card-foreground">Email</h3>
                  <p className="text-sm text-foreground font-medium mb-1">rentmindersupport@gmail.com</p>
                  <p className="text-xs text-muted-foreground">Reply within 24 hours</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-0 shadow-sm">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2 text-card-foreground">Location</h3>
                  <p className="text-sm text-foreground font-medium mb-1">Sitio Tiaong</p>
                  <p className="text-xs text-muted-foreground">Antipolo City, Rizal</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center">
              <Link to="/listings">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  View Available Units
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
