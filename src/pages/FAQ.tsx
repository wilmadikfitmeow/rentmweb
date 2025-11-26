import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, FileText, Key, Search, Calendar, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

const FAQ = () => {
  const processSteps = [
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

  const faqs = [
    {
      question: "How do I apply for a unit?",
      answer: "All applications are handled directly by the property manager. Contact via email or phone to inquire about available units. There is no online application system - everything is done through direct communication."
    },
    {
      question: "What unit types are available?",
      answer: "We offer two unit types: Unit A (1 bedroom, ₱3,500/month) and Unit B (2 bedrooms, ₱6,000/month). Both types are available on the 1st and 2nd floors."
    },
    {
      question: "What are the rental requirements?",
      answer: "You'll need to provide valid ID, proof of income or employment, and references if requested. Payment terms and security deposit will be discussed directly with the property manager."
    },
    {
      question: "Can I view the units before renting?",
      answer: "Yes! Contact the property manager directly to schedule a viewing appointment. They will meet you at the property in Sitio Tiaong, Antipolo City to show you the available units."
    },
    {
      question: "What is the minimum lease term?",
      answer: "Lease terms are discussed directly with the property manager. Contact them to discuss your specific needs and preferences for rental duration."
    },
    {
      question: "What utilities are included?",
      answer: "Utility inclusions and arrangements will be discussed directly with the property manager during your inquiry. Contact them for specific details about what's included in the rent."
    },
    {
      question: "How do I pay rent?",
      answer: "Payment methods and schedules are arranged directly with the property manager. They will explain the preferred payment process during your application discussion."
    },
    {
      question: "How quickly can I move in?",
      answer: "Move-in timeline depends on unit availability and completion of the rental process with the property manager. Contact them directly to discuss your preferred move-in date."
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
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Find answers to common questions about renting these units
            </p>
          </div>
        </div>
      </section>

      {/* Rental Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Rental Process
            </h2>
            <p className="text-lg text-muted-foreground">
              Simple steps to rent directly from the property manager
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="mb-8 last:mb-0">
                  <Card className="bg-card border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6 md:p-8">
                      <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
                        <div className="flex-shrink-0">
                          <div className="bg-primary rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
                            <Icon className="h-6 w-6 md:h-8 md:w-8 text-primary-foreground" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                              Step {index + 1}
                            </span>
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold mb-3 text-card-foreground">
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {step.description}
                          </p>
                          <div className="grid md:grid-cols-2 gap-2">
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
          
          {/* Requirements Section */}
          <div className="max-w-3xl mx-auto mt-16">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Application Requirements
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h4 className="text-lg font-bold text-card-foreground mb-4">
                  What to Bring
                </h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Valid government-issued ID</li>
                  <li>• Proof of income or employment</li>
                  <li>• References (if requested)</li>
                  <li>• First month's rent and deposit</li>
                  <li>• Contact information</li>
                </ul>
              </Card>
              
              <Card className="p-6">
                <h4 className="text-lg font-bold text-card-foreground mb-4">
                  Important Notes
                </h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Applications handled in person only</li>
                  <li>• No online application system</li>
                  <li>• Direct communication with landlord</li>
                  <li>• First-come, first-served basis</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-surface-clean">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-lg shadow-sm border-0 px-6"
                >
                  <AccordionTrigger className="text-left font-semibold text-card-foreground hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
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

export default FAQ;