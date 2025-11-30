import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const ComingSoon = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-2xl">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
          
          <div className="relative bg-card border-4 border-border rounded-3xl p-12 card-shadow animate-fade-in">
            <div className="text-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Launching Soon
              </h2>
              
              <p className="text-lg text-muted-foreground">
                Join our waitlist to get updates on ResQ's launch and be the first to experience next-generation campus safety.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto pt-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-14 border-4 border-border rounded-full text-base px-6"
                />
                
                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Join Waitlist
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
