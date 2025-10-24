import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, XCircle, Calendar, MapPin } from "lucide-react";
import { packages } from "@/data/packages";
import tourPackageImage from "@/assets/first.jpg";
import tourPackageImage2 from "@/assets/second.jpeg";
import tourPackageImage3 from "@/assets/third.jpg";
import tourPackageImage4 from "@/assets/fourth.jpg";
import tourPackageImage5 from "@/assets/fifith.jpeg";
import tourPackageImage6 from "@/assets/sixth.jpg";
import placeholderImage from "/public/placeholder.svg";

export const Packages = () => {
  const phoneNumber = "919959969880";

  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString('en-IN')}`;
  };

  return (
    <section id="packages" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Pilgrimage <span className="text-primary">Packages</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Experience divine journeys to Lord Balaji's abode with our carefully curated pilgrimage packages.
            From one-day darshan to extended spiritual tours covering sacred temples across South India.
          </p>
        </div>

        <div className="space-y-12">
          {packages.map((pkg, index) => (
            <Card key={pkg.id} className="max-w-3xl mx-auto overflow-hidden border-2 hover:border-primary/30 transition-all duration-300 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10 border-b">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl md:text-3xl mb-2">{pkg.title}</CardTitle>
                    <CardDescription className="text-base">{pkg.subtitle}</CardDescription>
                  </div>
                  <Badge variant="secondary" className="text-base px-4 py-2 w-fit">
                    <Calendar className="w-4 h-4 mr-2" />
                    {pkg.duration}
                  </Badge>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {pkg.highlights.map((highlight, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      <MapPin className="w-3 h-3 mr-1" />
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </CardHeader>

              {/* Package Image */}
              <div className="px-6 pb-4">
                <div className="aspect-video bg-gray-100 border-2 border-gray-300 rounded-lg flex items-center justify-center overflow-hidden cursor-pointer group hover:opacity-90 transition-opacity">
                  <img 
                    src={index === 0 ? tourPackageImage : index === 1 ? tourPackageImage2 : index === 2 ? tourPackageImage3 : index === 3 ? tourPackageImage4 : index === 4 ? tourPackageImage5 : index === 5 ? tourPackageImage6 : placeholderImage} 
                    alt={`${pkg.title} Image`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <CardContent className="p-6">
                <Tabs defaultValue="itinerary" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-6">
                    <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                    <TabsTrigger value="pricing">Pricing</TabsTrigger>
                    <TabsTrigger value="details">Details</TabsTrigger>
                  </TabsList>

                  <TabsContent value="itinerary" className="space-y-4">
                    {pkg.itinerary.map((day) => (
                      <div key={day.day} className="border-l-4 border-primary pl-4 py-2">
                        <h4 className="font-semibold text-lg mb-2">
                          Day {day.day}: {day.title}
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                          {day.description}
                        </p>
                        {day.nightStay && (
                          <p className="text-sm text-primary font-medium">
                            Night stay: {day.nightStay}
                          </p>
                        )}
                      </div>
                    ))}
                  </TabsContent>

                  <TabsContent value="pricing">
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border p-3 text-left font-semibold">Category</th>
                            <th className="border p-3 text-center font-semibold">2 Pax</th>
                            <th className="border p-3 text-center font-semibold">4 Pax</th>
                            <th className="border p-3 text-center font-semibold">6 Pax</th>
                            <th className="border p-3 text-center font-semibold">12 Pax</th>
                          </tr>
                        </thead>
                        <tbody>
                          {pkg.pricing.map((price) => (
                            <tr key={price.category} className="hover:bg-gray-50">
                              <td className="border p-3 font-medium">{price.category}</td>
                              <td className="border p-3 text-center">{formatPrice(price.pax2)}</td>
                              <td className="border p-3 text-center">{formatPrice(price.pax4)}</td>
                              <td className="border p-3 text-center">{formatPrice(price.pax6)}</td>
                              <td className="border p-3 text-center">{formatPrice(price.pax12)}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4 italic">
                      Note: Above mentioned cost is per person only. Cost may fluctuate depends upon the Diesel price.
                      Confirmation of rooms depends on hotel availability.
                    </p>
                  </TabsContent>

                  <TabsContent value="details">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          Tour Includes
                        </h4>
                        <ul className="space-y-2">
                          {pkg.includes.map((item, idx) => (
                            <li key={idx} className="text-sm flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                          <XCircle className="w-5 h-5 text-red-600" />
                          Tour Excludes
                        </h4>
                        <ul className="space-y-2">
                          {pkg.excludes.map((item, idx) => (
                            <li key={idx} className="text-sm flex items-start gap-2">
                              <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="mt-6 pt-6 border-t flex flex-col sm:flex-row gap-3">
                  <Button
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                    asChild
                  >
                    <a
                      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(`Hi, I'm interested in the ${pkg.title} (${pkg.duration})`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book via WhatsApp
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1"
                    asChild
                  >
                    <a href={`tel:+${phoneNumber}`}>
                      Call to Inquire
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Need a custom package or have special requirements?
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90"
            asChild
          >
            <a
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hi, I need a custom pilgrimage package")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Request Custom Package
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
