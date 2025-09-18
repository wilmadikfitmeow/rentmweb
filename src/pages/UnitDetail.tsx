import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, Bed, Bath, Square, Users, MapPin, Car } from "lucide-react";
import Header from "@/components/Header";
import unitInterior from "@/assets/unit-interior.jpg";

const UnitDetail = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "I'm interested in Unit for Rent and I'd like to know more details."
  });

  // Mock unit data - in real app this would come from API/props
  const unit = {
    id: id,
    title: "UNIT A1 - TWO FLOOR UNIT FOR RENT",
    location: "Sitio Tiaong, Antipolo City",
    price: 6500,
    mainImage: unitInterior,
    thumbnails: [unitInterior, unitInterior],
    details: {
      floors: "2 Floor Building",
      bedrooms: "2 Bedrooms", 
      comfort: "1 Comfort Room",
      sqm: "30 sqm",
      garage: "No Garage",
      monthly: "₱ 6,500 Monthly",
      furnished: "Unfurnished"
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back Navigation */}
        <div className="flex items-center space-x-2 mb-6">
          <Link to="/listings" className="flex items-center text-muted-foreground hover:text-foreground">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Listings
          </Link>
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              {unit.title}
            </h1>
            <div className="flex items-center text-muted-foreground">
              <MapPin className="h-4 w-4 mr-1" />
              {unit.location}
            </div>
          </div>
          <div className="text-3xl font-bold text-primary mt-4 md:mt-0">
            ₱{unit.price.toLocaleString()} / Monthly
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Images Section */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {/* Main Image */}
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <img 
                  src={unit.mainImage} 
                  alt={unit.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Thumbnail Images */}
              <div className="grid grid-cols-2 gap-4">
                {unit.thumbnails.map((thumb, index) => (
                  <div key={index} className="aspect-video bg-muted rounded-lg overflow-hidden">
                    <img 
                      src={thumb} 
                      alt={`${unit.title} view ${index + 1}`}
                      className="w-full h-full object-cover cursor-pointer hover:opacity-80 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Unit Details */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="text-xl">
                  {unit.title}
                </CardTitle>
                <p className="text-muted-foreground">{unit.location}</p>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-4">Description</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <span className="font-medium min-w-[100px]">Building:</span>
                      <span className="text-muted-foreground">{unit.details.floors}</span>
                    </div>
                    <div className="flex items-center">
                      <Bed className="h-4 w-4 mr-2" />
                      <span className="font-medium min-w-[100px]">Bedrooms:</span>
                      <span className="text-muted-foreground">{unit.details.bedrooms}</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-4 w-4 mr-2" />
                      <span className="font-medium min-w-[100px]">Comfort Room:</span>
                      <span className="text-muted-foreground">{unit.details.comfort}</span>
                    </div>
                    <div className="flex items-center">
                      <Square className="h-4 w-4 mr-2" />
                      <span className="font-medium min-w-[100px]">Size:</span>
                      <span className="text-muted-foreground">{unit.details.sqm}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Car className="h-4 w-4 mr-2" />
                      <span className="font-medium min-w-[100px]">Garage:</span>
                      <span className="text-muted-foreground">{unit.details.garage}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium min-w-[100px]">Rent:</span>
                      <span className="text-rental-green font-semibold">{unit.details.monthly}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium min-w-[100px]">Furnished:</span>
                      <span className="text-muted-foreground">{unit.details.furnished}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Unit Listing Inquiry</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Send
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnitDetail;