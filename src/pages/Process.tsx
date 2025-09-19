import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, FileText, Key, Home as HomeIcon } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

const Process = () => {
  const steps = [
    {
      icon: FileText,
      title: "Submit Application",
      description: "Fill out our rental application form with your personal and employment information. We'll review your application within 24 hours.",
      details: [
        "Complete rental application",
        "Provide employment verification",
        "Submit references",
        "Background check authorization"
      ]
    },
    {
      icon: CheckCircle,
      title: "Application Review",
      description: "Our team will verify your information and conduct necessary background and credit checks to ensure qualification.",
      details: [
        "Credit score verification",
        "Employment confirmation",
        "Reference checks",
        "Previous rental history review"
      ]
    },
    {
      icon: Key,
      title: "Lease Signing",
      description: "Once approved, we'll schedule a lease signing appointment and arrange for key handover and move-in instructions.",
      details: [
        "Lease agreement review",
        "Security deposit payment",
        "First month's rent",
        "Key handover ceremony"
      ]
    },
    {
      icon: HomeIcon,
      title: "Move In",
      description: "Welcome to your new home! We'll provide a move-in checklist and ensure everything is ready for your arrival.",
      details: [
        "Property walkthrough",
        "Move-in inspection",
        "Utility setup assistance",
        "Welcome package delivery"
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
              Our Rental Process
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Simple, transparent, and efficient - discover how easy it is to rent with us
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
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="text-left">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 text-card-foreground">Documents Needed</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Valid government ID</li>
                    <li>• Proof of income (payslips)</li>
                    <li>• Employment certificate</li>
                    <li>• Previous rental references</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="text-left">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 text-card-foreground">Financial Requirements</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Security deposit (2 months)</li>
                    <li>• First month's rent</li>
                    <li>• Processing fee</li>
                    <li>• Stable monthly income</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <Link to="/listings">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4">
                Start Your Application
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;