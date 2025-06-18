import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CheckCircle } from "lucide-react"

export default function PricingPage() {
  const plotSizes = [
    { size: "4 Marla", basePrice: 800000, total: 3200000 },
    { size: "5 Marla", basePrice: 800000, total: 4000000 },
    { size: "6 Marla", basePrice: 800000, total: 4800000 },
    { size: "7 Marla", basePrice: 800000, total: 5600000 },
    { size: "10 Marla", basePrice: 800000, total: 8000000 },
  ]

  const premiumPlots = [
    { type: "Corner Plot", premium: "10%" },
    { type: "Park Facing Plot", premium: "15%" },
    { type: "Main Road Plot", premium: "20%" },
    { type: "Near Mosque Plot", premium: "12%" },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-canopy to-breeze py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Pricing Information</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Explore our competitive pricing options for various plot sizes at Skyline Residency
          </p>
        </div>
      </section>

      {/* Base Pricing Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Plot Pricing</h2>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Plot Size</TableHead>
                  <TableHead>Price Per Marla (PKR)</TableHead>
                  <TableHead>Total Price (PKR)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {plotSizes.map((plot) => (
                  <TableRow key={plot.size}>
                    <TableCell className="font-medium">{plot.size}</TableCell>
                    <TableCell>{plot.basePrice.toLocaleString()}</TableCell>
                    <TableCell>{plot.total.toLocaleString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p className="mt-6 text-sm text-muted-foreground text-center">
            Note: Prices are subject to change. Please contact our sales team for the most up-to-date pricing
            information.
          </p>
        </div>
      </section>

      {/* Premium Plots Section */}
      <section className="py-16 bg-breeze-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Premium Plot Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {premiumPlots.map((plot) => (
              <Card key={plot.type} className="border-sprout">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">{plot.type}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge className="bg-sprout text-white mb-4">{plot.premium} Premium</Badge>
                  <p className="text-sm text-muted-foreground">
                    Additional premium on base price for {plot.type.toLowerCase()} location
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Plans Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Payment Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-canopy">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">Full Payment</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-canopy mt-0.5" />
                    <span>5% discount on total price</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-canopy mt-0.5" />
                    <span>Immediate possession</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-canopy mt-0.5" />
                    <span>Priority in plot selection</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-canopy">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">Installment Plan (6 Months)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-canopy mt-0.5" />
                    <span>40% down payment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-canopy mt-0.5" />
                    <span>Remaining amount in 6 equal monthly installments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-canopy mt-0.5" />
                    <span>Possession after 50% payment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-canopy">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">Installment Plan (12 Months)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-canopy mt-0.5" />
                    <span>30% down payment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-canopy mt-0.5" />
                    <span>Remaining amount in 12 equal monthly installments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-canopy mt-0.5" />
                    <span>Possession after 70% payment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-16 bg-driftwood-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Special Offers</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Take advantage of our limited-time special offers and promotions
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-sprout-dark">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Early Bird Discount</h3>
                <p className="mb-4">
                  Get a 7% discount on total price for bookings made before the official launch date.
                </p>
                <Badge className="bg-sprout-dark">Limited Time</Badge>
              </CardContent>
            </Card>
            <Card className="border-sprout-dark">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Referral Bonus</h3>
                <p className="mb-4">
                  Refer a friend and get a 2% discount on your plot price when they make a purchase.
                </p>
                <Badge className="bg-sprout-dark">Ongoing</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
