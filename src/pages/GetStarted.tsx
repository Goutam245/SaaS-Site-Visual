import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StepCard from "@/components/StepCard";
import { Button } from "@/components/ui/button";
import { Calendar, Video, ArrowRight, CheckCircle2, Play, Phone, Mail } from "lucide-react";
import teamImage from "@/assets/team-meeting.jpg";

const GetStarted = () => {
  const steps = [
    {
      step: 1,
      title: "Initial 15 Minute Consultation",
      description: "Schedule a short Zoom call with our founder. We'll discuss your challenges and determine if we can help.",
    },
    {
      step: 2,
      title: "AI Solutions Framework",
      description: "If we're a good fit, we'll schedule a 1-2 hour discovery call to map out exact solutions.",
    },
    {
      step: 3,
      title: "Discovery Session",
      description: "Meet with your team to gather information needed to complete your AI Solutions Framework.",
    },
    {
      step: 4,
      title: "Proposal & Implementation",
      description: "Receive a detailed proposal within 7-10 days. Once approved, we begin building your solution.",
    },
  ];

  const expectations = [
    "No high-pressure sales tactics",
    "Clear, transparent pricing",
    "Tailored solutions for your needs",
    "Direct access to our founder",
    "Manufacturing expertise since day one",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0">
          <img src={teamImage} alt="Team collaboration" className="w-full h-full object-cover opacity-15" />
        </div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-50" />
        
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display text-primary-foreground mb-6 leading-tight opacity-0 animate-fade-up">
              Ready to <span className="text-accent">Get Started?</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-up stagger-1">
              Let's discuss how Customer Sentry can transform your customer support with AI built specifically for manufacturing.
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="opacity-0 animate-fade-up">
                <h2 className="text-2xl md:text-3xl font-display text-foreground-dark mb-4">
                  What to <span className="text-primary">Expect</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Get a quick overview of our process and see how Customer Sentry works with manufacturing companies like yours.
                </p>
                <ul className="space-y-3">
                  {expectations.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="opacity-0 animate-fade-up stagger-1">
                <div className="relative aspect-video bg-background-dark rounded-2xl overflow-hidden shadow-xl group cursor-pointer">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform shadow-glow-accent">
                      <Play className="w-8 h-8 text-accent-foreground ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-background-subtle">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display text-foreground-dark mb-4 opacity-0 animate-fade-up">
              Our Simple <span className="text-primary">4-Step Process</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <StepCard key={step.step} {...step} delay={index * 100 + 200} />
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="opacity-0 animate-fade-up">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">Book Your Call</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-display text-foreground-dark mb-6">
                  Meet With Our <span className="text-primary">Founder</span>
                </h2>
                
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  The first step is a 15-20 minute Zoom call with Greg Beuerle, our founder. He'll personally discuss your challenges.
                </p>
                
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Video className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground-dark">Greg Beuerle</p>
                    <p className="text-muted-foreground text-sm">Founder, Customer Sentry</p>
                  </div>
                </div>
              </div>
              
              <div className="opacity-0 animate-fade-up stagger-1">
                <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
                  <h3 className="text-xl font-display text-foreground-dark mb-6">Schedule Your Free Consultation</h3>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-success" />
                      <span>15-20 minute Zoom call</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-success" />
                      <span>No obligation or pressure</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-success" />
                      <span>Personalized assessment</span>
                    </div>
                  </div>
                  
                  <Button variant="default" size="xl" className="w-full bg-accent hover:bg-accent/90">
                    Book Your Call Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-hero">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-display text-primary-foreground mb-2">Have Questions?</h3>
              <p className="text-primary-foreground/70">We're here to help. Reach out anytime.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="default" size="lg" className="bg-accent hover:bg-accent/90" asChild>
                <a href="tel:616-226-9596">
                  <Phone className="w-4 h-4 mr-2" />
                  Call 616-226-9596
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <a href="mailto:team@customersentry.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GetStarted;