import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronRight,
  Fish,
  Church,
  GraduationCap,
  Leaf,
  Users,
  BarChart3,
  Shield,
  Zap,
  CheckCircle,
  Star,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const StannessTech = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const products = [
    {
      name: "AquaScan",
      icon: Fish,
      category: "Aquaculture Management",
      description:
        "Revolutionary fish farm management system with real-time monitoring and AI-powered analytics",
      features: [
        "Real-time water quality monitoring (pH, oxygen, temperature)",
        "Automated feeding schedules with growth optimization",
        "Disease detection using AI image recognition",
        "Inventory & stock management",
        "Harvest prediction & yield analytics",
        "Mobile app for remote farm monitoring",
      ],
      // color: "from-blue-900 to-blue-900",
    },
    {
      name: "DoxaHub",
      icon: Church,
      category: "Church Management",
      description:
        "Complete church administration platform for modern congregations",
      features: [
        "Member database & attendance tracking",
        "Online giving & tithes management",
        "Event planning & calendar coordination",
        "Small group & ministry organization",
        "Sermon library & media management",
        "Communication tools & notifications",
      ],
      // color: "from-rose-900 to-rose-900",
    },
    {
      name: "EduCore",
      icon: GraduationCap,
      category: "School Management",
      description:
        "Comprehensive school administration and learning management system",
      features: [
        "Student information system (SIS)",
        "Grade book & report card generation",
        "Parent-teacher communication portal",
        "Timetable & class scheduling",
        "Fee management & billing",
        "Library & resource management",
      ],
      // color: "from-orange-700 to-orange-700",
    },
    {
      name: "AgroTrack",
      icon: Leaf,
      category: "Farm Management",
      description: "Smart farming solution for crop and livestock management",
      features: [
        "Field mapping & crop planning",
        "Weather forecasting integration",
        "Equipment & resource tracking",
        "Livestock health monitoring",
        "Financial management & profitability analysis",
        "Market price tracking & sales management",
      ],
      // color: "from-green-700 to-green-700",
    },
  ];

  const stats = [
    { number: "500+", label: "Active Clients" },
    { number: "50K+", label: "Daily Users" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" },
  ];

  const testimonials = [
    {
      name: "David Mensah",
      role: "Fish Farm Manager",
      company: "Coastal Aquaculture Ltd",
      content:
        "AquaScan transformed our operations. We reduced mortality rates by 40% and increased yields by 35% in just 6 months.",
      rating: 5,
    },
    {
      name: "Pastor Emmanuel Osei",
      role: "Senior Pastor",
      company: "Grace Community Church",
      content:
        "DoxaHub simplified our church administration completely. Member engagement has increased and our team saves 15 hours per week.",
      rating: 5,
    },
    {
      name: "Dr. Margaret Asante",
      role: "School Administrator",
      company: "Royal Preparatory School",
      content:
        "EduCore streamlined everything from admissions to report cards. Parents love the transparency and communication features.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-linear-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-primary">
                Stanness Technologies
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {["Home", "Products", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`font-medium transition-colors hover:text-secondary ${
                    activeSection === item.toLowerCase()
                      ? "text-secondary"
                      : "text-primary"
                  }`}
                  onClick={() => setActiveSection(item.toLowerCase())}
                >
                  {item}
                </a>
              ))}
              <button className="px-6 py-2 rounded-lg text-white font-medium transition-transform hover:scale-105 bg-secondary">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X size={24} className="text-primary" />
              ) : (
                <Menu size={24} className="text-primary" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-4">
              {["Home", "Products", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block font-medium text-primary"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setActiveSection(item.toLowerCase());
                  }}
                >
                  {item}
                </a>
              ))}
              <button className="w-full px-6 py-2 rounded-lg text-white font-medium bg-secondary">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-32 pb-20 px-4 sm:px-6 lg:px-8"
        style={{
          background: "linear-gradient(135deg, #0E3646 0%, #1a5570 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Empowering Organizations with Smart Technology
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Custom software solutions for churches, schools, farms, and
                aquaculture businesses. Transform your operations with
                cutting-edge technology.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 transition-transform hover:scale-105 bg-secondary text-white hover:bg-secondary/90">
                  <span>Explore Solutions</span>
                  <ArrowRight size={20} />
                </button>
                <button className="px-8 py-4 bg-white rounded-lg font-semibold transition-transform hover:scale-105 text-primary hover:bg-gray-50">
                  Book a Demo
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 flex items-center justify-center">
                <BarChart3 size={120} className="text-white opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2 text-primary">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              Our Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-specific software designed to streamline operations and
              drive growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
                >
                  <div className={`h-2 bg-linear-to-r ${product.color}`}></div>
                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-secondary">
                        <Icon size={32} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-primary">
                          {product.name}
                        </h3>
                        <p className="text-gray-600">{product.category}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-6">{product.description}</p>
                    <div className="space-y-3">
                      <h4
                        className="font-semibold"
                        style={{ color: "#0E3646" }}
                      >
                        Key Features:
                      </h4>
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <CheckCircle
                            size={20}
                            className="shrink-0 mt-0.5"
                            style={{ color: "#7AA131" }}
                          />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <button className="mt-6 w-full py-3 rounded-lg font-semibold text-white transition-transform hover:scale-105 bg-primary hover:bg-primary/90">
                      Learn More
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "#0E3646" }}
            >
              Why Choose Stanness Technologies?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Secure & Reliable",
                desc: "Enterprise-grade security with 99.9% uptime guarantee",
              },
              {
                icon: Users,
                title: "Expert Support",
                desc: "24/7 customer support from experienced professionals",
              },
              {
                icon: Zap,
                title: "Easy Integration",
                desc: "Seamless integration with your existing systems",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-secondary">
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-primary">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} fill="#7AA131" color="#7AA131" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-bold" style={{ color: "#0E3646" }}>
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                  <div className="text-sm" style={{ color: "#7AA131" }}>
                    {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Get in Touch
              </h2>
              <p className="text-xl mb-8 text-gray-200">
                Ready to transform your organization? Contact us today for a
                free consultation.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail size={24} style={{ color: "#7AA131" }} />
                  <span>stannesstech@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone size={24} style={{ color: "#7AA131" }} />
                  <span>+233248877123</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin size={24} style={{ color: "#7AA131" }} />
                  <span>Accra, Ghana</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-2xl">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-primary">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-primary">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-primary">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                  ></textarea>
                </div>
                <button
                  onClick={(e) => e.preventDefault()}
                  className="w-full py-4 rounded-lg text-white font-semibold transition-transform hover:scale-105 bg-secondary hover:bg-secondary/90"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-[#0a2632] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2025 Stanness Technologies. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default StannessTech;
