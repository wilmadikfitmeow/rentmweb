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
              Can't find what you're looking for? Contact the property manager directly for any questions about the rental units.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Contact Us
                </Button>
              </Link>
              <Link to="/listings">
                <Button size="lg" variant="outline">
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