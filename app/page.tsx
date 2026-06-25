import Link from "next/link";
import Footer from "@/app/component/footer/page";

export default function KioskCloudMainPage() {
  const segments = [
    {
      title: "Food & Dining",
      subtitle: "Restaurants, Cafés & Food Courts",
      desc: "Order directly from smart kiosks, table QRs, or mobile screens. No lines, no waiting.",
      icon: "🍔",
      tag: "Instant Ordering",
      link: "https://afrontself.vercel.app/provider-res", // Update with your actual food landing page route
    },
    {
      title: "Beauty & Wellness",
      subtitle: "Salons, Spas & Grooming",
      desc: "Book top-rated stylists, custom treatments, and VIP slots in just a few taps.",
      icon: "💇",
      tag: "Smart Booking",
      link: "https://afrontselfbuty.vercel.app/provider-res", // Update with your actual beauty landing page route
    },
    {
      title: "Medical & Health",
      subtitle: "Hospitals, Clinics & Wellness Centers",
      desc: "Access healthcare services, book appointments, and manage your well-being with ease.",
      icon: "🏥",
      tag: "Smart Healthcare",
      link: "https://afrontselfdr.vercel.app/provider-res", // Update with your actual medical landing page route
    },
  ];

  const highlights = [
    {
      icon: "📍",
      title: "Hyper-Local Discovery",
      desc: "Find and interact with the finest service providers right in your neighborhood.",
    },
    {
      icon: "🌐",
      title: "Global Standards",
      desc: "Enjoy seamless cloud payments, live tracking, and premium digital experiences everywhere.",
    },
    {
      icon: "⚡",
      title: "Zero Friction",
      desc: "Skip long support lines. Scan, select, pay, and get served instantly.",
    },
  ];

  return (
    <main className="bg-[#050505] text-white overflow-hidden font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 text-center">
        {/* Ambient background glows */}
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/10 via-transparent to-red-600/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 animate-fadeIn pt-12">
          <Link href="/"> <div className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-orange-400 text-sm font-medium mb-6 tracking-wide backdrop-blur-md">
            ✨ Introducing Next-Gen  Ecosystems
          </div></Link>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.15] mb-8">
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
             KioskCloud
            </span>
          </h1>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.15] mb-8">
            The Smartest Gateway to <br />
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Every  Service
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
            Connecting you to top-tier restaurants, premium salons, and everyday essential providers instantly. Explore local & global favorites or digitize your own brand.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="#explore-segments" className="bg-orange-500 hover:bg-orange-600 transition-all duration-300 px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg shadow-orange-500/20 hover:scale-[1.02]">
              Explore Services
            </a>
            <a href="#provider-signup" className="bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 px-8 py-4 rounded-2xl font-semibold text-lg backdrop-blur-md">
              Join as Provider
            </a>
          </div>
        </div>
      </section>

      {/* 2. CUSTOMER INTERACTIVE SEGMENTS */}
      <section id="explore-segments" className="py-24 px-6 relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">What are you looking for today?</h2>
          <p className="text-gray-400 mt-4 text-lg">Select a sector to explore top nearby options and instant tools.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {segments.map((seg, idx) => (
            <Link href={seg.link} className="w-full" key={idx} >
            <div 
              
              className="group relative bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 hover:border-orange-500/40 rounded-[32px] p-8 md:p-10 transition-all duration-500 flex flex-col justify-between hover:-translate-y-2 backdrop-blur-xl"
            >
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div className="text-5xl p-4 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    {seg.icon}
                  </div>
                  <span className="text-xs font-semibold text-orange-400 uppercase tracking-widest bg-orange-500/10 border border-orange-500/20 px-3 py-1 rounded-full">
                    {seg.tag}
                  </span>
                </div>
                
                <h3 className="text-3xl font-bold mb-2 group-hover:text-orange-400 transition-colors duration-300">
                  {seg.title}
                </h3>
                <p className="text-gray-400 text-sm font-medium mb-4">{seg.subtitle}</p>
                <p className="text-gray-300 leading-relaxed mb-8">{seg.desc}</p>
              </div>

              <Link href={seg.link} className="w-full">
                <button className="w-full bg-white/10 group-hover:bg-orange-500 text-white group-hover:text-white py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2">
                  Launch Segment <span>➔</span>
                </button>
              </Link>
            </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. PLATFORM EXPLANATION / BENTO GALLERY */}
      <section className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 items-center mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                One Global Platform. <br />
                <span className="text-orange-500">Infinite Seamless Experiences.</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
                KioskCloud unifies high-end automation software under a central localized engine. Whether you are ordering a burger or booking a full-body massage, you get access to unified receipts, secure credentials, and real-time live queues.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 bg-white/5 p-6 rounded-3xl border border-white/10">
              <div className="text-center p-4">
                <div className="text-3xl font-extrabold text-orange-400">1M+</div>
                <div className="text-xs text-gray-400 uppercase mt-1">Users Served</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-extrabold text-orange-400">2,500+</div>
                <div className="text-xs text-gray-400 uppercase mt-1">Active Hubs</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, i) => (
              <div key={i} className="p-8 bg-black/40 border border-white/5 rounded-2xl">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BECOME A SERVICE PROVIDER */}
      <section id="provider-signup" className="py-28 px-6 max-w-7xl mx-auto relative">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-red-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="bg-gradient-to-br from-neutral-900 to-black border border-white/10 rounded-[40px] p-8 md:p-16 grid lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7">
            <span className="text-orange-400 font-bold text-sm tracking-wider uppercase bg-orange-500/10 px-4 py-1.5 rounded-full border border-orange-500/20">
              Grow with KioskCloud
            </span>
            <h2 className="text-4xl md:text-5xl font-black mt-6 leading-tight">
              Does your local business need a digital edge?
            </h2>
            <p className="text-gray-400 text-lg mt-6 leading-relaxed">
              Ditch the archaic methods. Upgrade your enterprise to run on self-service kiosk interfaces, dynamic cloud menus, and automatic CRM routing models.
            </p>

            <ul className="mt-8 space-y-3 text-gray-300">
              <li className="flex items-center gap-3">
                <span className="text-orange-500">✓</span> Set up customizable touch screens & QR systems.
              </li>
              <li className="flex items-center gap-3">
                <span className="text-orange-500">✓</span> Manage infinite locations right from a master dashboard.
              </li>
              <li className="flex items-center gap-3">
                <span className="text-orange-500">✓</span> Direct processing with both physical and digital cash desks.
              </li>
            </ul>
          </div>

          <div className="lg:col-span-5 bg-white/5 p-8 rounded-3xl border border-white/10 text-center backdrop-blur-md">
            <h3 className="text-2xl font-bold mb-2">Register Your Business</h3>
            <p className="text-gray-400 text-sm mb-6">Join hundreds of service networks growing today.</p>
            
            <div className="space-y-4 mb-6 text-left">
              <div className="p-4 bg-black/40 rounded-xl border border-white/5">
                <p className="text-xs text-gray-500 font-bold uppercase">Basic Launch Package</p>
                <p className="text-xl font-extrabold text-white mt-1">Take 30 days free trial</p>
                <p className="text-xs text-gray-500 font-bold uppercase">Starting at ₹244 / Month</p>

              </div>
            </div>

            <Link href="https://afrontself.vercel.app/">
              <button className="w-full bg-orange-500 hover:bg-orange-600 transition px-6 py-4 rounded-xl font-bold text-lg shadow-lg shadow-orange-500/20">
                Get Started With  Food & Dining
              </button>
            </Link>
            <Link href="https://afrontselfbuty.vercel.app/">
              <button className="w-full bg-orange-500 hover:bg-orange-600 transition px-6 py-4 rounded-xl font-bold text-lg shadow-lg shadow-orange-500/20 mt-2">
                Get Started With Beauty & Wellness
              </button>
            </Link>
              <Link href="https://afrontselfdr.vercel.app/">
              <button className="w-full bg-orange-500 hover:bg-orange-600 transition px-6 py-4 rounded-xl font-bold text-lg shadow-lg shadow-orange-500/20 mt-2">
                Medical & Health
              </button>
            </Link>
            <p className="text-xs text-gray-500 mt-4">No long contracts. Cancel your activation anytime.</p>
          </div>
        </div>
      </section>

      {/* 5. LIVE ACTIVITY / PROOF BANNER */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Ready to live-track your service needs?
          </h2>
          <p className="text-white/80 mt-3 max-w-xl mx-auto text-base">
            Get the unified ecosystem app, monitor ongoing queues, and live your best optimized lifestyle.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button className="bg-black hover:bg-neutral-900 text-white px-6 py-3.5 rounded-xl font-bold text-sm transition-all">
              📥 Download Consumer Hub
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}