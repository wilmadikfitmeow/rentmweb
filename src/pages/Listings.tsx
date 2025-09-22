import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Bed, Bath, Square } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import unitInterior from "@/assets/unit-interior.jpg";

const Listings = () => {
  const [selectedFloor, setSelectedFloor] = useState<string>("all");

  const units = [
    {
      id: "a1",
      title: "Unit A - First Floor",
      type: "A",
      floor: "1st",
      bedrooms: 1,
      bathrooms: 1,
      sqm: 25,
      price: 3500,
      status: "Available",
      description: "Cozy single bedroom unit perfect for individuals or couples",
      image: unitInterior
    },
    {
      id: "a2",
      title: "Unit A - First Floor",
      type: "A", 
      floor: "1st",
      bedrooms: 1,
      bathrooms: 1,
      sqm: 25,
      price: 3500,
      status: "Available",
      description: "Open layout with kitchen and bathroom",
      image: unitInterior
    },
    {
      id: "a3",
      title: "Unit A - Second Floor",
      type: "A",
      floor: "2nd", 
      bedrooms: 1,
      bathrooms: 1,
      sqm: 25,
      price: 3500,
      status: "Available",
      description: "Upstairs unit with natural lighting",
      image: unitInterior
    },
    {
      id: "b1",
      title: "Unit B - First Floor",
      type: "B",
      floor: "1st",
      bedrooms: 2,
      bathrooms: 1,
      sqm: 35,
      price: 6000,
      status: "Available", 
      description: "Spacious two-bedroom unit for small families",
      image: unitInterior
    },
    {
      id: "b2",
      title: "Unit B - Second Floor",
      type: "B",
      floor: "2nd",
      bedrooms: 2,
      bathrooms: 1,
      sqm: 35,
      price: 6000,
      status: "Available",
      description: "Two-bedroom unit with elevated views",
      image: unitInterior
    },
    {
      id: "b3",
      title: "Unit B - Second Floor",
      type: "B",
      floor: "2nd",
      bedrooms: 2,
      bathrooms: 1, 
      sqm: 35,
      price: 6000,
      status: "Available",
      description: "Family-friendly unit with ample space",
      image: unitInterior
    }
  ];

  const filteredUnits = units.filter(unit => {
    if (selectedFloor === "all") return true;
    return unit.floor === selectedFloor;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-hero-gradient text-primary-foreground py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center space-x-2 text-sm mb-4">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>Unit Listing</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Unit Listing</h1>
        </div>
        <div className="absolute -bottom-5 left-0 w-full h-20 bg-accent-gradient rounded-t-[100%] opacity-40"></div>
      </section>

      {/* Listings Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Available Units for Rent - Sitio Tiaong, Antipolo City
            </h2>
            <p className="text-muted-foreground">
              Two unit types available. Contact Miss Balanong directly for inquiries and viewing appointments.
            </p>
          </div>

          {/* Unit Types Summary */}
          <div className="grid md:grid-cols-2 gap-4 mb-8 p-6 bg-surface-clean rounded-lg">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-primary mb-2">Unit A</h3>
              <p className="text-2xl font-bold text-primary mb-1">₱3,500/month</p>
              <p className="text-sm text-muted-foreground">1 bedroom • 1 bathroom • 25 sqm</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-primary mb-2">Unit B</h3>
              <p className="text-2xl font-bold text-primary mb-1">₱6,000/month</p>
              <p className="text-sm text-muted-foreground">2 bedrooms • 1 bathroom • 35 sqm</p>
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 mb-8">
            <Button 
              variant={selectedFloor === "all" ? "default" : "outline"} 
              size="sm" 
              onClick={() => setSelectedFloor("all")}
            >
              All Units
            </Button>
            <Button 
              variant={selectedFloor === "1st" ? "default" : "outline"} 
              size="sm"
              onClick={() => setSelectedFloor("1st")}
            >
              1st Floor Units
            </Button>
            <Button 
              variant={selectedFloor === "2nd" ? "default" : "outline"} 
              size="sm"
              onClick={() => setSelectedFloor("2nd")}
            >
              2nd Floor Units
            </Button>
          </div>

          {/* Units Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUnits.map((unit) => (
              <Card key={unit.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-muted relative">
                  <img 
                    src={unit.image} 
                    alt={unit.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge 
                    className={`absolute top-2 right-2 ${
                      unit.status === 'Available' ? 'bg-rental-green' : 'bg-muted'
                    }`}
                  >
                    {unit.status}
                  </Badge>
                </div>
                
                <CardContent className="p-4">
                  <h3 className="font-semibold text-card-foreground mb-2">
                    {unit.title}
                  </h3>
                  
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                    <div className="flex items-center">
                      <Bed className="h-4 w-4 mr-1" />
                      {unit.bedrooms} Bedroom(s)
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-4 w-4 mr-1" />
                      {unit.bathrooms}
                    </div>
                    <div className="flex items-center">
                      <Square className="h-4 w-4 mr-1" />
                      {unit.sqm} sqm
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-3">
                    {unit.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-rental-green">
                      ₱{unit.price.toLocaleString()}/Month
                    </div>
                    <Link to={`/unit/${unit.id}`}>
                      <Button size="sm" variant="outline">
                        View Unit
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Information */}
          <div className="mt-12 p-6 bg-surface-clean rounded-lg text-center">
            <h3 className="text-xl font-bold text-foreground mb-4">Ready to Rent?</h3>
            <p className="text-muted-foreground mb-4">
              Contact Miss Balanong directly for unit viewing and rental inquiries
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Get Contact Details
                </Button>
              </Link>
              <Link to="/process">
                <Button size="lg" variant="outline">
                  Learn About Process
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Listings;