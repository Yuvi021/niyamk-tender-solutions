import CTASection from "./components/CTASection";
import ServicesSection from "./components/ServiceSection";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";


export default function Home() {
  return (
    <div>
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-32">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Transform Your <span className="text-blue-300">Tender Management</span> Process
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 leading-relaxed">
              Streamline your tender submissions, increase win rates, and grow your business with our comprehensive tender management solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200 shadow-lg">
                Get Started
              </button>
              <button className="border-2 border-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition-colors duration-200">
                Learn More
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-4xl font-bold text-blue-300">500+</div>
                <div className="text-blue-100 mt-2">Projects Completed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-4xl font-bold text-blue-300">95%</div>
                <div className="text-blue-100 mt-2">Success Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-4xl font-bold text-blue-300">50+</div>
                <div className="text-blue-100 mt-2">Expert Team</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center relative">
            <div className="absolute inset-0 flex items-center justify-center opacity-5">
              <div className="text-[6rem] sm:text-[10rem] md:text-[15rem] lg:text-[20rem] font-bold text-blue-600">N</div>
            </div>
            <span className="text-blue-600 font-semibold text-lg mb-4 block">WELCOME TO</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Niyamak
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 px-4">
                Tender
              </span>
              Solutions
            </h2>
            <p className="mt-8 text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We provide top-notch tender management solutions to empower your
              business and drive success in the competitive market.
            </p>
            {/* <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group relative px-6 py-3 w-full sm:w-64 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl">
                Get Started
                <div className="absolute inset-0 border-2 border-blue-400 rounded-lg -rotate-1 group-hover:rotate-0 transition-transform"></div>
              </button>
              <button className="group relative w-full sm:w-64 px-6 py-3 bg-white text-blue-600 rounded-lg font-medium border-2 border-blue-100 hover:border-blue-200 transition-all duration-200 shadow-lg hover:shadow-xl">
                Schedule Demo
                <div className="absolute inset-0 border-2 border-blue-200 rounded-lg rotate-1 group-hover:rotate-0 transition-transform"></div>
              </button>
            </div> */}
            <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="p-6 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
                <div className="text-blue-600 mb-3">
                  <svg className="w-10 h-10 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Expert Team</h3>
                <p className="text-gray-600">Dedicated professionals with years of experience</p>
              </div>
              <div className="p-6 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
                <div className="text-blue-600 mb-3">
                  <svg className="w-10 h-10 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Comprehensive Solutions</h3>
                <p className="text-gray-600">End-to-end tender management services</p>
              </div>
              <div className="p-6 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
                <div className="text-blue-600 mb-3">
                  <svg className="w-10 h-10 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">High Success Rate</h3>
                <p className="text-gray-600">Proven track record of winning tenders</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">1</div>
              <h3 className="text-xl font-semibold mb-3">Analysis</h3>
              <p className="text-gray-600">Thorough analysis of tender requirements and documentation.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">2</div>
              <h3 className="text-xl font-semibold mb-3">Planning</h3>
              <p className="text-gray-600">Strategic planning and resource allocation for successful execution.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">3</div>
              <h3 className="text-xl font-semibold mb-3">Execution</h3>
              <p className="text-gray-600">Precise execution with attention to detail and compliance.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">4</div>
              <h3 className="text-xl font-semibold mb-3">Submission</h3>
              <p className="text-gray-600">Timely submission with complete documentation and follow-up.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Latest Statistics</h2>
            <p className="text-lg sm:text-xl text-gray-600">Our track record speaks for itself</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">₹500Cr+</div>
              <div className="text-gray-700">Project Value Handled</div>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-gray-700">Active Clients</div>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-700">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </div>
  );
}
