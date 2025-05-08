"use client"

import { SERVICES } from "@/config/services"
import type { Service } from "@/types"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Scissors, Sparkles, Zap, Flame, Crown } from "lucide-react"
import { cn } from "@/lib/utils"

export default function ServicesPage() {
  const servicesByCategory = SERVICES.reduce(
    (acc, service) => {
      if (!acc[service.category]) {
        acc[service.category] = []
      }
      acc[service.category].push(service)
      return acc
    },
    {} as Record<string, Service[]>,
  )

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "haircuts":
        return <Scissors className="h-4 w-4" />
      case "beard services":
        return <Flame className="h-4 w-4" />
      case "shaves & gromming":
      case "shaves & grooming":
        return <Zap className="h-4 w-4" />
      case "facial & skin":
        return <Sparkles className="h-4 w-4" />
      case "packages":
        return <Crown className="h-4 w-4" />
      default:
        return <Scissors className="h-4 w-4" />
    }
  }

  const formatCategoryName = (category: string) => {
    return category === "haircuts"
      ? "Haircuts"
      : category === "Beard Services"
        ? "Beard Services"
        : category === "Shaves & Gromming"
          ? "Shaves & Grooming"
          : category === "Facial & Skin"
            ? "Facial & Skin"
            : category === "Packages"
              ? "Packages"
              : category
  }

  const categories = Object.keys(servicesByCategory)

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="mb-16 text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Premium grooming experiences to elevate your style
          </p>
        </div>

        <Tabs defaultValue={categories[0]} className="w-full">
          <TabsList className="flex flex-wrap justify-center mb-12 h-auto bg-muted/50 p-1 rounded-full">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <span className="flex items-center gap-2">
                  {getCategoryIcon(category)}
                  {formatCategoryName(category)}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category} className="mt-0 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {servicesByCategory[category].map((service, index) => (
                  <Card
                    key={index}
                    className={cn(
                      "overflow-hidden transition-all duration-300 hover:shadow-lg",
                      "border-2 hover:border-primary/20",
                      "group relative",
                    )}
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-primary/20 group-hover:bg-primary transition-colors duration-300"></div>

                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                            {getCategoryIcon(category)}
                          </div>
                          <h3 className="text-xl font-semibold">{service.type}</h3>
                        </div>
                        <Badge variant="secondary" className="font-semibold text-lg">
                          ${service.price}
                        </Badge>
                      </div>
                    </CardHeader>

                    <CardContent className="pt-2">
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>

                    <CardFooter className="pt-2 pb-4">
                      <Button className="w-full group-hover:bg-primary/90 transition-all duration-300" size="lg">
                        Book Now
                        <Sparkles className="ml-2 h-4 w-4 opacity-70" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
