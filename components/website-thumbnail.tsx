"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function WebsiteThumbnail() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = 1200
    canvas.height = 630

    // Function to load and draw images
    const drawThumbnail = async () => {
      // Create background gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, "#EAF8F1") // breeze-light
      gradient.addColorStop(1, "#D7F2C2") // sprout-light
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Helper function to load images
      const loadImage = (src: string): Promise<HTMLImageElement> => {
        return new Promise((resolve) => {
          const img = new Image()
          img.crossOrigin = "anonymous" // Important for CORS

          // Add error handling
          img.onerror = () => {
            console.error(`Failed to load image: ${src}`)
            // Create a fallback colored rectangle instead of the image
            const canvas = document.createElement("canvas")
            canvas.width = 100
            canvas.height = 100
            const ctx = canvas.getContext("2d")
            if (ctx) {
              ctx.fillStyle = "#f0f0f0"
              ctx.fillRect(0, 0, 100, 100)
              ctx.fillStyle = "#cccccc"
              ctx.font = "14px Arial"
              ctx.fillText("Image", 30, 50)
            }
            const fallbackImg = new Image()
            fallbackImg.src = canvas.toDataURL()
            fallbackImg.onload = () => resolve(fallbackImg)
          }

          img.onload = () => resolve(img)
          img.src = src
        })
      }

      // Load images
      const logo = await loadImage("/images/skyline-residency-logo.png")
      const heroImage = await loadImage("/placeholder.svg?height=1080&width=1920")
      const aboutImage = await loadImage("/placeholder.svg?height=800&width=1200")
      const pricingImage = await loadImage("/placeholder.svg?height=800&width=1200")
      const premiumImage = await loadImage("/placeholder.svg?height=800&width=1200")
      const contactImage = await loadImage("/placeholder.svg?height=800&width=1200")

      // Draw logo
      ctx.drawImage(logo, 50, 40, 100, 100)

      // Draw title
      const titleGradient = ctx.createLinearGradient(170, 60, 600, 100)
      titleGradient.addColorStop(0, "#0a2463") // Dark blue
      titleGradient.addColorStop(0.5, "#7e4e90") // Purple
      titleGradient.addColorStop(1, "#3ca55c") // Green
      ctx.font = "bold 48px Arial"
      ctx.fillStyle = titleGradient
      ctx.fillText("Skyline Residency", 170, 100)

      // Draw tagline
      ctx.font = "24px Arial"
      ctx.fillStyle = "#4A854A" // canopy-dark
      ctx.fillText("First-ever LDA-approved housing society in Kot Radha Kishan", 170, 140)

      // Draw device frame for main hero image (laptop)
      drawDeviceFrame(ctx, 150, 180, 900, 506, 10, "#333")

      // Draw hero image in laptop frame
      ctx.drawImage(heroImage, 160, 190, 880, 450)

      // Draw smaller screenshots in tablet/phone frames
      // Tablet - About
      drawDeviceFrame(ctx, 50, 380, 220, 165, 5, "#555")
      ctx.drawImage(aboutImage, 55, 385, 210, 155)

      // Phone - Pricing
      drawDeviceFrame(ctx, 50, 180, 80, 170, 5, "#555")
      ctx.drawImage(pricingImage, 55, 185, 70, 160)

      // Tablet - Premium Options
      drawDeviceFrame(ctx, 930, 380, 220, 165, 5, "#555")
      ctx.drawImage(premiumImage, 935, 385, 210, 155)

      // Phone - Contact
      drawDeviceFrame(ctx, 1070, 180, 80, 170, 5, "#555")
      ctx.drawImage(contactImage, 1075, 185, 70, 160)
    }

    // Helper function to draw device frames
    const drawDeviceFrame = (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      width: number,
      height: number,
      radius: number,
      color: string,
    ) => {
      ctx.fillStyle = color
      roundRect(ctx, x - 5, y - 5, width + 10, height + 10, radius)
      ctx.fillStyle = "#fff"
      roundRect(ctx, x, y, width, height, radius)
    }

    // Helper function to draw rounded rectangles
    const roundRect = (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      width: number,
      height: number,
      radius: number,
    ) => {
      ctx.beginPath()
      ctx.moveTo(x + radius, y)
      ctx.lineTo(x + width - radius, y)
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius)
      ctx.lineTo(x + width, y + height - radius)
      ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height)
      ctx.lineTo(x + radius, y + height)
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius)
      ctx.lineTo(x, y + radius)
      ctx.quadraticCurveTo(x, y, x + radius, y)
      ctx.closePath()
      ctx.fill()
    }

    drawThumbnail()
  }, [])

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <h1 className="text-2xl font-bold mb-4">Skyline Residency Website Thumbnail</h1>
      <div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg">
        <canvas ref={canvasRef} style={{ width: "100%", height: "auto", maxWidth: "1200px" }} />
      </div>
      <p className="mt-4 text-sm text-gray-500">
        Right-click on the image and select "Save image as..." to download the thumbnail
      </p>
    </div>
  )
}
