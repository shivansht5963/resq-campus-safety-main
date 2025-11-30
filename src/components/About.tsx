const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-card border-4 border-border rounded-3xl p-12 card-shadow animate-fade-in">
          <div className="text-center space-y-6">
            <div className="inline-block">
              <span className="px-4 py-2 bg-primary/10 text-primary border-3 border-primary/30 rounded-full text-sm font-semibold">
                About ResQ
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Real-Time Campus Safety, Powered by AI
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              ResQ is a real-time emergency reporting and AI detection system for college campuses. 
              It offers instant reporting, BLE beacon indoor location, ESP32 panic kiosks, OpenCV 
              fight/harassment detection, high-decibel voice triggers ("help", "bachao"), and a live 
              response dashboard for campus security.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
