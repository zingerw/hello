import React from 'react';
import { ArrowRight, CheckCircle2, Github, Linkedin, Twitter } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-white font-bold text-xl">CompanyName</div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-white hover:text-indigo-200">Features</a>
              <a href="#about" className="text-white hover:text-indigo-200">About</a>
              <a href="#contact" className="text-white hover:text-indigo-200">Contact</a>
            </div>
          </div>
        </nav>
        
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Build something amazing with our platform
            </h1>
            <p className="text-xl text-indigo-100 mb-8">
              Create, innovate, and scale your ideas with our powerful tools and intuitive interface.
            </p>
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold 
                             hover:bg-indigo-50 transition duration-300 flex items-center">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md 
                                        transition duration-300">
                <CheckCircle2 className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="Team collaboration" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">About Us</h2>
              <p className="text-gray-600 mb-6">
                We're passionate about creating tools that help businesses grow and succeed. 
                Our platform is built with the latest technology and designed with user experience in mind.
              </p>
              <p className="text-gray-600">
                Join thousands of satisfied customers who have transformed their business with our solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <h3 className="text-xl font-bold mb-4">CompanyName</h3>
              <p className="text-gray-400">Building the future, one pixel at a time.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-indigo-400 transition duration-300">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-indigo-400 transition duration-300">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-indigo-400 transition duration-300">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} CompanyName. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    title: "Easy Integration",
    description: "Seamlessly integrate our platform with your existing tools and workflows."
  },
  {
    title: "Powerful Analytics",
    description: "Gain valuable insights with our comprehensive analytics dashboard."
  },
  {
    title: "Secure & Reliable",
    description: "Enterprise-grade security and 99.9% uptime guarantee for peace of mind."
  }
];

export default App;