"use client"

import { SERVICES } from "@/config/services"
import type { Service } from "@/types"
import { Scissors, Sparkles, Zap, Flame, Crown, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"

export default function ServicesClient() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)

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
        return <Scissors className="h-5 w-5" />
      case "beard services":
        return <Flame className="h-5 w-5" />
      case "shaves & gromming":
      case "shaves & grooming":
        return <Zap className="h-5 w-5" />
      case "facial & skin":
        return <Sparkles className="h-5 w-5" />
      case "packages":
        return <Crown className="h-5 w-5" />
      default:
        return <Scissors className="h-5 w-5" />
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

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category)
  }

  const categories = Object.keys(servicesByCategory)

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-transparent  tracking-tight bg-clip-text bg-gradient-to-r from-primary/70 to-[#FFD700]/80">Our Services</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Premium grooming experiences to elevate your style
            </p>
          </div>

          <div className="space-y-8">
            {categories.map((category) => (
              <div
                key={category}
                className={cn(
                  "rounded-xl overflow-hidden transition-all duration-500 ease-in-out",
                  "border-2 border-primary/10 hover:border-primary/20",
                  expandedCategory === category ? "bg-primary/5" : "bg-background",
                )}
              >
                {/* Category Header */}
                <button
                  onClick={() => toggleCategory(category)}
                  className="w-full p-6 flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      {getCategoryIcon(category)}
                    </div>
                    <div className="text-left">
                      <h2 className="text-2xl font-bold">{formatCategoryName(category)}</h2>
                      {/* <p className="text-muted-foreground">{servicesByCategory[category].length} services available</p> */}
                    </div>
                  </div>
                  <ChevronDown
                    className={cn(
                      "h-6 w-6 text-muted-foreground transition-transform duration-300",
                      expandedCategory === category ? "transform rotate-180" : "",
                    )}
                  />
                </button>

                {/* Services */}
                <div
                  className={cn(
                    "grid grid-cols-1 gap-4 px-6 transition-all duration-500 ease-in-out",
                    expandedCategory === category ? "pb-6 max-h-[2000px]" : "max-h-0 overflow-hidden",
                  )}
                >
                  {servicesByCategory[category].map((service, index) => (
                    <div
                      key={index}
                      className={cn(
                        "p-4 rounded-lg transition-all duration-300",
                        "bg-card border border-border hover:border-primary/20",
                        "flex flex-col md:flex-row md:items-center justify-between gap-4",
                        "hover:shadow-md hover:shadow-primary/5",
                      )}
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                            {getCategoryIcon(category)}
                          </div>
                          <h3 className="text-xl font-semibold">{service.type}</h3>
                        </div>
                        <p className="text-muted-foreground">{service.description}</p>
                      </div>

                      <div className="flex items-center gap-4 self-end md:self-center">
                        <div className="text-2xl font-bold text-primary">${service.price}</div>   
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}