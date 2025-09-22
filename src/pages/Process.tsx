import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, FileText, Key, Search, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

const Process = () => {
  const steps = [
    {
      icon: Search,
      title: "Browse Available Units",
      description: "View our two unit types and check availability on our website.",
      details: [
        "Unit A - ₱3,500/month (1 bedroom)",
        "Unit B - ₱6,000/month (2 bedrooms)", 
        "Filter by floor preference",
        "See unit specifications and photos"
      ]
    },
    {
      icon: Calendar,
      title: "Contact Property Manager",
      description: "Reach out directly via email or phone to inquire about units.",
      details: [
        "Send email inquiry or call directly",
        "Specify which unit type interests you",
        "Ask about current availability",
        "Request viewing appointment"
      ]
    },
    {
      icon: FileText,
      title: "Schedule Unit Viewing",
      description: "Arrange a convenient time to visit and inspect the unit in person.",
      details: [
        "Meet at the property in Sitio Tiaong",
        "Inspect the unit thoroughly",
        "Ask questions about the rental terms",
        "Discuss move-in timeline"
      ]
    },
    {
      icon: CheckCircle,
      title: "Direct Application Process",
      description: "Complete the rental application directly with the property manager.",
      details: [
        "Provide required documents in person",
        "Submit proof of income and ID",
        "Give references if requested",
        "Discuss payment terms"
      ]
    },
    {
      icon: Key,
      title: "Move-In Arrangement",
      description: "Finalize the lease agreement and receive your keys!",
      details: [
        "Sign lease agreement directly",
        "Pay security deposit and first month",
        "Receive keys from property manager",
        "Begin your tenancy"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Rental Process
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Simple steps to rent directly from the property manager
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-surface-clean">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="mb-12 last:mb-0">
                  <Card className="bg-card border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row items-start gap-6">
                        <div className="flex-shrink-0">
                          <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center">
                            <Icon className="h-8 w-8 text-primary-foreground" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-4">
                            <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                              Step {index + 1}
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold mb-4 text-card-foreground">
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                            {step.description}
                          </p>
                          <div className="grid md:grid-cols-2 gap-3">
                            {step.details.map((detail, detailIndex) => (
                              <div key={detailIndex} className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-rental-green flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">{detail}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Application Requirements
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-card-foreground mb-4">
                  What to Bring
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Valid government-issued ID</li>
                  <li>• Proof of income or employment</li>
                  <li>• References (if requested)</li>
                  <li>• First month's rent and deposit</li>
                  <li>• Contact information</li>
                </ul>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-xl font-bold text-card-foreground mb-4">
                  Important Notes
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Applications handled in person only</li>
                  <li>• No online application system</li>
                  <li>• Direct communication with landlord</li>
                  <li>• First-come, first-served basis</li>
                </ul>
              </Card>
            </div>
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Get Contact Information
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;