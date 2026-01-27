import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Phone, Mail, Calendar, Clock, MapPin } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
  message: z.string().min(10, "Please provide a brief message about your needs"),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Request Sent",
      description: "We'll be in touch shortly to schedule your consultation.",
    });
    form.reset();
  }

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
                 
                 <Button className="w-full h-12 text-lg bg-accent hover:bg-accent/90 text-white">
                   <Calendar className="mr-2 h-5 w-5" /> Schedule Online (Calendly)
                 </Button>

                 <div className="pt-6 border-t border-gray-100 space-y-4">
                   <div className="flex items-center gap-4">
                     <div className="h-10 w-10 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                       <Phone className="h-5 w-5 text-primary" />
                     </div>
                     <div>
                       <p className="text-sm font-medium text-muted-foreground">Call Us</p>
                       <p className="text-lg font-bold text-primary">833-XXX-XXXX</p>
                     </div>
                   </div>
                   
                   <div className="flex items-center gap-4">
                     <div className="h-10 w-10 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                       <Mail className="h-5 w-5 text-primary" />
                     </div>
                     <div>
                       <p className="text-sm font-medium text-muted-foreground">Email Us</p>
                       <p className="text-lg font-bold text-primary">info@precisemethod.com</p>
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
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} className="h-12 bg-gray-50" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="john@example.com" {...field} className="h-12 bg-gray-50" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone</FormLabel>
                            <FormControl>
                              <Input placeholder="(555) 123-4567" {...field} className="h-12 bg-gray-50" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>How can we help?</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="I need help with business registration and tax filing..." 
                              className="min-h-[150px] bg-gray-50 resize-none" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-medium text-lg">
                      Send Message
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
