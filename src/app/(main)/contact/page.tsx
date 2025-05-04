import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | SharpLook Barber",
  description: "Get in touch with SharpLook Barber. Book your appointment or ask any questions about our services.",
};

export default function ContactPage() {
  return (
    <main className="flex-1">
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
                <p className="text-muted-foreground text-lg">
                  Have questions about our services? Ready to book an appointment? 
                  We're here to help you look your best.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Location</h3>
                  <p className="text-muted-foreground">123 Barber Street, City, Country</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Friday: 9am - 8pm<br />
                    Saturday: 10am - 6pm<br />
                    Sunday: Closed
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Contact</h3>
                  <p className="text-muted-foreground">
                    Phone: +1 234 567 890<br />
                    Email: info@sharplock.com
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card p-8 rounded-lg border">
              <form className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 rounded-md border bg-background"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 rounded-md border bg-background"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-2 rounded-md border bg-background"
                      placeholder="Your message"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}