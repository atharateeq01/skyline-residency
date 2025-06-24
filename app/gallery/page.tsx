"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X } from "lucide-react"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // Placeholder images - these would be replaced with actual images
  const galleryImages = [
    { id: 1, src: "/images/pic1.png", alt: "Rafi Gardens Entrance" },
    { id: 2, src: "/images/pic2.png", alt: "Aerial View" },
    { id: 3, src: "/images/pic3.png", alt: "Park Area" },
    { id: 4, src: "/images/pic4.png", alt: "Main Boulevard" },
    { id: 5, src: "/images/pic5.png", alt: "Mosque" },
    { id: 6, src: "/images/pic6.png", alt: "Commercial Area" },
    { id: 7, src: "/images/pic7.png", alt: "Residential Plots" },
    { id: 8, src: "/images/pic1.png", alt: "Green Spaces" },
    { id: 9, src: "/images/pic2.png", alt: "Community Center" },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-canopy to-breeze py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Gallery</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Explore the beauty and features of Skyline Residency through our image gallery
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="relative h-64 rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]"
                onClick={() => setSelectedImage(image.src)}
              >
                <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end">
                  <p className="text-white p-4">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 z-50 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
          >
            <X className="h-6 w-6" />
          </button>
          {selectedImage && (
            <div className="relative h-[80vh] w-full">
              <Image src={selectedImage || "/placeholder.svg"} alt="Gallery image" fill className="object-contain" />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
