import FounderCard from "../components/FounderCard";
import ContactCTA from "../components/ContactCTA";
import Image from "next/image";

const founders = [
  {
    name: "Divyesh Parmar",
    position: "Co-Founder & CEO",
    image: "/images/owner.png",
    linkedin: "https://www.linkedin.com/in/divyesh-parmar-19795826b/",
    description:
      "An expert in tender management with deep industry knowledge, Divyesh leads the team with his passion for delivering exceptional solutions to clients.",
  },
  {
    name: "Mohil Gajera",
    position: "Co-Founder & CTO",
    image: "/images/owner.png",
    linkedin: "https://www.linkedin.com/in/mohil-gajera-205383277/",
    description:
      "With extensive experience in technology and innovation, Mohil ensures that Niyamak Tender Solutions remains at the forefront of digital advancements.",
  },
];

const stats = [
  { number: "500+", label: "Successful Tenders" },
  { number: "100+", label: "Happy Clients" },
  { number: "95%", label: "Success Rate" },
  { number: "24/7", label: "Support" },
];

const services = [
  {
    title: "Tender Search & Analysis",
    description: "Comprehensive tender search and analysis to identify the best opportunities for your business.",
    icon: "🔍"
  },
  {
    title: "Document Preparation",
    description: "Expert assistance in preparing and reviewing tender documents to ensure compliance and quality.",
    icon: "📄"
  },
  {
    title: "Bid Management",
    description: "End-to-end bid management support to maximize your chances of success.",
    icon: "📊"
  },
  {
    title: "Compliance Check",
    description: "Thorough compliance verification to meet all tender requirements and regulations.",
    icon: "✓"
  }
];

const testimonials = [
  {
    name: "Rajesh Patel",
    position: "CEO, Tech Solutions",
    image: "/images/author.png",
    text: "Niyamak Tender Solutions has transformed how we approach tenders. Their expertise and support have been invaluable."
  },
  {
    name: "Priya Sharma",
    position: "Director, BuildRight Construction",
    image: "/images/author.png",
    text: "The team's attention to detail and professional approach has significantly increased our tender success rate."
  }
];

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Tender Management Background"
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
                    Welcome to Niyamak
                  </span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  Transforming Tender Management
                </h1>
                <p className="text-xl text-gray-200 mb-8 max-w-xl leading-relaxed">
                  Your trusted partner in tender management, helping businesses navigate the complex world of tenders with expertise and precision.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="#contact" 
                    className="group bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                  >
                    Get Started
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <a 
                    href="#services" 
                    className="group border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                  >
                    Our Services
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Right Content - Stats Cards */}
              <div className="hidden lg:grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
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

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Mission & Vision</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission Card */}
            <div className="group relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="absolute -top-6 left-8 bg-blue-600 text-white p-4 rounded-full shadow-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="pt-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our mission is to simplify the tendering process for businesses by
                  providing expert assistance, ensuring compliance, and maximizing
                  success rates.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="absolute -top-6 left-8 bg-blue-600 text-white p-4 rounded-full shadow-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div className="pt-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Vision</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To become the leading tender management solution provider by
                  integrating cutting-edge technology and industry expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Process</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your requirements and goals" },
              { step: "02", title: "Analysis", description: "Evaluating tender opportunities and requirements" },
              { step: "03", title: "Preparation", description: "Creating and reviewing tender documents" },
              { step: "04", title: "Submission", description: "Final review and timely submission" }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center text-blue-600 font-bold text-xl mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gray-200 mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">&quot;{testimonial.text}&quot;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Founders */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Founders</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {founders.map((founder, index) => (
              <FounderCard key={index} {...founder} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </div>
  );
}
