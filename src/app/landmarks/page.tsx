"use client";

import { MapPin, ExternalLink, Search } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { BackToTop } from "@/components/BackToTop";
import { ShareButton } from "@/components/ShareButton";

const landmarks = [
  {
    id: "library",
    name: "Hezekiah Oluwasanmi Library",
    category: "Academic",
    description: "Main university library with extensive collection and study spaces",
    mapsUrl: "https://maps.google.com/?q=Hezekiah+Oluwasanmi+Library+OAU+Ile-Ife",
  },
  {
    id: "admissions",
    name: "Admissions Office",
    category: "Administrative",
    description: "Handles all admission-related matters and inquiries",
    mapsUrl: "https://maps.google.com/?q=OAU+Admissions+Office+Ile-Ife",
  },
  {
    id: "bursary",
    name: "Bursary Department",
    category: "Administrative",
    description: "Fee payment, receipts, and financial matters",
    mapsUrl: "https://maps.google.com/?q=OAU+Bursary+Department+Ile-Ife",
  },
  {
    id: "registry",
    name: "Registry",
    category: "Administrative",
    description: "Student records, transcripts, and academic documentation",
    mapsUrl: "https://maps.google.com/?q=OAU+Registry+Ile-Ife",
  },
  {
    id: "student-affairs",
    name: "Dean of Student Affairs",
    category: "Administrative",
    description: "Student welfare, discipline, and general student matters",
    mapsUrl: "https://maps.google.com/?q=OAU+Student+Affairs+Ile-Ife",
  },
  {
    id: "health-centre",
    name: "University Health Centre",
    category: "Services",
    description: "Medical services, health screening, and emergency care",
    mapsUrl: "https://maps.google.com/?q=OAU+Health+Centre+Ile-Ife",
  },
  {
    id: "ict-centre",
    name: "ICT Centre",
    category: "Academic",
    description: "Computer labs, internet services, and technical support",
    mapsUrl: "https://maps.google.com/?q=OAU+ICT+Centre+Ile-Ife",
  },
  {
    id: "amphitheatre",
    name: "Oduduwa Hall (Amphitheatre)",
    category: "Academic",
    description: "Large lecture hall for major events and lectures",
    mapsUrl: "https://maps.google.com/?q=Oduduwa+Hall+OAU+Ile-Ife",
  },
  {
    id: "bookshop",
    name: "University Bookshop",
    category: "Services",
    description: "Textbooks, stationery, and academic materials",
    mapsUrl: "https://maps.google.com/?q=OAU+Bookshop+Ile-Ife",
  },
  {
    id: "sports-complex",
    name: "Sports Complex",
    category: "Recreation",
    description: "Sporting facilities and recreational activities",
    mapsUrl: "https://maps.google.com/?q=OAU+Sports+Complex+Ile-Ife",
  },
  {
    id: "post-office",
    name: "University Post Office",
    category: "Services",
    description: "Postal services and package delivery",
    mapsUrl: "https://maps.google.com/?q=OAU+Post+Office+Ile-Ife",
  },
  {
    id: "security",
    name: "Security Unit",
    category: "Services",
    description: "Campus security and lost/found items",
    mapsUrl: "https://maps.google.com/?q=OAU+Security+Unit+Ile-Ife",
  },
  {
    id: "chapel",
    name: "University Chapel",
    category: "Religious",
    description: "Christian religious services and activities",
    mapsUrl: "https://maps.google.com/?q=OAU+Chapel+Ile-Ife",
  },
  {
    id: "mosque",
    name: "University Mosque",
    category: "Religious",
    description: "Islamic religious services and activities",
    mapsUrl: "https://maps.google.com/?q=OAU+Mosque+Ile-Ife",
  },
  {
    id: "bank",
    name: "Campus Banks",
    category: "Services",
    description: "Banking services and ATM facilities",
    mapsUrl: "https://maps.google.com/?q=Banks+OAU+Ile-Ife",
  },
  {
    id: "cafeteria",
    name: "University Cafeteria",
    category: "Services",
    description: "Affordable meals and snacks for students",
    mapsUrl: "https://maps.google.com/?q=OAU+Cafeteria+Ile-Ife",
  },
  // Lecture Halls/Theatres
  {
    id: "odlt-1",
    name: "Oduduwa Lecture Theatre I (ODLT I)",
    category: "Academic",
    description: "Large main lecture hall in Oduduwa Hall",
    mapsUrl: "https://maps.google.com/?q=Oduduwa+Lecture+Theatre+I+OAU+Ile-Ife",
  },
  {
    id: "odlt-2",
    name: "Oduduwa Lecture Theatre II (ODLT II)",
    category: "Academic",
    description: "Secondary large lecture hall in Oduduwa Hall",
    mapsUrl: "https://maps.google.com/?q=Oduduwa+Lecture+Theatre+II+OAU+Ile-Ife",
  },
  {
    id: "humanities-1000",
    name: "1000-Seater Lecture Theatre",
    category: "Academic",
    description: "Very large capacity hall in Humanities Building I",
    mapsUrl: "https://maps.google.com/?q=1000+Seater+Lecture+Theatre+Humanities+OAU+Ile-Ife",
  },
  {
    id: "humanities-lt1",
    name: "Lecture Theatre I – Humanities Blk I",
    category: "Academic",
    description: "Standard lecture theatre in Humanities Building I",
    mapsUrl: "https://maps.google.com/?q=Lecture+Theatre+I+Humanities+Building+OAU+Ile-Ife",
  },
  {
    id: "humanities-lt2",
    name: "Lecture Theatre II – Humanities Blk I",
    category: "Academic",
    description: "Medium-sized lecture theatre in Humanities Building I",
    mapsUrl: "https://maps.google.com/?q=Lecture+Theatre+II+Humanities+Building+OAU+Ile-Ife",
  },
  {
    id: "agriculture-lta",
    name: "Agriculture Lecture Theatre A",
    category: "Academic",
    description: "Large lecture hall for Agriculture courses",
    mapsUrl: "https://maps.google.com/?q=Agriculture+Lecture+Theatre+A+OAU+Ile-Ife",
  },
  {
    id: "agriculture-ltb",
    name: "Agriculture Lecture Theatre B",
    category: "Academic",
    description: "Adjacent hall for Agriculture in Faculty of Agriculture",
    mapsUrl: "https://maps.google.com/?q=Agriculture+Lecture+Theatre+B+OAU+Ile-Ife",
  },
  {
    id: "chem-eng-lta",
    name: "Chemical Engineering Lecture Theatre A",
    category: "Academic",
    description: "For Chemical Engineering lectures in Faculty of Engineering/Technology",
    mapsUrl: "https://maps.google.com/?q=Chemical+Engineering+Lecture+Theatre+A+OAU+Ile-Ife",
  },
  {
    id: "chem-eng-ltb",
    name: "Chemical Engineering Lecture Theatre B",
    category: "Academic",
    description: "Secondary hall for Chemical Engineering in Faculty of Engineering/Technology",
    mapsUrl: "https://maps.google.com/?q=Chemical+Engineering+Lecture+Theatre+B+OAU+Ile-Ife",
  },
  {
    id: "bio-sciences-lt",
    name: "Biological Sciences Lecture Theatre (BOOA/B/C)",
    category: "Academic",
    description: "Lecture halls for Biological Sciences in Biological Sciences complex",
    mapsUrl: "https://maps.google.com/?q=Biological+Sciences+Lecture+Theatre+OAU+Ile-Ife",
  },
  {
    id: "science-amphitheatre",
    name: "Faculty of Science Amphitheatre",
    category: "Academic",
    description: "Tiered lecture hall in Faculty of Science Building",
    mapsUrl: "https://maps.google.com/?q=Faculty+of+Science+Amphitheatre+OAU+Ile-Ife",
  },
  {
    id: "law-lt",
    name: "Faculty of Law Lecture Theatre",
    category: "Academic",
    description: "Law faculty major lecture space",
    mapsUrl: "https://maps.google.com/?q=Faculty+of+Law+Lecture+Theatre+OAU+Ile-Ife",
  },
  {
    id: "pharmacy-lt",
    name: "Pharmacy Lecture Theatre",
    category: "Academic",
    description: "Pharmacy students' lecture hall in Faculty of Pharmacy",
    mapsUrl: "https://maps.google.com/?q=Pharmacy+Lecture+Theatre+OAU+Ile-Ife",
  },
  {
    id: "postgrad-lt",
    name: "Postgraduate College Lecture Theatre",
    category: "Academic",
    description: "For postgraduate seminars & lectures in Postgraduate College Building",
    mapsUrl: "https://maps.google.com/?q=Postgraduate+College+Lecture+Theatre+OAU+Ile-Ife",
  },
  {
    id: "mech-civil-lt",
    name: "Engineering LT – Mechanical/Civil Wing",
    category: "Academic",
    description: "For Mechanical & Civil Engineering students in Faculty of Engineering/Technology",
    mapsUrl: "https://maps.google.com/?q=Engineering+Mechanical+Civil+Lecture+Theatre+OAU+Ile-Ife",
  },
  {
    id: "african-studies-lt",
    name: "African Studies 100-Seater Lecture Theatre",
    category: "Academic",
    description: "Small/medium lecture hall in African Studies Complex",
    mapsUrl: "https://maps.google.com/?q=African+Studies+Lecture+Theatre+OAU+Ile-Ife",
  },
  {
    id: "first-bank-lt",
    name: "First Bank Lecture Theatre",
    category: "Academic",
    description: "Lecture hall sponsored/named First Bank",
    mapsUrl: "https://maps.google.com/?q=First+Bank+Lecture+Theatre+OAU+Ile-Ife",
  },
  {
    id: "admin-firstbank-lt",
    name: "Administration (1st Bank) Lecture Theatre",
    category: "Academic",
    description: "Administrative building's lecture hall in Admin Building Extension",
    mapsUrl: "https://maps.google.com/?q=Administration+First+Bank+Lecture+Theatre+OAU+Ile-Ife",
  },
  {
    id: "health-sciences-lta",
    name: "Health Sciences Lecture Theatre A",
    category: "Academic",
    description: "For Health Sciences department in Health Sciences Complex",
    mapsUrl: "https://maps.google.com/?q=Health+Sciences+Lecture+Theatre+A+OAU+Ile-Ife",
  },
  {
    id: "social-sciences-lt1",
    name: "Social Sciences Lecture Theatre I",
    category: "Academic",
    description: "Lecture hall in Social Sciences Building",
    mapsUrl: "https://maps.google.com/?q=Social+Sciences+Lecture+Theatre+I+OAU+Ile-Ife",
  },
  {
    id: "social-sciences-lt2",
    name: "Social Sciences Lecture Theatre II",
    category: "Academic",
    description: "Secondary hall in Social Sciences Building",
    mapsUrl: "https://maps.google.com/?q=Social+Sciences+Lecture+Theatre+II+OAU+Ile-Ife",
  },
  {
    id: "education-trust-lt",
    name: "Education Trust Building Lecture Theatre",
    category: "Academic",
    description: "For the Faculty of Education in Education Building/Trust Block",
    mapsUrl: "https://maps.google.com/?q=Education+Trust+Building+Lecture+Theatre+OAU+Ile-Ife",
  },
  {
    id: "science-complex-g17",
    name: "Science Complex Lecture Theatre G.17 / RM17",
    category: "Academic",
    description: "Lecture hall in Science Complex, Faculty of Science Building",
    mapsUrl: "https://maps.google.com/?q=Science+Complex+Lecture+Theatre+G17+OAU+Ile-Ife",
  },
  {
    id: "food-science-amphitheatre",
    name: "Food Science & Technology Amphitheatre",
    category: "Academic",
    description: "Lecture theatre in Food Science & Technology Building",
    mapsUrl: "https://maps.google.com/?q=Food+Science+Technology+Amphitheatre+OAU+Ile-Ife",
  },
  {
    id: "national-auditorium",
    name: "National/University Auditorium",
    category: "Academic",
    description: "Large capacity auditorium used as lecture theatre in Main Auditorium/University Hall",
    mapsUrl: "https://maps.google.com/?q=National+University+Auditorium+OAU+Ile-Ife",
  },
  // Accommodation Halls
  {
    id: "awolowo-hall",
    name: "Awolowo Hall",
    category: "Accommodation",
    description: "One of the largest male undergraduate halls on campus",
    mapsUrl: "https://maps.google.com/?q=Awolowo+Hall+OAU+Ile-Ife",
  },
  {
    id: "fajuyi-hall",
    name: "Fajuyi Hall",
    category: "Accommodation",
    description: "Very populous male undergraduate hostel with strong student culture",
    mapsUrl: "https://maps.google.com/?q=Fajuyi+Hall+OAU+Ile-Ife",
  },
  {
    id: "angola-hall",
    name: "Angola Hall",
    category: "Accommodation",
    description: "Male undergraduate hall of residence",
    mapsUrl: "https://maps.google.com/?q=Angola+Hall+OAU+Ile-Ife",
  },
  {
    id: "etf-hall",
    name: "ETF Hall",
    category: "Accommodation",
    description: "Education Trust Fund Hall built for male undergraduate students",
    mapsUrl: "https://maps.google.com/?q=ETF+Hall+OAU+Ile-Ife",
  },
  {
    id: "alumni-hall",
    name: "Alumni Hall",
    category: "Accommodation",
    description: "Female undergraduate hall, relatively new facility",
    mapsUrl: "https://maps.google.com/?q=Alumni+Hall+OAU+Ile-Ife",
  },
  {
    id: "ladoke-akintola-hall",
    name: "Ladoke Akintola Hall",
    category: "Accommodation",
    description: "Female undergraduate hall on northern axis with good facilities",
    mapsUrl: "https://maps.google.com/?q=Ladoke+Akintola+Hall+OAU+Ile-Ife",
  },
  {
    id: "moremi-hall",
    name: "Moremi Hall",
    category: "Accommodation",
    description: "Female undergraduate hall, part of campus accommodations",
    mapsUrl: "https://maps.google.com/?q=Moremi+Hall+OAU+Ile-Ife",
  },
  {
    id: "mozambique-hall",
    name: "Mozambique Hall",
    category: "Accommodation",
    description: "Female undergraduate hall of residence",
    mapsUrl: "https://maps.google.com/?q=Mozambique+Hall+OAU+Ile-Ife",
  },
  {
    id: "murtala-muhammed-hall",
    name: "Murtala Muhammed Hall",
    category: "Accommodation",
    description: "Postgraduate accommodation for mixed gender students",
    mapsUrl: "https://maps.google.com/?q=Murtala+Muhammed+Hall+OAU+Ile-Ife",
  },
];

const categories = ["All", "Academic", "Accommodation", "Administrative", "Services", "Recreation", "Religious"];

export default function LandmarksPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredLandmarks = landmarks.filter((landmark) => {
    const matchesSearch =
      landmark.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      landmark.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || landmark.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center space-y-4 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold">Campus Locations</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find key buildings and offices across campus. Get instant directions via Google Maps.
          </p>
          <div className="flex justify-center pt-2">
            <ShareButton
              title="Guide16 Campus Locations"
              text="Check out these OAU campus locations with Google Maps directions!"
              variant="outline"
              size="sm"
            />
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" aria-hidden="true" />
            <Input
              type="text"
              autoComplete="off"
              placeholder="Search for a location..."
              className="pl-12 h-12 text-base"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search locations"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center" role="group" aria-label="Filter by category">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
                aria-pressed={selectedCategory === category}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="text-center mb-6">
          <p className="text-sm text-muted-foreground" role="status" aria-live="polite">
            Showing {filteredLandmarks.length} location{filteredLandmarks.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Landmarks Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3" role="list">
          {filteredLandmarks.map((landmark) => (
            <Card
              key={landmark.id}
              id={landmark.id}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              role="listitem"
            >
              <CardHeader>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary" aria-hidden="true">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-lg leading-tight mb-1">
                      {landmark.name}
                    </CardTitle>
                    <div className="inline-flex items-center rounded-full bg-secondary px-2 py-0.5 text-xs font-medium">
                      {landmark.category}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm mb-4">
                  {landmark.description}
                </CardDescription>
                <a
                  href={landmark.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full"
                  aria-label={`Get directions to ${landmark.name}`}
                >
                  <Button
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    variant="outline"
                  >
                    <MapPin className="h-4 w-4 mr-2" aria-hidden="true" />
                    Get Directions
                    <ExternalLink className="h-3 w-3 ml-2" aria-hidden="true" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredLandmarks.length === 0 && (
          <div className="text-center py-12" role="status">
            <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" aria-hidden="true" />
            <h3 className="text-lg font-semibold mb-2">No locations found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}

        {/* Info Card */}
        <Card className="mt-8 bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="text-lg">Navigation Tips</CardTitle>
            <CardDescription>
              Click "Get Directions" to open the location in Google Maps. Make sure you have 
              location services enabled on your device for the best navigation experience. 
              Most locations are within walking distance on campus.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
      
      <BackToTop />
    </div>
  );
}