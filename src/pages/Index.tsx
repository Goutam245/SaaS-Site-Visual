import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import { Clock, Users, FileText, MessageSquare, Phone, Mail, ArrowRight, CheckCircle2, Shield, TrendingUp, Headphones, Globe, Zap, Bot } from "lucide-react";
import heroImage from "@/assets/hero-manufacturing.jpg";
import dashboardImage from "@/assets/ai-dashboard.jpg";
import factoryImage from "@/assets/factory-worker.jpg";
import teamImage from "@/assets/team-meeting.jpg";

const Index = () => {
  const painPoints = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Response Delays Cost You Money",
      description: "Equipment downtime costs manufacturers $50,000+ per hour. Slow support means lost production, missed deadlines, and frustrated customers.",
      solution: "Instant 24/7/365 AI responses across all channels reduce resolution time by 80%.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Talent Shortage is Real",
      description: "Finding skilled support staff is harder than ever. Budget constraints make 24/7 coverage impossible with traditional teams.",
      solution: "AI-powered support scales infinitely without hiring, training, or overtime costs.",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Knowledge Gets Lost",
      description: "Critical specs scattered across systems. Experienced staff retiring takes decades of knowledge with them.",
      solution: "AI trained on YOUR documentation delivers accurate, consistent answers every time.",
    },
  ];

  const channels = [
    { name: "Web Chat", icon: <MessageSquare className="w-5 h-5" />, desc: "Embedded widget" },
    { name: "Voice", icon: <Phone className="w-5 h-5" />, desc: "AI phone support" },
    { name: "Email", icon: <Mail className="w-5 h-5" />, desc: "Automated responses" },
    { name: "WhatsApp", icon: <MessageSquare className="w-5 h-5" />, desc: "Global messaging" },
    { name: "SMS", icon: <MessageSquare className="w-5 h-5" />, desc: "Text support" },
    { name: "Messenger", icon: <MessageSquare className="w-5 h-5" />, desc: "Social support" },
  ];

  const stats = [
    { value: "80%", label: "Faster Response Time" },
    { value: "24/7", label: "Always Available" },
    { value: "95%", label: "Accuracy Rate" },
    { value: "60%", label: "Cost Reduction" },
  ];

  const benefits = [
    { icon: <Headphones />, title: "24/7/365 Availability", desc: "Never miss a customer inquiry" },
    { icon: <Globe />, title: "Multi-Language Support", desc: "Serve global customers natively" },
    { icon: <Bot />, title: "Trained on YOUR Data", desc: "Accurate, contextual responses" },
    { icon: <Shield />, title: "Zero Hallucinations", desc: "Only verified information" },
    { icon: <TrendingUp />, title: "Human Handoff", desc: "Seamless escalation when needed" },
    { icon: <Zap />, title: "Analytics Dashboard", desc: "Full visibility into performance" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - Dark Navy */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Modern manufacturing facility" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/95 to-background-dark/80" />
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-40" />
        
        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/20 text-primary-foreground border border-primary/30 px-4 py-2 rounded-full mb-8 opacity-0 animate-fade-up">
                <Shield className="w-4 h-4" />
                <span className="text-sm font-medium">Built by Manufacturing Veterans • 25+ Years Experience</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-primary-foreground mb-6 leading-tight opacity-0 animate-fade-up stagger-1">
                Transform Your
                <span className="block text-accent">Customer Support</span>
                <span className="block">With AI That Knows</span>
                <span className="block">Your Business</span>
              </h1>
              
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl leading-relaxed opacity-0 animate-fade-up stagger-2">
                The only AI platform designed specifically for B2B manufacturers. Deliver instant, accurate technical support 24/7 without expanding your team.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start gap-4 opacity-0 animate-fade-up stagger-3">
                <Button variant="default" size="xl" className="bg-accent hover:bg-accent/90 shadow-glow-accent" asChild>
                  <Link to="/get-started">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                  <a href="tel:616-226-9596">
                    <Phone className="w-5 h-5 mr-2" />
                    Talk to an Expert
                  </a>
                </Button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-8 border-t border-primary-foreground/10 opacity-0 animate-fade-up stagger-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center sm:text-left">
                    <div className="text-2xl md:text-3xl font-display text-accent">{stat.value}</div>
                    <div className="text-sm text-primary-foreground/60">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative hidden lg:block opacity-0 animate-scale-in stagger-3">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-primary-foreground/10">
                <img 
                  src={dashboardImage} 
                  alt="AI Dashboard Interface" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/60 to-transparent" />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-4 shadow-xl border border-border animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground-dark">Response Sent</div>
                    <div className="text-xs text-muted-foreground">Resolved in 0.8 seconds</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 bg-background-subtle border-y border-border">
        <div className="container">
          <p className="text-center text-sm text-muted-foreground mb-6 uppercase tracking-wider font-medium">
            Trusted by Leading Manufacturers
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
            {["Industrial Corp", "TechMfg Inc", "Global Parts", "Precision Works", "Allied Manufacturing"].map((company) => (
              <div key={company} className="text-lg font-display text-foreground-muted">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-4 opacity-0 animate-fade-up">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-medium">The Manufacturing Challenge</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground-dark mb-4 opacity-0 animate-fade-up stagger-1">
              Sound Familiar?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-up stagger-2">
              We've spent 25+ years in manufacturing. We know these problems because we've lived them.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {painPoints.map((point, index) => (
              <FeatureCard 
                key={point.title}
                {...point}
                delay={index * 100 + 200}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Channels Section with Image */}
      <section className="py-20 lg:py-28 bg-background-subtle">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative opacity-0 animate-fade-up">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={factoryImage} 
                  alt="Factory worker using tablet" 
                  className="w-full h-auto"
                />
              </div>
              {/* Overlay stat card */}
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-xl p-6 shadow-xl">
                <div className="text-3xl font-display">6+</div>
                <div className="text-sm opacity-80">Communication Channels</div>
              </div>
            </div>
            
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4 opacity-0 animate-fade-up">
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">Omnichannel Support</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display text-foreground-dark mb-6 opacity-0 animate-fade-up stagger-1">
                Meet Your Customers
                <span className="text-primary block">Where They Are</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed opacity-0 animate-fade-up stagger-2">
                Your customers prefer different channels. Customer Sentry provides seamless AI-powered support across every major platform with consistent, accurate responses.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 opacity-0 animate-fade-up stagger-3">
                {channels.map((channel) => (
                  <div 
                    key={channel.name}
                    className="bg-card rounded-xl p-4 border border-border shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3">
                      {channel.icon}
                    </div>
                    <div className="font-semibold text-foreground-dark">{channel.name}</div>
                    <div className="text-xs text-muted-foreground">{channel.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground-dark mb-4 opacity-0 animate-fade-up">
              Why Manufacturers Choose
              <span className="text-primary block">Customer Sentry</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.title}
                className="bg-card rounded-2xl p-6 border border-border shadow-card hover:shadow-card-hover transition-all duration-300 opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 100 + 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-primary-foreground mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground-dark mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Image */}
      <section className="py-20 lg:py-28 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={teamImage} 
            alt="Team collaboration" 
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-primary-foreground mb-6 opacity-0 animate-fade-up">
              Ready to Transform Your
              <span className="text-accent block">Customer Experience?</span>
            </h2>
            <p className="text-lg text-primary-foreground/70 mb-10 leading-relaxed opacity-0 animate-fade-up stagger-1">
              Join forward-thinking manufacturers who are already using AI to deliver exceptional customer experiences while reducing costs by up to 60%.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up stagger-2">
              <Button variant="default" size="xl" className="bg-accent hover:bg-accent/90 shadow-glow-accent" asChild>
                <Link to="/get-started">
                  Schedule Your Free Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <a href="tel:616-226-9596">
                  Or Call 616-226-9596
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

export default Index;