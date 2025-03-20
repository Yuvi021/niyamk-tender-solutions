import ContactCTA from "../components/ContactCTA";
import Image from "next/image";

const services = [
  {
    title: "Tender Submission",
    description:
      "We handle the complete tender submission process, ensuring compliance with deadlines, documentation, and regulations.",
    icon: "/images/custom.png",
    features: [
      "Document preparation",
      "Timeline management",
      "Quality assurance",
    ],
  },
  {
    title: "Bid Management",
    description:
      "Our bid management services streamline your bidding process, enhancing efficiency and maximizing success rates.",
    icon: "/images/custom.png",
    features: ["Bid strategy", "Cost optimization", "Risk assessment"],
  },
  {
    title: "Tender Analysis",
    description:
      "In-depth tender analysis to identify opportunities, risks, and strategies to improve your bid quality.",
    icon: "/images/custom.png",
    features: ["Market research", "Competitor analysis", "Success probability"],
  },
  {
    title: "Consultancy & Advisory",
    description:
      "Expert consultancy to help businesses navigate complex tender processes and regulations effectively.",
    icon: "/images/custom.png",
    features: ["Expert guidance", "Process optimization", "Best practices"],
  },
  {
    title: "Compliance & Documentation",
    description:
      "Ensure all tender documents comply with regulatory standards to avoid disqualification and secure higher success.",
    icon: "/images/custom.png",
    features: [
      "Regulatory compliance",
      "Document verification",
      "Quality checks",
    ],
  },
  {
    title: "Post-Submission Review",
    description:
      "Our post-submission analysis ensures continuous improvement for future tender applications.",
    icon: "/images/custom.png",
    features: [
      "Performance analysis",
      "Feedback integration",
      "Improvement planning",
    ],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "We begin with a detailed consultation to understand your requirements and objectives."
  },
  {
    number: "02",
    title: "Service Selection",
    description: "Based on your needs, we recommend the most suitable services and create a customized plan."
  },
  {
    number: "03",
    title: "Implementation",
    description: "Our team implements the selected services with precision and attention to detail."
  },
  {
    number: "04",
    title: "Review & Optimization",
    description: "We continuously review and optimize our services to ensure maximum effectiveness."
  }
];

export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services-hero.jpg"
            alt="Tender Services Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-800/90 to-blue-900/95"></div>
          {/* Animated Background Elements */}
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="text-left">
                <div className="inline-block">
                  <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6 block">
                    Our Services
                  </span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  Comprehensive Tender Management Solutions
                </h1>
                <p className="text-xl text-gray-200 mb-8 max-w-xl leading-relaxed">
                  We provide end-to-end tender management services to help your business succeed in the competitive tender landscape.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="#services" 
                    className="group bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                  >
                    Explore Services
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <a 
                    href="#contact" 
                    className="group border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                  >
                    Get Started
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Right Content - Service Highlights */}
              <div className="hidden lg:grid grid-cols-2 gap-6">
                {[
                  { number: "6+", label: "Core Services" },
                  { number: "500+", label: "Successful Projects" },
                  { number: "98%", label: "Client Satisfaction" },
                  { number: "24/7", label: "Support Available" }
                ].map((stat, index) => (
                  <div 
                    key={index} 
                    className="group bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="text-5xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                      {stat.number}
                    </div>
                    <div className="text-gray-200 text-lg">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-white text-sm font-medium">Scroll Down</span>
            <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      </section>

      {/* Services Grid Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive range of tender management services to help you succeed in your business endeavors.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={40}
                    height={40}
                    className="text-blue-600"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Process</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We follow a systematic approach to deliver exceptional tender management services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center text-blue-600 font-bold text-xl mb-6">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Team",
                description: "Our team of professionals brings years of industry experience and expertise.",
                icon: "👥"
              },
              {
                title: "Proven Track Record",
                description: "We have a history of successful tender submissions and satisfied clients.",
                icon: "🏆"
              },
              {
                title: "Personalized Approach",
                description: "We tailor our services to meet your specific needs and requirements.",
                icon: "🎯"
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-8">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <ContactCTA />
    </div>
  );
}
