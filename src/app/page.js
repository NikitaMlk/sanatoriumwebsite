"use client";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    
    <div className={darkMode ? "dark bg-black text-white" : "bg-gray-100 text-gray-900"}>
      <div style={{ backgroundImage: "url('/image/land.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <header className="text-white p-4 flex justify-between items-center bg-black bg-opacity-50 shadow-lg">
        <div className="flex items-center space-x-4">
          <h1 className="text-3xl font-semibold">Sanatorium Sanctuary</h1>
        </div>

        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-green-300">Home</a>
          <a href="#about" className="hover:text-green-300">About</a>
          <a href="#services" className="hover:text-green-300">Services</a>
          <a href="#contact" className="hover:text-green-300">Contact</a>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="bg-white text-black px-4 py-2 rounded-full w-72 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <button onClick={() => setDarkMode(!darkMode)} className="bg-green-500 px-4 py-2 rounded-full text-white transition-transform transform hover:scale-105">
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </header>



      <section
          id="description"
          className="relative w-full h-screen flex flex-col justify-center items-center text-center text-white"
          
        >
          
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 max-w-3xl p-6">
            <h2 className="text-4xl font-bold mb-4">About the Sanatorium</h2>
            <p className="text-lg">
              Sanatorium Sanctuary offers comprehensive wellness, rehabilitation, and relaxation services.
              We provide modern medical services including massage, spa, therapy, and physiotherapy.
              Our professional specialists will help you restore your health and improve well-being.
            </p>
          </div>
        </section>
        </div>

        <main>
        <div className="p-6 max-w-6xl mx-auto mt-10">
          <section id="services" className="mb-8">
            <h2 className="text-xl font-bold text-center mb-8">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              {[
                { id: 1, name: "Massage", price: "$50", desc: "Relaxing massage for restoring energy.", image: "/image/massage.jpg" },
                { id: 2, name: "SPA", price: "$70", desc: "SPA treatments for your health and beauty.", image: "/image/spa.jpg" },
                { id: 3, name: "Therapy", price: "$60", desc: "A set of therapeutic procedures for health improvement.", image: "/image/therapy.jpg" },
                { id: 4, name: "Physiotherapy", price: "$80", desc: "Specialized physiotherapy treatments for rehabilitation and wellness.", image: "/image/physiotherapy.jpg" }
              ].map(service => (
                <div key={service.id} className="bg-cover bg-center h-64 rounded-lg relative shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105" style={{ backgroundImage: `url(${service.image})` }}>
                  <div className="bg-gray-800 bg-opacity-75 text-white p-4 absolute bottom-0 h-full w-full rounded-b-lg">
                    <h3 className="text-lg font-semibold">{service.name}</h3>
                    <p>{service.price}</p>
                    <p className="text-sm">{service.desc}</p>
                    <button className="bg-green-500 px-3 py-1 mt-2 rounded" onClick={() => window.location.href=`/payment?id=${service.id}`}>Buy</button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="additional-info" className="py-16 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-8">Discover Our Sanatorium</h2>
            
            {/* Yoga Facility */}
            <div className="facility flex flex-col md:flex-row mb-8">
              <div className="facility-text flex-1 p-6 bg-white shadow-lg rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Yoga Sessions</h3>
                <p className="text-lg text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                </p>
              </div>
              <div 
                className="facility-image flex-1 h-64 bg-cover bg-center rounded-lg"
                style={{ backgroundImage: "url('/image/joga.jpg')" }}
              ></div>
            </div>

            {/* Mountain Views Facility */}
            <div className="facility flex flex-col md:flex-row mb-8">
              <div className="facility-text flex-1 p-6 bg-white shadow-lg rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Mountain Views</h3>
                <p className="text-lg text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                </p>
              </div>
              <div 
                className="facility-image flex-1 h-64 bg-cover bg-center rounded-lg"
                style={{ backgroundImage: "url('/image/mountain.jpg')" }}
              ></div>
            </div>

            {/* Healthy Food Facility */}
            <div className="facility flex flex-col md:flex-row mb-8">
              <div className="facility-text flex-1 p-6 bg-white shadow-lg rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Healthy Food</h3>
                <p className="text-lg text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                </p>
              </div>
              <div 
                className="facility-image flex-1 h-64 bg-cover bg-center rounded-lg"
                style={{ backgroundImage: "url('/image/food.jpg')" }}
              ></div>
            </div>
          </section>

          <div className="text-center mt-10 mb-20">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Buy your weekends now</h2>
            <button 
              onClick={() => window.location.href='https://buy.stripe.com/test_4gw6su7xbfFFdkQ288'}
              className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-10 py-4 mt-6 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-green-600 text-lg">
              Buy Now
            </button>
          </div>
      </div>
      </main>
      

      <footer className="bg-gradient-to-r from-slate-950 via-slate-700 to-slate-950 text-white p-8 mt-6">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-start">
          {/* Logo Section */}
          <div className="flex items-center space-x-4 mb-6 md:mb-0">
            <h2 className="text-2xl font-semibold">Sanatorium Sanctuary</h2>
          </div>

          {/* Contact Info Section */}
          <div className="space-y-4 mb-6 md:mb-0">
            <h3 className="font-semibold text-xl">Contact Information</h3>
            <p>Phone: +380123456789</p>
            <p>Email: info@sanatorium.ua</p>
            <p>Address: 123 Health St, Wellness City, Austria</p>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4 mb-6 md:mb-0">
            <h3 className="font-semibold text-xl">Quick Links</h3>
            <ul>
              <li><a href="#home" className="hover:text-green-300">Home</a></li>
              <li><a href="#about" className="hover:text-green-300">About Us</a></li>
              <li><a href="#services" className="hover:text-green-300">Services</a></li>
              <li><a href="#contact" className="hover:text-green-300">Contact</a></li>
              <li><a href="/privacy-policy" className="hover:text-green-300">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="hover:text-green-300">Terms of Service</a></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-xl">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="https://facebook.com" target="_blank" className="text-white hover:text-blue-600">
                <i className="fab fa-facebook-square text-3xl"></i>
              </a>
              <a href="https://twitter.com" target="_blank" className="text-white hover:text-blue-400">
                <i className="fab fa-twitter text-3xl"></i>
              </a>
              <a href="https://instagram.com" target="_blank" className="text-white hover:text-pink-600">
                <i className="fab fa-instagram text-3xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="p-4 text-center mt-8">
          <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
          <p className="text-sm mb-4">Subscribe to our newsletter for the latest health and wellness tips, exclusive offers, and more.</p>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-full w-64 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="bg-green-500 px-6 py-2 rounded-r-full text-white">Subscribe</button>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm">&copy; {new Date().getFullYear()} Sanatorium Sanctuary. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
