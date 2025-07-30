import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Users, 
  Car,
  Bus,
  Building,
  GraduationCap
} from "lucide-react";

const Branches = () => {
  const branches = [
    {
      id: "asilmetta",
      name: "Asilmetta Branch",
      location: "Asilmetta, Visakhapatnam",
      address: "Door No. 12-34-56, Main Road, Asilmetta, Visakhapatnam - 530003",
      phone: "+91 891 234 5678",
      email: "asilmetta@srigayatrijc.edu.in",
      established: "1999",
      students: "600+",
      courses: ["MPC", "BiPC", "MEC", "CEC"],
      facilities: [
        "Air-conditioned classrooms",
        "Physics & Chemistry labs",
        "Computer lab with 40 systems",
        "Library with 5000+ books",
        "Sports ground",
        "Cafeteria"
      ],
      timings: "6:00 AM - 6:00 PM",
      transport: "Bus routes covering Gajuwaka, MVP Colony, Beach Road",
      highlights: [
        "Our flagship campus",
        "Excellent board exam results",
        "Strong alumni network",
        "Modern infrastructure"
      ]
    },
    {
      id: "gajuwaka",
      name: "Gajuwaka Branch",
      location: "Gajuwaka, Visakhapatnam",
      address: "Plot No. 78-90, Industrial Estate Road, Gajuwaka, Visakhapatnam - 530026",
      phone: "+91 891 345 6789",
      email: "gajuwaka@srigayatrijc.edu.in",
      established: "2005",
      students: "500+",
      courses: ["MPC", "BiPC", "MEC"],
      facilities: [
        "Smart classrooms",
        "Well-equipped laboratories",
        "Digital library",
        "Indoor sports facility",
        "Student parking",
        "Medical room"
      ],
      timings: "6:00 AM - 6:00 PM",
      transport: "Bus routes covering Anakapalli, Pendurthi, Sabbavaram",
      highlights: [
        "Industrial area location",
        "Focus on technical courses",
        "Industry connections",
        "Practical learning approach"
      ]
    },
    {
      id: "madhurawada",
      name: "Madhurawada Branch",
      location: "Madhurawada, Visakhapatnam",
      address: "Survey No. 123, IT SEZ Road, Madhurawada, Visakhapatnam - 530048",
      phone: "+91 891 456 7890",
      email: "madhurawada@srigayatrijc.edu.in",
      established: "2012",
      students: "450+",
      courses: ["MPC", "BiPC", "MEC", "CEC"],
      facilities: [
        "Modern architecture",
        "Advanced science labs",
        "IT lab with latest computers",
        "Spacious library",
        "Outdoor sports complex",
        "Student lounge"
      ],
      timings: "6:00 AM - 6:00 PM",
      transport: "Bus routes covering Rushikonda, Bhogapuram, IT Corridor",
      highlights: [
        "Newest campus",
        "IT corridor location",
        "Modern facilities",
        "Tech-enabled learning"
      ]
    },
    {
      id: "nad",
      name: "NAD Branch",
      location: "NAD Junction, Visakhapatnam",
      address: "Door No. 45-67-89, NAD Main Road, Visakhapatnam - 530016",
      phone: "+91 891 567 8901",
      email: "nad@srigayatrijc.edu.in",
      established: "2008",
      students: "400+",
      courses: ["MEC", "CEC", "BiPC"],
      facilities: [
        "Centrally located campus",
        "Commerce lab",
        "Computer center",
        "Reading hall",
        "Seminar hall",
        "Hostel facility nearby"
      ],
      timings: "6:00 AM - 6:00 PM",
      transport: "Bus routes covering Dwaraka Nagar, Seethamadhara, Jagadamba",
      highlights: [
        "Central location",
        "Commerce specialization",
        "Easy accessibility",
        "Experienced faculty"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6">Our Branches</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Four strategically located campuses across Visakhapatnam, bringing quality education 
            closer to your home.
          </p>
        </div>

        {/* Branch Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center shadow-card">
            <CardContent className="p-6">
              <Building className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-foreground mb-2">4</div>
              <div className="text-muted-foreground">Branches</div>
            </CardContent>
          </Card>
          <Card className="text-center shadow-card">
            <CardContent className="p-6">
              <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
              <div className="text-3xl font-bold text-foreground mb-2">2000+</div>
              <div className="text-muted-foreground">Students</div>
            </CardContent>
          </Card>
          <Card className="text-center shadow-card">
            <CardContent className="p-6">
              <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-foreground mb-2">4</div>
              <div className="text-muted-foreground">Course Streams</div>
            </CardContent>
          </Card>
          <Card className="text-center shadow-card">
            <CardContent className="p-6">
              <MapPin className="h-12 w-12 text-secondary mx-auto mb-4" />
              <div className="text-3xl font-bold text-foreground mb-2">25+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </CardContent>
          </Card>
        </div>

        {/* Branch Details */}
        <div className="space-y-12">
          {branches.map((branch, index) => (
            <Card key={branch.id} className="shadow-card overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                {/* Branch Info */}
                <div className="lg:col-span-2 p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="text-3xl font-bold text-foreground mb-2">{branch.name}</h2>
                      <div className="flex items-center gap-2 text-muted-foreground mb-4">
                        <MapPin className="h-4 w-4" />
                        <span>{branch.location}</span>
                      </div>
                    </div>
                    <Badge variant="outline">Est. {branch.established}</Badge>
                  </div>

                  <div className="space-y-6">
                    {/* Contact Info */}
                    <div>
                      <h3 className="font-semibold mb-3">Contact Information</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{branch.address}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">{branch.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">{branch.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">{branch.timings}</span>
                        </div>
                      </div>
                    </div>

                    {/* Courses Offered */}
                    <div>
                      <h3 className="font-semibold mb-3">Courses Offered</h3>
                      <div className="flex flex-wrap gap-2">
                        {branch.courses.map((course, idx) => (
                          <Badge key={idx} variant="secondary">{course}</Badge>
                        ))}
                      </div>
                    </div>

                    {/* Transportation */}
                    <div>
                      <h3 className="font-semibold mb-3 flex items-center gap-2">
                        <Bus className="h-4 w-4" />
                        Transportation
                      </h3>
                      <p className="text-sm text-muted-foreground">{branch.transport}</p>
                    </div>

                    {/* Highlights */}
                    <div>
                      <h3 className="font-semibold mb-3">Key Highlights</h3>
                      <ul className="space-y-1">
                        {branch.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Facilities & Stats */}
                <div className="bg-accent p-8">
                  <div className="space-y-6">
                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{branch.students}</div>
                        <div className="text-xs text-muted-foreground">Students</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-secondary">{branch.courses.length}</div>
                        <div className="text-xs text-muted-foreground">Courses</div>
                      </div>
                    </div>

                    {/* Facilities */}
                    <div>
                      <h3 className="font-semibold mb-3">Facilities</h3>
                      <ul className="space-y-2">
                        {branch.facilities.map((facility, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                            <span className="text-muted-foreground">{facility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Button */}
                    <Button className="w-full">
                      Visit This Branch
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <section className="mt-20 text-center">
          <Card className="shadow-card bg-primary text-primary-foreground">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-6">Visit Our Nearest Branch</h2>
              <p className="text-xl mb-8 opacity-90">
                Experience our facilities and meet our faculty members in person
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  Schedule a Visit
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  Get Directions
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Branches;