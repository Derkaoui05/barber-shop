"use client";
import { SERVICES } from "@/config/services";
import { Service } from "@/types";
import { Table } from "@/components/ui/table";

export default function ServicesPage() {
  const servicesByCategory = SERVICES.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, Service[]>);

  return (
    <section className="container py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Premium grooming services tailored to your needs
        </p>
      </div>
      
      {Object.entries(servicesByCategory).map(([category, services]) => (
        <div key={category} className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {category === 'haircuts' ? 'Haircuts' : 
             category === 'Beard Services' ? 'Beard Services' :
             category === 'Shaves & Gromming' ? 'Shaves & Grooming' :
             category === 'Facial & Skin' ? 'Facial & Skin' :
             category === 'Packages' ? 'Packages' : category}
          </h2>
          <Table
            data={services}
            columns={[
              { 
                header: "Service", 
                accessor: "type",
                cell: (row) => <span className="font-medium">{row.type}</span>
              },
              { 
                header: "Description", 
                accessor: "description",
                cell: (row) => <span className="text-muted-foreground">{row.description}</span>
              },
              { 
                header: "Price", 
                accessor: "price",
                cell: (row) => <span className="font-medium">${row.price}</span>
              },
              { 
                header: "Action", 
                cell: () => (
                  <button className="text-primary hover:text-primary/80 transition-colors">
                    Book Now
                  </button>
                )
              }
            ]}
          />
        </div>
      ))}
    </section>
  );
}