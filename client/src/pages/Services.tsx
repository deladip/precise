import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Services() {
  const sections = [
    {
      title: "Tax Services",
      description: "Expert preparation and representation to ensure accuracy and compliance.",
      items: [
        "Individual & Business Tax Preparation",
        "IRS Representation",
        "ITIN Applications (Certified Acceptance Agent)",
        "Tax Planning & Compliance",
        "Amendments & Back Taxes"
      ]
    },
    {
      title: "Business Services",
      description: "Foundation and compliance services to start your business on the right foot.",
      items: [
        "Business Registration (LLC, Corp, Non-Profit)",
        "EIN Registration",
        "BOI Filing (FinCEN)",
        "Annual Filings & Compliance",
        "Business Tax Setup"
      ]
    },
    {
      title: "Accounting Services",
      description: "Ongoing support to keep your financials clear and organized.",
      items: [
        "Monthly Bookkeeping",
        "Payroll Processing",
        "Sales Tax Filing",
        "Monthly & Quarterly Reporting"
      ]
    }
  ];

  return (
    <div className="pt-20">
      <div className="bg-gray-50 py-16 md:py-24 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground">
            Professional, precise, and personalized. We handle the numbers so you can focus on what matters.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-20">
        <div className="space-y-20">
          {sections.map((section, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-12 gap-8 md:gap-12 items-start"
            >
              <div className="md:col-span-4">
                <div className="sticky top-24">
                  <h2 className="text-3xl font-serif font-bold text-primary mb-4">{section.title}</h2>
                  <p className="text-muted-foreground text-lg mb-6">{section.description}</p>
                  <Link href="/contact">
                    <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white">
                      Book for {section.title}
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="md:col-span-8 bg-white p-8 md:p-10 rounded-sm border border-gray-100 shadow-sm">
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 h-5 w-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                        <Check className="h-3 w-3 text-accent" />
                      </div>
                      <span className="font-medium text-primary">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-24 text-center p-12 bg-primary/5 rounded-lg">
          <h3 className="text-2xl font-serif font-bold text-primary mb-4">Not sure what you need?</h3>
          <p className="text-muted-foreground mb-8">
            Schedule a consultation and we'll help identify the right services for your situation.
          </p>
          <Link href="/contact">
            <Button className="bg-accent hover:bg-accent/90 text-white px-8">
              Book a Consultation
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
