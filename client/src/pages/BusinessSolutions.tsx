import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Building2, Users, Briefcase, FileText, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import officeImg from "@/assets/office-meeting.png";

export default function BusinessSolutions() {
  return (
    <div className="pt-20">
       <div className="bg-primary py-20 md:py-32 text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-accent/5" />
         <div className="container relative mx-auto px-4 md:px-6">
           <div className="max-w-3xl">
             <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
               Complete Business Support
             </h1>
             <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
               From Startup to Scale. Most firms handle one piece. We handle everything.
             </p>
             <Link href="/contact">
               <Button className="h-14 px-8 text-lg bg-accent hover:bg-accent/90 text-white rounded-sm">
                 Start Your Business
               </Button>
             </Link>
           </div>
         </div>
       </div>

       <div className="container mx-auto px-4 md:px-6 py-24">
         <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
           <div>
             <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
               We work with entrepreneurs at every stage
             </h2>
             <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
               Whether you're just registering your LLC or managing a growing payroll, precise execution is critical. 
               We bridge the gap between formation and finance.
             </p>
             
             <div className="space-y-6">
               {[
                 { icon: Building2, label: "Startups", desc: "Formation, EIN, and initial tax setup." },
                 { icon: Users, label: "Small Businesses", desc: "Payroll, bookkeeping, and annual compliance." },
                 { icon: Briefcase, label: "Self-Employed", desc: "Tax planning and quarterly filings." },
                 { icon: FileText, label: "Contractors & Investors", desc: "Asset protection and expense tracking." }
               ].map((item, i) => (
                 <div key={i} className="flex gap-4">
                   <div className="h-12 w-12 rounded-lg bg-primary/5 flex items-center justify-center shrink-0">
                     <item.icon className="h-6 w-6 text-primary" />
                   </div>
                   <div>
                     <h3 className="font-bold text-primary text-lg">{item.label}</h3>
                     <p className="text-muted-foreground">{item.desc}</p>
                   </div>
                 </div>
               ))}
             </div>
           </div>
           
           <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-lg -rotate-2" />
              <img 
                src={officeImg}
                alt="Business Meeting" 
                className="relative rounded-lg shadow-xl w-full"
              />
           </div>
         </div>

         <div className="bg-gray-50 rounded-xl p-8 md:p-12 text-center">
           <h2 className="text-3xl font-serif font-bold text-primary mb-4">One Firm. One Point of Contact.</h2>
           <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
             Stop juggling a registered agent, a bookkeeper, and a tax preparer. 
             We consolidate your business compliance into one precise method.
           </p>
           <div className="flex justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
                Partner With Us
              </Button>
            </Link>
           </div>
         </div>
       </div>
    </div>
  );
}
