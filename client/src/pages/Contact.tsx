import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Phone, Mail, Calendar, Clock } from "lucide-react";

export default function Contact() {

  return (
    <div className="pt-20">
      <div className="bg-primary py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Contact & Booking</h1>
          <p className="text-xl text-gray-300">Make booking frictionless. We are ready to help.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info & Booking */}
          <div className="space-y-8">
            <Card className="border-gray-100 shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-primary">Book a Consultation</CardTitle>
                <CardDescription>
                  Choose a time that works for you. Virtual appointments available nationwide.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                 <div className="p-4 bg-accent/10 rounded-md border border-accent/20">
                   <h4 className="font-bold text-primary mb-1">New Client Special</h4>
                   <p className="text-sm text-muted-foreground">Free 15-minute introductory consultation or low-cost strategy call.</p>
                 </div>
                 
                 <a href="https://calendar.app.google/AT2SuG7KDiQeWoCP9" target="_blank" rel="noopener noreferrer">
                   <Button className="w-full h-12 text-lg bg-accent hover:bg-accent/90 text-white">
                     <Calendar className="mr-2 h-5 w-5" /> Schedule Online
                   </Button>
                 </a>

                 <div className="pt-6 border-t border-gray-100 space-y-4">
                   <div className="flex items-center gap-4">
                     <div className="h-10 w-10 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                       <Phone className="h-5 w-5 text-primary" />
                     </div>
                     <div>
                       <p className="text-sm font-medium text-muted-foreground">Call Us</p>
                       <a href="tel:833-454-4794" className="text-lg font-bold text-primary hover:text-accent transition-colors">833-454-4794</a>
                     </div>
                   </div>
                   
                   <div className="flex items-center gap-4">
                     <div className="h-10 w-10 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                       <Mail className="h-5 w-5 text-primary" />
                     </div>
                     <div>
                       <p className="text-sm font-medium text-muted-foreground">Email Us</p>
                       <a href="mailto:service@precisemethod.pro" className="text-lg font-bold text-primary hover:text-accent transition-colors">service@precisemethod.pro</a>
                     </div>
                   </div>

                   <div className="flex items-center gap-4">
                     <div className="h-10 w-10 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                       <Clock className="h-5 w-5 text-primary" />
                     </div>
                     <div>
                       <p className="text-sm font-medium text-muted-foreground">Business Hours</p>
                       <p className="text-base font-medium text-primary">Mon-Fri: 9am - 5pm EST</p>
                     </div>
                   </div>
                 </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-gray-100 shadow-md h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-primary">Send a Message</CardTitle>
                <CardDescription>
                  Tell us about your tax or business needs and we will get back to you.
                </CardDescription>
                <p className="text-xs text-muted-foreground mt-3 italic">
                  PRECISE METHOD is an IRS-authorized firm. All communications are handled professionally and confidentially.
                </p>
              </CardHeader>
              <CardContent>
                <div className="w-full">
                  <iframe 
                    src="https://docs.google.com/forms/d/e/1FAIpQLSdxgZwTGBgcN3j9F6jsbgs165yWFOEbfvXUCFFYIjuyUuixmA/viewform?embedded=true"
                    width="100%"
                    height="800"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    className="rounded-md"
                    title="Contact Form"
                  >
                    Loading...
                  </iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
