import { Bell, Cpu, Eye, Database, Shield } from "lucide-react";

const steps = [
  {
    icon: Bell,
    title: "Student triggers SOS",
    description: "BLE + GPS captured",
    number: "01",
  },
  {
    icon: Cpu,
    title: "ESP32 panic button",
    description: "Instant hardware alert",
    number: "02",
  },
  {
    icon: Eye,
    title: "AI/OpenCV detects",
    description: "Fight or harassment",
    number: "03",
  },
  {
    icon: Database,
    title: "Firestore triggers",
    description: "Real-time alerts",
    number: "04",
  },
  {
    icon: Shield,
    title: "Dashboard responds",
    description: "Immediately",
    number: "05",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            How ResQ Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Five-step process from alert to response
          </p>
        </div>
        
        <div className="grid md:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div
                className="bg-card border-4 border-border rounded-3xl p-6 card-shadow card-hover animate-fade-in text-center h-full flex flex-col items-center justify-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="inline-flex items-center justify-center w-10 h-10 bg-primary text-primary-foreground border-3 border-border rounded-full text-sm font-bold">
                    {step.number}
                  </span>
                </div>
                
                <div className="w-16 h-16 bg-secondary border-3 border-border rounded-2xl flex items-center justify-center mb-4 mt-4">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-base font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <div className="w-6 h-1 bg-primary"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
