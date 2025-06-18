import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Award, MapPin, Leaf, Building } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-canopy-dark/80 to-breeze-dark/60 z-10" />
        <Image src="/placeholder.svg?height=800&width=1600" alt="About Rafi Gardens" fill className="object-cover" />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Skyline Residency</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Learn about our vision, location advantages, and development plans
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-canopy-dark">Our Vision</h2>
              <p className="text-lg mb-6">
                At Skyline Residency, our vision is to create a harmonious community where modern living meets natural
                beauty. We aim to provide a secure, well-planned residential area that offers the perfect balance
                between urban amenities and serene surroundings.
              </p>
              <p className="text-lg mb-6">
                We are committed to sustainable development practices, ensuring that our housing society not only
                provides comfortable living spaces but also preserves and enhances the natural environment.
              </p>
              <p className="text-lg">
                As the first-ever LDA-approved housing society in Kot Radha Kishan, we take pride in setting new
                standards for residential developments in the region.
              </p>
            </div>
            <div className="md:w-1/2 relative h-80 w-full rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Rafi Gardens Vision"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* LDA Approval Section */}
      <section className="py-16 bg-sprout-light">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block p-6 bg-white rounded-full mb-8">
            <Award className="h-16 w-16 text-sprout-dark" />
          </div>
          <h2 className="text-3xl font-bold mb-6 text-canopy-dark">LDA Approved</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Skyline Residency is proud to be the first-ever LDA-approved housing society in Kot Radha Kishan. This
            approval from the Lahore Development Authority ensures that our development meets all legal requirements and
            standards, providing you with a secure investment for your future.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Legal Security</h3>
                <p>All plots and developments are legally approved and registered</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
                <p>Development follows strict quality standards set by LDA</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Transparent Dealings</h3>
                <p>All transactions and ownership transfers are legally documented</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Advantages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Location Advantages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=800&width=1000"
                alt="Rafi Gardens Location"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="h-6 w-6 text-sprout-dark mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Strategic Location</h3>
                  <p>
                    Located on Changa Manga Road, Kot Radha Kishan, District Kasur, providing easy access to major
                    highways while maintaining a peaceful distance from urban congestion.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-6">
                <Building className="h-6 w-6 text-sprout-dark mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Proximity to Amenities</h3>
                  <p>
                    Close to essential facilities including schools, hospitals, shopping centers, and recreational
                    areas, ensuring convenience for residents.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Leaf className="h-6 w-6 text-sprout-dark mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Natural Surroundings</h3>
                  <p>
                    Nestled in the serene environment of Kot Radha Kishan, offering a perfect blend of modern living and
                    natural beauty.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Plans */}
      <section className="py-16 bg-breeze-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Development Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Phase 1: Infrastructure</h3>
                <p className="mb-4">
                  Development of basic infrastructure including roads, water supply, sewerage system, and electricity.
                </p>
                <p className="text-sm text-muted-foreground">Status: Completed</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Phase 2: Community Facilities</h3>
                <p className="mb-4">Construction of mosque, parks, community center, and commercial areas.</p>
                <p className="text-sm text-muted-foreground">Status: In Progress</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Phase 3: Advanced Amenities</h3>
                <p className="mb-4">
                  Development of advanced amenities including sports complex, health center, and educational
                  institutions.
                </p>
                <p className="text-sm text-muted-foreground">Status: Planned</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
