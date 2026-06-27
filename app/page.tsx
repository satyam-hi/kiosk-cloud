import Link from "next/link";
import Footer from "@/app/component/footer/page";
import Image from "next/image";

export default function KioskCloudMainPage() {
  const segments = [
    {
      title: "Food & Dining",
      subtitle: "Restaurants, Cafés & Food Courts",
      desc: "Order directly from smart kiosks, table QRs, or mobile screens. No lines, no waiting.",
      icon: "🍔",
      tag: "Instant Ordering",
      link: "https://afrontself.vercel.app/provider-res",
    },
    {
      title: "Beauty & Wellness",
      subtitle: "Salons, Spas & Grooming",
      desc: "Book top-rated stylists, custom treatments, and VIP slots in just a few taps.",
      icon: "💇",
      tag: "Smart Booking",
      link: "https://afrontselfbuty.vercel.app/provider-res",
    },
    {
      title: "Medical & Health",
      subtitle: "Hospitals, Clinics & Wellness Centers",
      desc: "Access healthcare services, book appointments, and manage your well-being with ease.",
      icon: "🏥",
      tag: "Smart Healthcare",
      link: "https://afrontselfdr.vercel.app/provider-res",
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
    <main className="bg-white text-slate-900 overflow-hidden font-sans antialiased selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 md:px-6 text-center bg-gradient-to-b from-slate-50/50 via-white to-white">
        {/* Modern Soft Ambient Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-r from-indigo-100/30 to-emerald-100/20 blur-3xl pointer-events-none rounded-full" />

        <div className="max-w-4xl mx-auto relative z-10 pt-20 md:pt-28 pb-16">
            <Image src="/KioskCloud_Logo.png" alt="KioskCloud Logo" width={150} height={150} className="mx-auto mb-6" />
          <Link href="/">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100/80 text-indigo-600 text-xs font-semibold mb-8 tracking-wide hover:bg-indigo-100/50 transition-all cursor-pointer shadow-sm">
              ✨ Introducing Next-Gen Ecosystems
            </span>
          </Link>
        
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4 text-slate-900">
            <span className="bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-900 bg-clip-text text-transparent">
              KioskCloud
            </span>
          </h1>

          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-8 leading-[1.15]">
            The Connected Infrastructure for <br />
            <span className="bg-gradient-to-r from-indigo-600 to-indigo-800 bg-clip-text text-transparent">
              Modern Enterprise Services
            </span>
          </h2>

          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 font-medium">
            Connecting consumers to top-tier restaurants, premium wellness spaces, and healthcare environments instantly. Explore nearby locations or scale your digital brand.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto sm:max-w-none">
            <a href="#explore-segments" className="w-full sm:w-auto text-center bg-indigo-600 hover:bg-indigo-700 text-white transition-all duration-200 px-8 py-4 rounded-xl font-semibold text-base shadow-lg shadow-indigo-600/15 hover:shadow-indigo-600/25">
              Explore Services
            </a>
            <a href="#provider-signup" className="w-full sm:w-auto text-center bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 transition-all duration-200 px-8 py-4 rounded-xl font-semibold text-base shadow-sm">
              Join as Provider
            </a>
          </div>
        </div>
      </section>

      {/* 2. CUSTOMER INTERACTIVE SEGMENTS */}
      <section id="explore-segments" className="py-24 md:py-32 px-4 md:px-6 relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">What service do you require today?</h2>
          <p className="text-slate-500 mt-4 text-lg max-w-xl mx-auto">Select a dedicated sector to interact with dynamic cloud menus and instant localized booking panels.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {segments.map((seg, idx) => (
            <Link href={seg.link} key={idx} className="group flex flex-col justify-between bg-white border border-slate-200/60 hover:border-indigo-500/40 rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-slate-100 hover:-translate-y-1">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="text-3xl p-3.5 bg-slate-50 border border-slate-100 rounded-xl group-hover:bg-indigo-50/50 group-hover:border-indigo-100/50 transition-colors duration-300">
                    {seg.icon}
                  </div>
                  <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider bg-indigo-50 border border-indigo-100/60 px-3 py-1 rounded-full shadow-sm">
                    {seg.tag}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                  {seg.title}
                </h3>
                <p className="text-slate-400 text-[11px] font-bold mb-4 uppercase tracking-wider">{seg.subtitle}</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-8">{seg.desc}</p>
              </div>

              <div className="w-full bg-slate-50 group-hover:bg-indigo-600 text-slate-700 group-hover:text-white py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-sm border border-slate-100 group-hover:border-transparent group-hover:shadow-md group-hover:shadow-indigo-600/10">
                Launch Segment <span className="transition-transform group-hover:translate-x-0.5">➔</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. PLATFORM EXPLANATION / BENTO GALLERY */}
      <section className="py-24 md:py-32 px-4 md:px-6 bg-slate-50 border-y border-slate-100/80">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-10 items-center mb-20">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
                Unified Network Engine. <br />
                <span className="text-indigo-600">Enterprise Reliability.</span>
              </h2>
              <p className="text-slate-600 text-base md:text-lg max-w-2xl leading-relaxed">
                KioskCloud unifies customer-facing service points under a reliable decentralized architecture. Secure automated checkouts, dynamic active queue metrics, and cross-branch transparency come standard out of the box.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 bg-white p-6 rounded-2xl border border-slate-200/50 shadow-sm">
              <div className="text-center p-2 border-r border-slate-100">
                <div className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">1M+</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase mt-2 tracking-wider">Users Verified</div>
              </div>
              <div className="text-center p-2">
                <div className="text-3xl md:text-4xl font-extrabold text-indigo-600 tracking-tight">2,500+</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase mt-2 tracking-wider">Active Hubs</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {highlights.map((item, i) => (
              <div key={i} className="p-8 bg-white border border-slate-200/50 rounded-2xl shadow-sm hover:shadow-md transition-all">
                <div className="text-2xl mb-4 bg-slate-50 w-11 h-11 flex items-center justify-center rounded-xl border border-slate-100">{item.icon}</div>
                <h4 className="text-base font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BECOME A SERVICE PROVIDER */}
      <section id="provider-signup" className="py-24 md:py-32 px-4 md:px-6 max-w-7xl mx-auto relative">
        <div className="bg-slate-950 text-white rounded-3xl p-8 md:p-14 lg:p-16 grid lg:grid-cols-12 gap-12 items-center relative overflow-hidden shadow-2xl">
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
          
          <div className="lg:col-span-7 relative z-10">
            <span className="text-indigo-400 font-bold text-[11px] tracking-wider uppercase bg-white/5 px-4 py-1.5 rounded-full border border-white/10 shadow-inner">
              Ecosystem Architecture
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mt-6 leading-tight tracking-tight">
              Does your commercial enterprise require a digital operational edge?
            </h2>
            <p className="text-slate-400 text-base md:text-lg mt-6 leading-relaxed font-medium">
              Transition away from static checkouts. Modernize your brand interactions utilizing point-of-sale setups, cloud catalogs, and intelligent retention layers.
            </p>

            <ul className="mt-8 space-y-4 text-slate-300 text-sm md:text-base font-medium">
              <li className="flex items-center gap-3">
                <span className="text-indigo-400 font-bold">✓</span> Deploy configurable digital interfaces & secure code solutions.
              </li>
              <li className="flex items-center gap-3">
                <span className="text-indigo-400 font-bold">✓</span> Synchronize infinite dynamic locations from a master dashboard.
              </li>
              <li className="flex items-center gap-3">
                <span className="text-indigo-400 font-bold">✓</span> Native dynamic balancing support for standard hardware environments.
              </li>
            </ul>
          </div>

          <div className="lg:col-span-5 bg-white text-slate-900 p-6 md:p-8 rounded-2xl text-center relative z-10 shadow-2xl border border-slate-100">
            <h3 className="text-xl font-bold mb-1 tracking-tight">Register Corporate Network</h3>
            <p className="text-slate-500 text-xs mb-6">Scale alongside hundreds of integrated businesses globally.</p>
            
            <div className="mb-6 text-left">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Enterprise Inception Package</p>
                <p className="text-lg font-bold text-slate-950 mt-0.5">30-day trial deployment active</p>
                <p className="text-xs text-indigo-600 font-semibold uppercase tracking-wide mt-1">Followed by ₹244 / month base tier</p>
              </div>
            </div>

            <div className="space-y-2">
              <Link href="https://afrontself.vercel.app/" className="block">
                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white transition py-3 rounded-xl font-semibold text-sm shadow-md shadow-indigo-600/10">
                  Deploy Food & Dining Gateway
                </button>
              </Link>
              <Link href="https://afrontselfbuty.vercel.app/" className="block">
                <button className="w-full bg-slate-900 hover:bg-slate-800 text-white transition py-3 rounded-xl font-semibold text-sm shadow-sm">
                  Deploy Beauty & Wellness Gateway
                </button>
              </Link>
              <Link href="https://afrontselfdr.vercel.app/" className="block">
                <button className="w-full bg-slate-100 hover:bg-slate-200/80 text-slate-700 transition py-3 rounded-xl font-semibold text-sm">
                  Deploy Medical & Health Gateway
                </button>
              </Link>
            </div>
            <p className="text-[11px] text-slate-400 mt-4 font-medium">Transparent terms. Deactivate configurations at your discretion.</p>
          </div>
        </div>
      </section>

      {/* 5. LIVE ACTIVITY / PROOF BANNER */}
      <section className="py-20 bg-slate-950 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 to-emerald-900/10 opacity-60 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white">
            Ready to optimize your service architecture?
          </h2>
          <p className="text-slate-400 mt-3 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Acquire our cross-platform client app, inspect localized active workflows, and streamline business hours.
          </p>
          <div className="mt-8">
            <Link href="https://youtu.be/HU3jMu-pzH0?si=P86fi78fJsuZAf9-"className="bg-white hover:bg-slate-50 text-slate-950 px-8 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-md hover:shadow-lg m-2">
            <button >
              Watch setup & demo video
            </button>
            </Link>
            <button className="bg-white hover:bg-slate-50 text-slate-950 px-8 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-md hover:shadow-lg m-2 ">
              Why use KioskCloud?
            </button>
            {/* <button className="bg-white hover:bg-slate-50 text-slate-950 px-8 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-md hover:shadow-lg m-2">
              📥 Download Unified Consumer Hub
            </button> */}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}