import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Bed, Bath, Square, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import unitInterior from "@/assets/unit-interior.jpg";

const Listings = () => {
  const units = [
    {
      id: "a1",
      title: "Unit A1 - TWO FLOOR UNIT",
      bedrooms: 2,
      bathrooms: 1,
      sqm: 30,
      price: 6500,
      status: "Available",
      description: "Ideal for small families",
      image: unitInterior
    },
    {
      id: "a2", 
      title: "Unit A2 - TWO FLOOR UNIT",
      bedrooms: 2,
      bathrooms: 1,
      sqm: 30,
      price: 6500,
      status: "Available",
      description: "Open CR, Kitchen, Laundry Space",
      image: unitInterior
    },
    {
      id: "a3",
      title: "Unit A3 - TWO FLOOR UNIT", 
      bedrooms: 2,
      bathrooms: 1,
      sqm: 30,
      price: 6500,
      status: "Available",
      description: "Ideal for small families",
      image: unitInterior
    },
    {
      id: "b1",
      title: "Unit B1 - TWO FLOOR UNIT",
      bedrooms: 1,
      bathrooms: 1,
      sqm: 20,
      price: 3500,
      status: "Available", 
      description: "Open CR, Kitchen, Laundry Space",
      image: unitInterior
    },
    {
      id: "b2",
      title: "Unit B2 - TWO FLOOR UNIT",
      bedrooms: 1,
      bathrooms: 1,
      sqm: 20,
      price: 3500,
      status: "Coming Soon",
      description: "Ideal for small families",
      image: unitInterior
    },
    {
      id: "b3",
      title: "Unit B3 - TWO FLOOR UNIT",
      bedrooms: 1,
      bathrooms: 1, 
      sqm: 20,
      price: 3500,
      status: "Available",
      description: "Open CR, Kitchen, Laundry Space",
      image: unitInterior
    }
  ];

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
              Simple, quiet living with spacious units and direct landlord communication.
              Text or email to inquire. First-come, first-served.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 mb-8">
            <Button variant="outline" size="sm">Unit A Available</Button>
            <Button variant="outline" size="sm">Unit B Available</Button>
            <Button variant="outline" size="sm" className="ml-auto">
              <MapPin className="h-4 w-4 mr-1" />
              Filter
            </Button>
          </div>

          {/* Units Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {units.map((unit) => (
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

          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="default" size="sm">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <Button variant="outline" size="sm">4</Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Listings;