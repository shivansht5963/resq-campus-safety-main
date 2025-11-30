import { Shield, MapPin, Radio, Camera, Volume2, LayoutDashboard } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "SOS One-Tap Emergency Alerts",
    description: "Instant emergency reporting with a single tap. Alert campus security immediately with your location.",
    label: "Fastest Response",
  },
  {
    icon: MapPin,
    title: "BLE Indoor Location",
    description: "Precise indoor positioning using BLE beacons. Security knows exactly where you are, even inside buildings.",
    label: "Precise Tracking",
  },
  {
    icon: Radio,
    title: "ESP32 Panic Button",
    description: "Hardware fail-safe panic buttons across campus. Works even when your phone doesn't.",
    label: "Hardware Backup",
  },
  {
    icon: Camera,
    title: "AI Fight & Harassment Detection",
    description: "OpenCV and ML models automatically detect violent incidents and trigger alerts.",
    label: "AI-Powered",
  },
  {
    icon: Volume2,
    title: "High-Decibel Voice Alert",
    description: "Voice recognition triggers for words like 'help' and 'bachao'. Hands-free emergency activation.",
    label: "Voice Activated",
  },
  {
    icon: LayoutDashboard,
    title: "Real-Time Security Dashboard",
    description: "Live monitoring dashboard with instant alerts, chat, and response coordination for security teams.",
    label: "Live Monitoring",
  },
];

const Features = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Key Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive safety features designed for modern campuses
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card border-4 border-border rounded-3xl p-8 card-shadow card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="px-3 py-1 bg-accent text-accent-foreground border-3 border-border rounded-full text-xs font-semibold">
                    {feature.label}
                  </span>
                </div>
                
                <div className="w-14 h-14 bg-primary/10 border-3 border-primary/30 rounded-2xl flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
