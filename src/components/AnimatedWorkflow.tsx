import { useState, useEffect } from "react";
import { Shield, Camera, Bell, Radio, MapPin, Users } from "lucide-react";

const AnimatedWorkflow = () => {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: "Incident Detected",
      subtitle: "Student triggers SOS alert",
      icon: Shield,
      color: "bg-primary",
      scene: "student",
    },
    {
      title: "AI Detection Active",
      subtitle: "Camera detects suspicious activity",
      icon: Camera,
      color: "bg-primary",
      scene: "camera",
    },
    {
      title: "Location Captured",
      subtitle: "BLE beacon & GPS coordinates",
      icon: MapPin,
      color: "bg-primary",
      scene: "location",
    },
    {
      title: "Alert Transmitted",
      subtitle: "Real-time notification sent",
      icon: Bell,
      color: "bg-primary",
      scene: "alert",
    },
    {
      title: "Security Notified",
      subtitle: "Dashboard updated instantly",
      icon: Radio,
      color: "bg-primary",
      scene: "dashboard",
    },
    {
      title: "Response Dispatched",
      subtitle: "Team assigned & en route",
      icon: Users,
      color: "bg-primary",
      scene: "response",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % steps.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const currentStep = steps[step];
  const StepIcon = currentStep.icon;

  return (
    <div className="relative w-full h-64 bg-card border-4 border-border rounded-3xl p-6 overflow-hidden">
      {/* Static background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-primary opacity-5"
        />
      </div>

      {/* Main content - Horizontal Layout */}
      <div className="relative z-10 h-full flex items-center justify-between gap-6">
        {/* Left side - Icon and Text */}
        <div className="flex items-center gap-6 flex-1">
          {/* Animated icon */}
          <div className="relative flex-shrink-0">
            <div
              className={`absolute inset-0 ${currentStep.color} opacity-20 rounded-full blur-2xl animate-pulse`}
              style={{ width: "100px", height: "100px", margin: "-15px" }}
            />
            <div
              className={`relative w-20 h-20 ${currentStep.color} border-4 border-border rounded-3xl flex items-center justify-center animate-fade-in`}
              key={step}
            >
              <StepIcon className="w-10 h-10 text-background animate-scale-in" />
            </div>
          </div>

          {/* Text content */}
          <div className="space-y-2 animate-fade-in" key={`text-${step}`}>
            <h3 className="text-2xl font-bold text-foreground">{currentStep.title}</h3>
            <p className="text-muted-foreground font-medium">{currentStep.subtitle}</p>
            
            {/* Step indicator */}
            <div className="flex gap-2 mt-3">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    index === step
                      ? "w-8 bg-primary"
                      : index < step
                      ? "w-6 bg-primary/40"
                      : "w-6 bg-muted"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right side - Scene visualization */}
        <div className="w-80 h-full bg-secondary/50 border-3 border-border rounded-2xl p-4 animate-fade-in flex-shrink-0" key={`scene-${step}`}>
          {currentStep.scene === "student" && (
            <div className="flex items-center justify-center h-full">
              <div className="relative">
                <div className="w-16 h-16 bg-card border-3 border-border rounded-full flex items-center justify-center">
                  <div className="text-3xl">👤</div>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-destructive border-3 border-border rounded-full flex items-center justify-center animate-bounce">
                  <Shield className="w-4 h-4 text-background" />
                </div>
              </div>
            </div>
          )}

          {currentStep.scene === "camera" && (
            <div className="flex items-center justify-center h-full gap-3">
              <div className="w-12 h-12 bg-card border-3 border-border rounded-2xl flex items-center justify-center">
                <Camera className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1 space-y-2">
                <div className="h-2 bg-accent/60 rounded-full w-3/4 animate-pulse" />
                <div className="h-2 bg-accent/40 rounded-full w-1/2 animate-pulse" style={{ animationDelay: "0.2s" }} />
                <div className="h-2 bg-accent/30 rounded-full w-2/3 animate-pulse" style={{ animationDelay: "0.4s" }} />
              </div>
            </div>
          )}

          {currentStep.scene === "location" && (
            <div className="flex items-center justify-center h-full">
              <div className="relative w-full h-full bg-muted/30 rounded-xl overflow-hidden">
                <div className="absolute inset-0 grid grid-cols-6 grid-rows-3">
                  {[...Array(18)].map((_, i) => (
                    <div key={i} className="border border-muted/20" />
                  ))}
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-10 h-10 bg-primary border-3 border-border rounded-full flex items-center justify-center animate-bounce">
                    <MapPin className="w-5 h-5 text-background" />
                  </div>
                  <div className="absolute inset-0 w-10 h-10 border-4 border-primary/40 rounded-full animate-ping" />
                </div>
              </div>
            </div>
          )}

          {currentStep.scene === "alert" && (
            <div className="flex items-center justify-center h-full">
              <div className="relative">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-12 h-12 border-4 border-destructive rounded-full opacity-75"
                    style={{
                      animation: `ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite`,
                      animationDelay: `${i * 0.3}s`,
                    }}
                  />
                ))}
                <div className="w-12 h-12 bg-destructive border-4 border-border rounded-full flex items-center justify-center">
                  <Bell className="w-6 h-6 text-background animate-pulse" />
                </div>
              </div>
            </div>
          )}

          {currentStep.scene === "dashboard" && (
            <div className="space-y-2 h-full flex flex-col justify-center">
              <div className="flex items-center gap-2 p-2 bg-card border-3 border-border rounded-xl animate-fade-in">
                <div className="w-2 h-2 bg-destructive rounded-full animate-pulse" />
                <div className="flex-1 space-y-1">
                  <div className="h-1.5 bg-foreground/60 rounded-full w-2/3" />
                  <div className="h-1.5 bg-foreground/30 rounded-full w-1/2" />
                </div>
              </div>
              <div className="flex items-center gap-2 p-2 bg-card border-3 border-border rounded-xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <div className="flex-1 space-y-1">
                  <div className="h-1.5 bg-foreground/60 rounded-full w-3/4" />
                  <div className="h-1.5 bg-foreground/30 rounded-full w-1/3" />
                </div>
              </div>
            </div>
          )}

          {currentStep.scene === "response" && (
            <div className="flex items-center justify-center h-full gap-4">
              <div className="flex -space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 bg-card border-3 border-border rounded-full flex items-center justify-center animate-fade-in"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  >
                    <Users className="w-5 h-5 text-accent" />
                  </div>
                ))}
              </div>
              <div className="text-xl animate-bounce">🚨</div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes scale-in {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default AnimatedWorkflow;
