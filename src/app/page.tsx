"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-[5%] py-3 bg-white shadow-sm">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 bg-gray-200">
            <div className="w-10 h-10 flex items-center justify-center font-bold text-gray-800">UN</div>
          </div>
          <span className="font-bold text-xl">UniteNote</span>
        </div>
        
        <ul className="hidden md:flex gap-8 list-none">
          <li><Link href="/" className="text-sm text-gray-800 hover:text-gray-600">HOME</Link></li>
          <li><Link href="#ebook" className="text-sm text-gray-800 hover:text-gray-600">E-BOOK</Link></li>
          <li><Link href="#software" className="text-sm text-gray-800 hover:text-gray-600">SOFTWARE</Link></li>
          <li><Link href="#about" className="text-sm text-gray-800 hover:text-gray-600">About Us</Link></li>
          <li><Link href="#contact" className="text-sm text-gray-800 hover:text-gray-600">Contact Us</Link></li>
          <li><Link href="#policy" className="text-sm text-gray-800 hover:text-gray-600">Policy</Link></li>
        </ul>

        <div className="flex gap-3 items-center">
          <Link 
            href="/signin" 
            className="text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md transition-colors"
          >
            SignIn
          </Link>
          <Link 
            href="/signup" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
          >
            SignUp
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-32 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 max-w-4xl mx-auto leading-tight">
            Secure Solutions for Your Business
          </h1>
          <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto">
            Empowering your business with advanced security and innovative solutions
          </p>
          <Button size="lg" variant="secondary" className="text-gray-900">
            Get Started
          </Button>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-32 bg-white" id="services">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Secure Payments Card */}
            <div className="p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <span className="text-2xl">💳</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Secure Payments</h3>
              <p className="text-gray-600">
                Advanced encryption and secure transaction processing for your peace of mind.
              </p>
            </div>

            {/* Learning Solutions Card */}
            <div className="p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Learning Solutions</h3>
              <p className="text-gray-600">
                Interactive learning platforms designed to enhance knowledge and skills.
              </p>
            </div>

            {/* Data Protection Card */}
            <div className="p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Data Protection</h3>
              <p className="text-gray-600">
                Robust security measures to keep your sensitive information safe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="bg-white p-12 rounded-3xl border border-gray-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-gray-600">Join thousands of satisfied customers who trust our services.</p>
            </div>
            <Button size="lg" variant="default" className="bg-black text-white hover:bg-gray-800">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
            <div>
              <h4 className="text-xl font-bold mb-6">Company</h4>
              <ul className="space-y-4">
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6">Services</h4>
              <ul className="space-y-4">
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Security</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Learning</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Solutions</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6">Legal</h4>
              <ul className="space-y-4">
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Terms</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Security</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6">Newsletter</h4>
              <p className="text-gray-400 mb-4">Stay updated with our latest news</p>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white mb-4 focus:outline-none focus:border-white/20"
              />
              <Button variant="secondary" className="w-full">Subscribe</Button>
            </div>
          </div>
          <div className="text-center text-gray-400 pt-8 border-t border-white/10">
            <p>&copy; 2024 UniteNote. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
