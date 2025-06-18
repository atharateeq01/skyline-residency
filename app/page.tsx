import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Home, MapPin, Award, Phone } from "lucide-react"
import FeatureCard from "@/components/feature-card"
import GalleryPreview from "@/components/gallery-preview"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-canopy-dark/80 to-breeze-dark/60 z-10" />
        <Image
          src="/images/rafi-gardens-entrance.png"
          alt="Rafi Gardens Housing Society Entrance"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-3xl bg-black/30 p-6 rounded-lg backdrop-blur-sm">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Welcome to <span className="text-yellow-300">Skyline Residency</span>
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-2xl mb-8">
              The first-ever LDA-approved housing society in Kot Radha Kishan, offering premium living spaces surrounded
              by nature.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-sprout-dark hover:bg-sprout text-white">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/20 text-white border-white/30 hover:bg-white/30"
              >
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-breeze-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-canopy-dark">Discover Skyline Residency</h2>
              <p className="text-lg mb-6">
                Nestled in the serene surroundings of Kot Radha Kishan, Skyline Residency offers a perfect blend of
                modern living and natural beauty. As the first-ever LDA-approved housing society in the region, we
                provide unmatched security and peace of mind for your investment.
              </p>
              <p className="text-lg mb-8">
                Located on Changa Manga Road, our strategic position offers easy access to major highways while
                maintaining a peaceful distance from urban congestion.
              </p>
              <Button asChild className="bg-canopy hover:bg-canopy-dark">
                <Link href="/about">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="md:w-1/2 relative h-80 w-full rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Rafi Gardens Overview"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Rafi Gardens?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Award className="h-10 w-10 text-sprout-dark" />}
              title="LDA Approved"
              description="Fully approved by Lahore Development Authority, ensuring legal security for your investment."
            />
            <FeatureCard
              icon={<MapPin className="h-10 w-10 text-sprout-dark" />}
              title="Prime Location"
              description="Strategically located on Changa Manga Road with easy access to major highways."
            />
            <FeatureCard
              icon={<Home className="h-10 w-10 text-sprout-dark" />}
              title="Various Plot Sizes"
              description="Choose from a range of plot sizes from 4 Marla to 10 Marla to suit your needs."
            />
            <FeatureCard
              icon={<Phone className="h-10 w-10 text-sprout-dark" />}
              title="Dedicated Support"
              description="Our team is always available to assist you with any queries or concerns."
            />
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-16 bg-driftwood-light">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-treetext">Gallery Preview</h2>
            <Button asChild variant="outline" className="border-canopy-dark text-canopy-dark hover:bg-canopy-light">
              <Link href="/gallery">View All Images</Link>
            </Button>
          </div>
          <GalleryPreview />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-canopy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Secure Your Future Home?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about available plots and special offers at Skyline Residency.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-canopy-dark hover:bg-breeze-light">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
