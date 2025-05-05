// Service type
export type Service = {
    id: int;
    name: string;
    description: string;
    duration: number; // in minutes
    price: number;
    category: 'haircut' | 'beard' | 'package' | 'other';
    popular?: boolean;
  };
  
  // Booking type
  export type Booking = {
    id: string;
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    serviceId: string;
    date: Date;
    time: string;
    status: 'confirmed' | 'pending' | 'cancelled';
    notes?: string;
  };
  
  // Testimonial type
  export type Testimonial = {
    id: int;
    author: string;
    role?: string;
    content: string;
    rating: number;
    date: Date;
  };
  
  // Barber type
  export type Barber = {
    id: int;
    name: string;
    speciality: string[];
    description : string;
    image: string;
  };
  
  // Gallery image type
  export type GalleryImage = {
    id: int;
    src: string;
    alt: string;
    category: 'haircut' | 'beard' | 'styling' | 'all';
    featured?: boolean;
  };
  
  // Navigation item type
  export type NavItem = {
    title: string;
    href: string;
    description?: string;
    external?: boolean;
    disabled?: boolean;
  };