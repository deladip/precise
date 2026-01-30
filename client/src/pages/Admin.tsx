import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Paperclip, Mail, Phone, Calendar, RefreshCw } from "lucide-react";
import { format } from "date-fns";

interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  attachmentPath: string | null;
  attachmentName: string | null;
  createdAt: string;
}

export default function Admin() {
  const { data, isLoading, error, refetch } = useQuery<{ success: boolean; data: ContactInquiry[] }>({
    queryKey: ["contact-inquiries"],
    queryFn: async () => {
      const response = await fetch("/api/contact/inquiries");
      if (!response.ok) {
        throw new Error("Failed to fetch inquiries");
      }
      return response.json();
    },
    refetchInterval: 30000,
  });

  const inquiries = data?.data || [];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-serif font-bold text-primary">Contact Inquiries</h1>
            <p className="text-muted-foreground mt-1">View and manage contact form submissions</p>
          </div>
          <Button onClick={() => refetch()} variant="outline" className="gap-2">
            <RefreshCw className="h-4 w-4" />
            Refresh
          </Button>
        </div>

        {isLoading && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading inquiries...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-12">
            <p className="text-red-500">Failed to load inquiries. Please try again.</p>
          </div>
        )}

        {!isLoading && inquiries.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg border">
            <Mail className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground">No inquiries yet</p>
          </div>
        )}

        <div className="space-y-4">
          {inquiries.map((inquiry) => (
            <Card key={inquiry.id} className="border-gray-200 shadow-sm">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg font-bold text-primary">{inquiry.name}</CardTitle>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Mail className="h-4 w-4" />
                        <a href={`mailto:${inquiry.email}`} className="hover:text-accent">{inquiry.email}</a>
                      </span>
                      <span className="flex items-center gap-1">
                        <Phone className="h-4 w-4" />
                        <a href={`tel:${inquiry.phone}`} className="hover:text-accent">{inquiry.phone}</a>
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline" className="mb-2">
                      <Calendar className="h-3 w-3 mr-1" />
                      {format(new Date(inquiry.createdAt), "MMM d, yyyy h:mm a")}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-4 rounded-md mb-4">
                  <p className="text-sm whitespace-pre-wrap">{inquiry.message}</p>
                </div>
                
                {inquiry.attachmentName && (
                  <div className="flex items-center gap-2">
                    <Paperclip className="h-4 w-4 text-accent" />
                    <a 
                      href={inquiry.attachmentPath?.replace(process.cwd(), "") || "#"}
                      download={inquiry.attachmentName}
                      className="text-sm text-accent hover:underline"
                    >
                      {inquiry.attachmentName}
                    </a>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
