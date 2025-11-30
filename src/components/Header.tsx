import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b-4 border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-foreground">ResQ</span>
          </div>
          
          <Button variant="hero" size="lg">
            Developing soon
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
