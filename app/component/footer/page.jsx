import Link from "next/link";
import Image from "next/image";


export default function Footer(){
    return(<>
       <footer className="relative border-t border-white/10 bg-[#050505] overflow-hidden">
    
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-red-500/5 pointer-events-none" />
    
            <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
    
              {/* TOP SECTION */}
              <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 pb-12 border-b border-white/10">
    
                {/* BRAND */}
                <div>
    
                  <div className="flex items-center gap-3">
    
                    <div className="w-14 h-14 rounded-2xl bg-orange-500 flex items-center justify-center text-2xl shadow-lg shadow-orange-500/30">
                      
                        <Image src="/KioskCloud_Icon.png" alt="KioskCloud Logo" width={120} height={120}  />
                    </div>
    
                    <div>
                      <h2 className="text-3xl font-black text-white">
                        Kiosk<span className="text-orange-500">Cloud</span>
                      </h2>
    
                      <p className="text-sm text-orange-300">
                         SaaS Platform
                      </p>
                    </div>
    
                  </div>
    
                  <p className="text-gray-400 mt-6 leading-7">
                    Smart self-ordering kiosk and  management platform.
                  </p>
    
                  {/* SOCIAL */}
                  <div className="flex gap-4 mt-8">
    
                    <a
                      href="https://youtu.be/HU3jMu-pzH0?si=qgntLC_dDychn_0w"
                      className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 hover:bg-orange-500 hover:border-orange-500 transition flex items-center justify-center"
                    >
                      <Image src="/imagesf.jfif" alt="youtube" width={24} height={24} />
                    </a>
    
                    <a
                      href="https://www.instagram.com/kiosk_cloud"
                      className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 hover:bg-orange-500 hover:border-orange-500 transition flex items-center justify-center"
                    >
                      <Image src="/images.jfif" alt="youtube" width={24} height={24} />
                    </a>
    
                    <a
                      href="https://www.facebook.com/profile.php?id=61590685053048"
                      className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 hover:bg-orange-500 hover:border-orange-500 transition flex items-center justify-center"
                    >
                      <Image src="/imagesfacebook.jfif" alt="youtube" width={24} height={24} />
                    </a>
    
                    {/* <a
                      href="#"
                      className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 hover:bg-orange-500 hover:border-orange-500 transition flex items-center justify-center"
                    >
                      💼
                    </a> */}
    
                  </div>
    
                </div>
    
                {/* QUICK LINKS */}
                <div>
    
                  <h3 className="text-xl font-bold mb-6 text-white">
                    Quick Links
                  </h3>
    
                  <div className="flex flex-col gap-4">
    
                    <Link
                      href="/"
                      className="text-gray-400 hover:text-orange-400 transition"
                    >
                      Home
                    </Link>
{/*     
                    <Link
                      href="/about"
                      className="text-gray-400 hover:text-orange-400 transition"
                    >
                      About Us
                    </Link>
    
                    <Link
                      href="/pricing"
                      className="text-gray-400 hover:text-orange-400 transition"
                    >
                      Pricing
                    </Link>
    
                    <Link
                      href="/faq"
                      className="text-gray-400 hover:text-orange-400 transition"
                    >
                      FAQ
                    </Link>
    
                    <Link
                      href="/support"
                      className="text-gray-400 hover:text-orange-400 transition"
                    >
                      Support
                    </Link> */}
    
                  </div>
    
                </div>
    
                {/* LEGAL */}
                <div>
    
                  <h3 className="text-xl font-bold mb-6 text-white">
                    Legal
                  </h3>
    
                  <div className="flex flex-col gap-4">
{/*     
                    <Link
                      href="/privacy-policy"
                      className="text-gray-400 hover:text-orange-400 transition"
                    >
                      Privacy Policy
                    </Link>
    
                    <Link
                      href="/terms-and-conditions"
                      className="text-gray-400 hover:text-orange-400 transition"
                    >
                      Terms & Conditions
                    </Link>
    
                    <Link
                      href="/refund-policy"
                      className="text-gray-400 hover:text-orange-400 transition"
                    >
                      Refund Policy
                    </Link>
    
                    <Link
                      href="/shipping-policy"
                      className="text-gray-400 hover:text-orange-400 transition"
                    >
                      Shipping Policy
                    </Link> */}
    
                    <Link
                      href="https://afrontselfbuty.vercel.app/contact"
                      className="text-gray-400 hover:text-orange-400 transition"
                    >
                      Contact Us
                    </Link>

                     <a href="https://images-eight-weld.vercel.app/index2.html" target="_blank" rel="noopener noreferrer"  className="text-gray-400 hover:text-orange-400 transition">
                      Generate QR Code
                    </a>
    
                  </div>
    
                </div>
    
                {/* CONTACT INFO */}
                <div>
    
                  <h3 className="text-xl font-bold mb-6 text-white">
                    Contact
                  </h3>
    
                  <div className="space-y-5">
    
                    <div className="flex items-start gap-4">
    
                      <div className="w-11 h-11 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                        📧
                      </div>
    
                      <div>
                        <p className="text-gray-500 text-sm">
                          Email
                        </p>
    
                        <p className="text-gray-300">
                          <a href="mailto:satyamkuart111@gmail.com" className="text-gray-300 hover:text-orange-400 transition">
                            satyamkuart111@gmail.com
                          </a>
                        </p>
                      </div>
    
                    </div>
    
                    <div className="flex items-start gap-4">
    
                      <div className="w-11 h-11 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                        📞
                      </div>
    
                      <div>
                        <p className="text-gray-500 text-sm">
                          Phone / whatsapp
                        </p>
    
                        <p className="text-gray-300" >
                          <a href="tel:+918319445102" className="text-gray-300 hover:text-orange-400 transition">
                            +91 8319445102
                          </a>
                        </p>
                      </div>
    
                    </div>
    
                    <div className="flex items-start gap-4">
    
                      <div className="w-11 h-11 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                        📍
                      </div>
    
                      <div>
                        <p className="text-gray-500 text-sm">
                          Address
                        </p>
    
                        <p className="text-gray-300 leading-6">
                          Khandwa naka,  indore, Madhya Pradesh, India
                        </p>
                      </div>
    
                    </div>
    
                  </div>
    
                </div>
    
              </div>
    
              {/* BOTTOM */}
              <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-5">
    
                <p className="text-gray-500 text-center md:text-left">
                  © 2026 KioskCloud. All rights reserved.
                </p>
    
                <div className="flex flex-wrap items-center gap-6 text-sm">
    
                  <span className="text-gray-500">
                    🔒 Secure Payments
                  </span>
    
                  <span className="text-gray-500">
                    ⚡ Fast Ordering
                  </span>
    
                  <span className="text-gray-500">
                    📊 Real-time Analytics
                  </span>
    
                </div>
    
              </div>
    
            </div>
    
          </footer>
    </>)
}