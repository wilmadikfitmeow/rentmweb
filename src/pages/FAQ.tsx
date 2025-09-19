import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

const FAQ = () => {
  const faqs = [
    {
      question: "What is the minimum lease term?",
      answer: "Our minimum lease term is 12 months. We offer flexible lease options and can discuss shorter terms on a case-by-case basis."
    },
    {
      question: "What are the requirements to rent?",
      answer: "You need to provide proof of income, valid ID, employment verification, and references. A security deposit of 2 months' rent and first month's rent are required upfront."
    },
    {
      question: "Are pets allowed?",
      answer: "Pet policies vary by property. Some units are pet-friendly with additional pet deposits and monthly fees. Please inquire about specific pet policies for each property."
    },
    {
      question: "What utilities are included?",
      answer: "Basic utilities like water and garbage collection are typically included. Electricity, internet, and cable are usually the tenant's responsibility unless otherwise specified."
    },
    {
      question: "How quickly can I move in?",
      answer: "Once your application is approved and all requirements are met, you can typically move in within 3-5 business days after lease signing."
    },
    {
      question: "Is parking included?",
      answer: "Most properties include at least one parking space. Additional parking may be available for an extra fee depending on the property."
    },
    {
      question: "What is your maintenance policy?",
      answer: "We provide 24/7 emergency maintenance and respond to all non-emergency requests within 24-48 hours. Tenants can submit requests through our online portal."
    },
    {
      question: "Can I view the property before applying?",
      answer: "Absolutely! We encourage property viewings. You can schedule a tour by contacting us directly or through our online booking system."
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
              Find answers to common questions about our rental process and properties
            </p>
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
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Still Have Questions?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Can't find what you're looking for? Our team is here to help you with any questions about our rental properties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Contact Us
                </Button>
              </Link>
              <Link to="/listings">
                <Button size="lg" variant="outline">
                  View Properties
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