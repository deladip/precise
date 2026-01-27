import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ShieldCheck, Award, FileCheck } from "lucide-react";

export default function About() {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">About PRECISE METHOD</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We are a professional tax and business services firm committed to accuracy, compliance, and long-term success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              { 
                icon: ShieldCheck, 
                title: "IRS Authorized ERO", 
                desc: "Officially authorized by the IRS to originate electronic tax returns." 
              },
              { 
                icon: FileCheck, 
                title: "Certified Acceptance Agent", 
                desc: "Authorized to assist alien individuals and other foreign persons with obtaining ITINs." 
              },
              { 
                icon: Award, 
                title: "Certifying Officer of Accounts", 
                desc: "High-level certification ensuring financial integrity and accurate reporting." 
              }
            ].map((cred, i) => (
              <div key={i} className="bg-white p-8 rounded-sm border border-gray-100 shadow-sm text-center">
                <div className="h-16 w-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center mb-6">
                  <cred.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-serif font-bold text-lg text-primary mb-3">{cred.title}</h3>
                <p className="text-muted-foreground text-sm">{cred.desc}</p>
              </div>
            ))}
          </div>

          <div className="prose prose-lg max-w-none text-muted-foreground mb-16">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Our Philosophy</h2>
            <p className="mb-6">
              We believe precision matters. Errors cost time, money, and peace of mind. Our method ensures things are done right the first time.
            </p>
            <p className="mb-6">
              In an industry often characterized by complexity and confusion, we strive to be the clear, calm voice of authority. We don't just process numbers; we understand the stories behind them. Whether you are a startup founder laying the groundwork for your dream or a family ensuring your tax compliance, we treat your finances with the respect and precision they deserve.
            </p>
            <p>
              We are not just here during tax season. We are your year-round partners in financial health.
            </p>
          </div>
          
          <div className="bg-primary text-white p-12 rounded-sm text-center">
             <h2 className="text-2xl font-serif font-bold mb-4">Experience the Difference</h2>
             <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
               Work with a team that values your peace of mind as much as you do.
             </p>
             <Link href="/contact">
               <Button className="bg-accent hover:bg-accent/90 text-white px-8 h-12">
                 Contact Us Today
               </Button>
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
