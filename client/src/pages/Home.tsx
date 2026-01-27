import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import heroBg from "@/assets/hero-bg.png";
import officeImg from "@/assets/office-meeting.png";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 z-10 bg-primary/90" /> {/* Heavy overlay for text legibility */}

        <div className="container relative z-20 mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent border border-accent/20 text-sm font-medium mb-6">
              IRS Authorized Professionals
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight mb-6">
              Tax & Business Services <br/>
              <span className="text-accent">You Can Trust</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
              From filing to formation. We provide tax preparation, business registration, bookkeeping, and compliance services for individuals and businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button className="h-12 px-8 text-base bg-accent hover:bg-accent/90 text-white rounded-sm">
                  Book a Free Consultation
                </Button>
              </Link>
              <a href="tel:833-454-4794">
                <Button variant="outline" className="h-12 px-8 text-base border-white text-white hover:bg-white hover:text-primary rounded-sm bg-transparent">
                  Call Now: 833-454-4794
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Signals Strip */}
      <div className="bg-white border-b border-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-8 text-center md:text-left">
            {[
              "IRS Authorized ERO",
              "Certified Acceptance Agent (CAA)",
              "Certifying Officer of Accounts",
              "Secure & Confidential"
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-2 text-primary font-medium">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Value Proposition */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                Standing Out Means Clarity, Authority, and Ease
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Most tax firms just list services. We explain why you can trust us. With qualifications like 
                <strong> ERO, CAA, and COA</strong>, we handle the complex work that others can't.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Whether you are an individual needing ITIN assistance or a business needing full lifecycle support from formation to payroll, we are your one-stop shop.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Full business lifecycle services",
                  "One firm, one point of contact",
                  "Year-round support (not just tax season)"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-accent" />
                    <span className="font-medium text-primary">{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/about">
                <Button variant="link" className="p-0 text-accent font-semibold text-lg hover:text-accent/80">
                  Learn more about our credentials <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-accent/10 rounded-lg transform rotate-3" />
              <img 
                src={officeImg} 
                alt="Professional Office" 
                className="relative rounded-lg shadow-xl w-full aspect-[4/3] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Comprehensive Financial Services
            </h2>
            <p className="text-muted-foreground text-lg">
              We don't just file forms. We provide precise solutions for your financial life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Tax Services",
                desc: "Individual & Business tax prep, IRS Representation, and ITIN Applications.",
                link: "/services"
              },
              {
                title: "Business Solutions",
                desc: "LLC & Corp Registration, EIN setup, and BOI Filing compliance.",
                link: "/business-solutions"
              },
              {
                title: "Accounting",
                desc: "Monthly bookkeeping, payroll processing, and sales tax filing.",
                link: "/services"
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 border border-gray-100 bg-white hover:border-accent/30 hover:shadow-lg transition-all rounded-sm"
              >
                <h3 className="text-xl font-serif font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.desc}
                </p>
                <Link href={service.link}>
                  <a className="inline-flex items-center text-accent font-medium hover:underline">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't leave your finances to chance. Book a free 15-minute consultation to discuss your needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button className="h-14 px-8 text-lg bg-accent hover:bg-accent/90 text-white rounded-sm">
                Book Consultation
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="h-14 px-8 text-lg border-white text-white hover:bg-white hover:text-primary rounded-sm bg-transparent">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
