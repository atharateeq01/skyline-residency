"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, MessageSquare } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)

    // Show success toast
    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible.",
    })

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    })
  }

  const openWhatsApp = () => {
    // Replace with your actual WhatsApp number
    window.open("https://wa.me/923001234567", "_blank")
  }

  const sendEmail = () => {
    // Replace with your actual email
    window.location.href = "mailto:info@skylineresidency.com"
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-canopy to-breeze py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">Get in touch with our team to learn more about Skyline Residency</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardContent className="flex flex-col items-center text-center pt-6">
                <div className="w-12 h-12 rounded-full bg-sprout-light flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-sprout-dark" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Our Location</h3>
                <p>Skyline Residency, Changa Manga Road, Kot Radha Kishan, District Kasur, Pakistan-55180</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center text-center pt-6">
                <div className="w-12 h-12 rounded-full bg-sprout-light flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-sprout-dark" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Phone Number</h3>
                <p>+92 300 1234567</p>
                <p>+92 42 35678901</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center text-center pt-6">
                <div className="w-12 h-12 rounded-full bg-sprout-light flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-sprout-dark" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email Address</h3>
                <p>info@skylineresidency.com</p>
                <p>sales@skylineresidency.com</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">
                    Your Name
                  </label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">
                    Email Address
                  </label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium">
                    Phone Number
                  </label>
                  <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-sprout-dark hover:bg-sprout">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Quick Contact Buttons & Map */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Quick Contact</h2>
              <div className="flex flex-col space-y-4 mb-8">
                <Button
                  onClick={openWhatsApp}
                  className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700"
                >
                  <MessageSquare className="h-5 w-5" />
                  Chat on WhatsApp
                </Button>
                <Button
                  onClick={sendEmail}
                  className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700"
                >
                  <Mail className="h-5 w-5" />
                  Send Email
                </Button>
              </div>

              <h2 className="text-2xl font-bold mb-6">Our Location</h2>
              <div className="h-80 w-full rounded-lg overflow-hidden border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.6774366646!2d74.0500!3d31.3700!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDIyJzEyLjAiTiA3NMKwMDMnMDAuMCJF!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Rafi Gardens Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours Section */}
      <section className="py-16 bg-breeze-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Office Hours</h2>
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-left">
                <p className="font-semibold">Monday - Friday:</p>
                <p className="font-semibold">Saturday:</p>
                <p className="font-semibold">Sunday:</p>
              </div>
              <div className="text-right">
                <p>9:00 AM - 6:00 PM</p>
                <p>10:00 AM - 4:00 PM</p>
                <p>Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
