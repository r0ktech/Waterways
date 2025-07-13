import React, { useState, useEffect } from "react";
import {
  Search,
  MapPin,
  Calendar,
  Users,
  Star,
  ArrowRight,
  Plane,
  Hotel,
  Car,
  Utensils,
  Shield,
  Award,
  Globe,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

const TravelBookingLanding = () => {
  const [searchType, setSearchType] = useState("stays");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
  ];

  const popularDestinations = [
    {
      name: "Paris",
      country: "France",
      price: "$89",
      image:
        "https://imgs.search.brave.com/5xGh3adN4AceFyWxVBoKznAx0cTF5c7Qaf2h5zg2svM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMy/OTIxNDY4OC9waG90/by9hdXR1bW4taW4t/cGFyaXMuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPW9BaUJS/d1BtYnNKLW56VER5/bzZlbDhEV0VHN2Zy/WDZZSl9zYmR0Tmpj/R0E9",
    },
    {
      name: "Tokyo",
      country: "Japan",
      price: "$156",
      image:
        "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "New York",
      country: "USA",
      price: "$124",
      image:
        "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "London",
      country: "UK",
      price: "$97",
      image:
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Dubai",
      country: "UAE",
      price: "$203",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Barcelona",
      country: "Spain",
      price: "$73",
      image:
        "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  const featuredHotels = [
    {
      name: "The Ritz Carlton",
      location: "Paris, France",
      rating: 4.9,
      price: "$450",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Mandarin Oriental",
      location: "Tokyo, Japan",
      rating: 4.8,
      price: "$380",
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "The Plaza",
      location: "New York, USA",
      rating: 4.7,
      price: "$520",
      image:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Waterways
              </span>
            </div>

            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Stays
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Flights
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Car Rentals
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Attractions
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <button className="hidden md:block text-gray-700 hover:text-blue-600 transition-colors">
                Sign In
              </button>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105">
                Sign Up
              </button>
              <button
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-2 bg-white rounded-lg shadow-lg py-4 px-6 space-y-4">
              <a href="#" className="block text-gray-700 hover:text-blue-600">
                Stays
              </a>
              <a href="#" className="block text-gray-700 hover:text-blue-600">
                Flights
              </a>
              <a href="#" className="block text-gray-700 hover:text-blue-600">
                Car Rentals
              </a>
              <a href="#" className="block text-gray-700 hover:text-blue-600">
                Attractions
              </a>
              <button className="w-full text-left text-gray-700 hover:text-blue-600">
                Sign In
              </button>
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg mt-2">
                Sign Up
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[60vh] xs:h-[70vh] md:h-screen overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image}
                alt={`Hero ${index + 1}`}
                className="w-full h-full object-cover object-center"
                style={{ minHeight: "100%", minWidth: "100%" }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full px-2">
          <div className="text-center text-white max-w-2xl sm:max-w-4xl mx-auto px-2 sm:px-4">
            <h1 className="text-2xl xs:text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 animate-fade-in leading-tight">
              Discover Your Next
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Adventure
              </span>
            </h1>
            <p className="text-sm xs:text-base sm:text-xl md:text-2xl mb-6 sm:mb-12 text-gray-200 max-w-xl sm:max-w-2xl mx-auto">
              Explore the world's most beautiful destinations with exclusive
              deals and unforgettable experiences
            </p>

            {/* Search Widget */}
            <div className="bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 xs:p-4 sm:p-6 shadow-2xl max-w-full sm:max-w-4xl mx-auto">
              {/* Search Type Tabs */}
              <div className="flex flex-wrap justify-center space-x-1 xs:space-x-2 mb-4 sm:mb-6">
                {[
                  { id: "stays", label: "Stays", icon: Hotel },
                  { id: "flights", label: "Flights", icon: Plane },
                  { id: "cars", label: "Cars", icon: Car },
                  { id: "restaurants", label: "Restaurants", icon: Utensils },
                ].map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => setSearchType(id)}
                    className={`flex items-center space-x-1 xs:space-x-2 px-2 xs:px-4 py-2 rounded-lg transition-all text-xs xs:text-sm ${
                      searchType === id
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    <Icon className="w-4 h-4 xs:w-5 xs:h-5" />
                    <span className="font-medium">{label}</span>
                  </button>
                ))}
              </div>

              {/* Common Search Fields */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 mb-4 sm:mb-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Location"
                    className="w-full pl-9 pr-3 py-2 xs:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs xs:text-sm"
                  />
                  <MapPin className="absolute left-3 top-2.5 xs:top-3 w-4 h-4 xs:w-5 xs:h-5 text-gray-400" />
                </div>
                <div className="relative">
                  <input
                    type="date"
                    className="w-full pl-9 pr-3 py-2 xs:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs xs:text-sm"
                  />
                  <Calendar className="absolute left-3 top-2.5 xs:top-3 w-4 h-4 xs:w-5 xs:h-5 text-gray-400" />
                </div>
                <div className="relative">
                  <input
                    type="number"
                    placeholder="Price Range"
                    className="w-full pl-9 pr-3 py-2 xs:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs xs:text-sm"
                  />
                  <span className="absolute left-3 top-2.5 xs:top-3 text-gray-400">
                    $
                  </span>
                </div>
                <div className="relative">
                  <select className="w-full pl-9 pr-3 py-2 xs:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none text-xs xs:text-sm">
                    <option>2 guests</option>
                    <option>1 guest</option>
                    <option>3 guests</option>
                    <option>4+ guests</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-2.5 xs:top-3 w-4 h-4 xs:w-5 xs:h-5 text-gray-400" />
                </div>
              </div>

              <button className="w-full md:w-auto mt-4 sm:mt-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 xs:px-8 py-2 xs:py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 text-sm xs:text-base">
                <Search className="w-4 h-4 xs:w-5 xs:h-5" />
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Popular Destinations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover amazing places around the world with unbeatable prices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularDestinations.map((destination, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="relative h-80">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">
                      {destination.name}
                    </h3>
                    <p className="text-gray-200 mb-2">{destination.country}</p>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm">From</span>
                      <span className="text-xl font-bold">
                        {destination.price}
                      </span>
                      <span className="text-sm">/night</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Hotels */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Hotels
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Luxury accommodations handpicked for unforgettable experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredHotels.map((hotel, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
              >
                <div className="relative h-48">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{hotel.rating}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {hotel.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{hotel.location}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-500">From</span>
                      <span className="text-2xl font-bold text-gray-900">
                        {hotel.price}
                      </span>
                      <span className="text-sm text-gray-500">/night</span>
                    </div>
                    <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all flex items-center space-x-2">
                      <span>Book Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Waterways?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the difference with our premium travel booking platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Secure Booking",
                description:
                  "Your payments and personal information are protected with industry-leading security",
              },
              {
                icon: Award,
                title: "Best Price Guarantee",
                description:
                  "Find a lower price elsewhere? We'll match it and give you an extra 10% off",
              },
              {
                icon: Globe,
                title: "24/7 Support",
                description:
                  "Our dedicated support team is available around the clock to assist you",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join millions of travelers who trust Waterways for their perfect
            getaway
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2">
              <span>Explore Destinations</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Sign Up for Deals
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Waterways</span>
              </div>
              <p className="text-gray-400">
                Your trusted companion for discovering amazing destinations
                around the world.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Safety
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Trust & Safety
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Waterways. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TravelBookingLanding;
