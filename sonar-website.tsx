"use client"

import { useState, useEffect } from "react"

export default function Component() {
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Animated Stars Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-px bg-white rounded-full opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${2 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 2}s`,
            }}
          ></div>
        ))}
        {[...Array(50)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute w-0.5 h-0.5 bg-white rounded-full opacity-50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float-star ${3 + Math.random() * 6}s ease-in-out infinite ${Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Animated Grid Background */}
      <div className="fixed inset-0 opacity-5 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
            animation: "grid-move 20s linear infinite",
          }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
        <div className="flex justify-between items-center max-w-7xl mx-auto p-6">
          <div className="text-2xl font-serif font-bold animate-float-1 flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center relative overflow-hidden">
                <div className="w-3 h-3 bg-white rounded-full animate-ping"></div>
                <div className="absolute inset-0 border-2 border-white rounded-full animate-spin-slow opacity-30"></div>
              </div>
            </div>
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">SONAR</span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-light">
            {["HOME", "ABOUT", "TECHNOLOGY", "DATA", "IMPACT"].map((item, i) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`hover:text-gray-300 transition-colors animate-float-${i + 2} relative group`}
                onClick={() => setActiveSection(item.toLowerCase())}
              >
                {item}
                <div
                  className={`absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent transition-transform duration-300 ${
                    activeSection === item.toLowerCase() ? "scale-x-100" : "scale-x-0"
                  }`}
                ></div>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section with SONAR Text */}
      <section id="home" className="min-h-screen flex items-center justify-center p-8 relative overflow-hidden">
        {/* Radar Sweep Animation */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-96 h-96 border border-white/20 rounded-full animate-pulse-ring"></div>
          <div className="absolute w-72 h-72 border border-white/30 rounded-full animate-pulse-ring-delay"></div>
          <div className="absolute w-48 h-48 border border-white/40 rounded-full animate-pulse-ring-delay-2"></div>
        </div>

        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-float-1"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-3xl animate-float-2"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full animate-spin-very-slow"></div>

          {/* Additional geometric elements */}
          <div className="absolute top-20 right-20 w-32 h-32 border border-white/10 rotate-45 animate-float-3"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 border border-white/10 rounded-full animate-float-4"></div>
        </div>

        <div className="max-w-5xl text-center relative z-10">
          <div className="mb-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 border border-white/20 rounded-full text-sm font-light mb-8 animate-fade-in-up backdrop-blur-sm">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <div
                  className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
              MONITORING r/CALIFORNIANEWS • 81% ACCURACY • ARDUINO ALERTS
            </div>
          </div>

          <div className="space-y-4 mb-16 relative flex flex-col items-center">
            <div className="text-5xl md:text-7xl lg:text-8xl font-serif leading-tight tracking-wide">
              {/* Social */}
              <div className="mb-4 animate-float-1 relative" style={{ transform: "translateX(-40px)" }}>
                <span
                  className="font-light text-transparent inline-block hover:scale-105 transition-transform duration-300"
                  style={{ WebkitTextStroke: "1.5px white" }}
                >
                  <span className="text-white font-normal drop-shadow-lg">S</span>OCIAL
                </span>
              </div>

              {/* Online */}
              <div className="mb-4 animate-float-2 relative" style={{ transform: "translateX(30px)" }}>
                <span
                  className="font-light text-transparent inline-block hover:scale-105 transition-transform duration-300"
                  style={{ WebkitTextStroke: "1.5px white" }}
                >
                  <span className="text-white font-normal drop-shadow-lg">O</span>NLINE
                </span>
              </div>

              {/* Natural */}
              <div className="mb-4 animate-float-3 relative" style={{ transform: "translateX(-20px)" }}>
                <span
                  className="font-light text-transparent inline-block hover:scale-105 transition-transform duration-300"
                  style={{ WebkitTextStroke: "1.5px white" }}
                >
                  <span className="text-white font-normal drop-shadow-lg">N</span>ATURAL
                </span>
              </div>

              {/* Disaster */}
              <div className="mb-4 animate-float-4 relative" style={{ transform: "translateX(50px)" }}>
                <span
                  className="font-light text-transparent inline-block hover:scale-105 transition-transform duration-300"
                  style={{ WebkitTextStroke: "1.5px white" }}
                >
                  DISA
                </span>
                <span
                  className="font-light text-transparent inline-block hover:scale-105 transition-transform duration-300"
                  style={{ WebkitTextStroke: "1.5px white" }}
                >
                  STER
                </span>
              </div>

              {/* Alert */}
              <div className="mb-4 animate-float-5 relative" style={{ transform: "translateX(-15px)" }}>
                <span
                  className="font-light text-transparent inline-block hover:scale-105 transition-transform duration-300"
                  style={{ WebkitTextStroke: "1.5px white" }}
                >
                  <span className="text-white font-normal drop-shadow-lg">A</span>LERT
                </span>
              </div>

              {/* Radar */}
              <div className="mb-4 animate-float-6 relative" style={{ transform: "translateX(25px)" }}>
                <span
                  className="font-light text-transparent inline-block hover:scale-105 transition-transform duration-300"
                  style={{ WebkitTextStroke: "1.5px white" }}
                >
                  <span className="text-white font-normal drop-shadow-lg">R</span>ADAR
                </span>
              </div>
            </div>
          </div>

          {/* SONAR highlight */}
          <div className="mb-12 animate-pulse-slow">
            <div className="text-2xl md:text-3xl font-serif tracking-[0.5em] text-white font-bold">S O N A R</div>
            <div className="w-32 h-px bg-white mx-auto mt-4 animate-expand"></div>
          </div>

          <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif mb-8 animate-float-1">
            <span className="font-light text-transparent" style={{ WebkitTextStroke: "1px white" }}>
              MONITORING THE
            </span>
            <br />
            <span className="text-white font-normal bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text">
              WORLD'S PULSE
            </span>
          </h1>

          <p className="text-lg md:text-xl font-light max-w-4xl mx-auto mb-12 animate-float-2 leading-relaxed text-gray-300">
            Advanced natural disaster detection and alert systems powered by cutting-edge AI technology, real-time
            social media analysis, and global sensor networks protecting millions of lives worldwide
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-float-3 mb-16">
            <button className="px-10 py-4 bg-white text-black hover:bg-gray-200 transition-all duration-300 font-medium group relative overflow-hidden">
              <span className="flex items-center justify-center gap-3 relative z-10">
                EXPLORE SYSTEM
                <div className="w-5 h-5 border-2 border-black rounded-full group-hover:animate-spin flex items-center justify-center">
                  <div className="w-1 h-1 bg-black rounded-full"></div>
                </div>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="px-10 py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-medium relative group">
              <span className="relative z-10">WATCH DEMO</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
            <button className="px-10 py-4 text-white hover:text-gray-300 transition-colors border border-transparent hover:border-white/20">
              VIEW DOCUMENTATION →
            </button>
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up">
            {[
              { value: "24/7", label: "MONITORING", desc: "Continuous surveillance" },
              { value: "150+", label: "COUNTRIES", desc: "Global coverage" },
              { value: "81%", label: "ACCURACY", desc: "Prediction precision" },
              { value: "< 30s", label: "RESPONSE", desc: "Alert delivery time" },
            ].map((stat, i) => (
              <div
                key={i}
                className={`text-center p-6 border border-white/10 rounded-lg backdrop-blur-sm animate-float-${i + 1}`}
              >
                <div className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-white mb-1">{stat.label}</div>
                <div className="text-xs text-gray-400">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SONAR Breakdown Section */}
      <section className="py-24 px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-transparent"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif mb-6 animate-float-1">
              <span className="font-light text-transparent" style={{ WebkitTextStroke: "1.5px white" }}>
                HOW SONAR
              </span>
              <span className="text-white font-normal ml-4">WORKS</span>
            </h2>
            <p className="text-lg font-light max-w-3xl mx-auto text-gray-300">
              Understanding the technology behind social disaster detection
            </p>
          </div>

          <div className="space-y-16">
            {/* Social */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-float-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center text-2xl font-serif font-bold">
                    S
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif">
                    <span className="text-white font-normal">SOCIAL</span>
                  </h3>
                </div>
                <p className="text-lg font-light text-gray-300 leading-relaxed">
                  The system gathers real-time data using Reddit's API, specifically monitoring the newest posts from
                  the r/CaliforniaNews subreddit. These posts are then analyzed by our custom-trained NLP model to
                  determine if they mention any potential disasters or emergencies, often detecting reports before
                  mainstream news outlets.
                </p>
              </div>
              <div className="animate-float-2">
                <div className="p-8 border border-white/10 rounded-lg backdrop-blur-sm bg-gradient-to-br from-blue-500/10 to-purple-500/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-mono">SOCIAL FEED ACTIVE</span>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="p-3 bg-black/30 rounded border-l-2 border-blue-400">
                      <span className="text-blue-400">@user1:</span> "Building shaking here in downtown..."
                    </div>
                    <div className="p-3 bg-black/30 rounded border-l-2 border-yellow-400">
                      <span className="text-yellow-400">@user2:</span> "Smoke visible from the hills..."
                    </div>
                    <div className="p-3 bg-black/30 rounded border-l-2 border-red-400">
                      <span className="text-red-400">@user3:</span> "Ground trembling, everyone felt it..."
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Online */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="md:order-2 animate-float-3">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center text-2xl font-serif font-bold">
                    O
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif">
                    <span className="text-white font-normal">ONLINE</span>
                  </h3>
                </div>
                <p className="text-lg font-light text-gray-300 leading-relaxed">
                  SONAR operates entirely online, scanning live digital spaces in real time. It's built to constantly
                  monitor and process data streams without delay, making it fast, responsive, and scalable for global
                  use. No need for physical sensors or satellites — just the internet and collective human behavior.
                </p>
              </div>
              <div className="md:order-1 animate-float-4">
                <div className="p-8 border border-white/10 rounded-lg backdrop-blur-sm bg-gradient-to-br from-green-500/10 to-blue-500/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-mono">REAL-TIME PROCESSING</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="p-3 bg-black/30 rounded">
                      <div className="text-xl font-bold text-green-400">847ms</div>
                      <div className="text-xs text-gray-400">Response Time</div>
                    </div>
                    <div className="p-3 bg-black/30 rounded">
                      <div className="text-xl font-bold text-blue-400">24/7</div>
                      <div className="text-xs text-gray-400">Monitoring</div>
                    </div>
                    <div className="p-3 bg-black/30 rounded">
                      <div className="text-xl font-bold text-purple-400">Global</div>
                      <div className="text-xs text-gray-400">Coverage</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Natural Disaster */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-float-5">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center text-2xl font-serif font-bold">
                    N
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif">
                    <span className="text-white font-normal">NATURAL DISASTER</span>
                  </h3>
                </div>
                <p className="text-lg font-light text-gray-300 leading-relaxed">
                  SONAR is designed specifically to detect and classify natural disasters — including earthquakes,
                  floods, wildfires, storms, and more. By focusing on these high-risk, time-sensitive events, it
                  provides potentially life-saving insights to responders, citizens, and humanitarian organizations.
                </p>
              </div>
              <div className="animate-float-6">
                <div className="p-8 border border-white/10 rounded-lg backdrop-blur-sm bg-gradient-to-br from-orange-500/10 to-red-500/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-mono">DISASTER CLASSIFICATION</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="p-3 bg-black/30 rounded flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      Earthquakes
                    </div>
                    <div className="p-3 bg-black/30 rounded flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      Floods
                    </div>
                    <div className="p-3 bg-black/30 rounded flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      Wildfires
                    </div>
                    <div className="p-3 bg-black/30 rounded flex items-center gap-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      Storms
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Alert */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="md:order-2 animate-float-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center text-2xl font-serif font-bold">
                    A
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif">
                    <span className="text-white font-normal">ALERT</span>
                  </h3>
                </div>
                <p className="text-lg font-light text-gray-300 leading-relaxed">
                  When our custom NLP model detects a disaster or emergency in Reddit posts with sufficient confidence,
                  SONAR automatically triggers alerts through our iOS app and Arduino hardware system. The Arduino acts
                  as a physical alert device, lighting up or sounding a buzzer - ideal for schools, offices, or homes
                  that want instant, visible warning signals.
                </p>
              </div>
              <div className="md:order-1 animate-float-2">
                <div className="p-8 border border-white/10 rounded-lg backdrop-blur-sm bg-gradient-to-br from-red-500/10 to-yellow-500/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-mono">ALERT SYSTEM</span>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 bg-red-500/20 border border-red-500/30 rounded">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                        <span className="text-sm font-bold text-red-400">CRITICAL ALERT</span>
                      </div>
                      <div className="text-xs text-gray-300">Earthquake detected - Magnitude 6.2</div>
                      <div className="text-xs text-gray-400">Location: Pacific Coast</div>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex-1 px-3 py-2 bg-white/10 rounded text-xs">iOS App</button>
                      <button className="flex-1 px-3 py-2 bg-white/10 rounded text-xs">Push Notification</button>
                      <button className="flex-1 px-3 py-2 bg-white/10 rounded text-xs">Real-time Alert</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Radar */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-float-3">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center text-2xl font-serif font-bold">
                    R
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif">
                    <span className="text-white font-normal">RADAR</span>
                  </h3>
                </div>
                <p className="text-lg font-light text-gray-300 leading-relaxed">
                  Just like a radar scans the skies for approaching threats, SONAR scans the digital world. Its "signal"
                  isn't weather or aircraft — it's human language, geotags, and emotion. The system detects weak signals
                  and clusters of concern, offering a social radar for global crisis awareness.
                </p>
              </div>
              <div className="animate-float-4">
                <div className="p-8 border border-white/10 rounded-lg backdrop-blur-sm bg-gradient-to-br from-purple-500/10 to-green-500/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-mono">SOCIAL RADAR ACTIVE</span>
                  </div>
                  <div className="relative w-full h-32 bg-black/30 rounded overflow-hidden">
                    <div className="absolute inset-2 border border-green-500/30 rounded-full"></div>
                    <div className="absolute inset-4 border border-green-500/20 rounded-full"></div>
                    <div className="absolute inset-6 border border-green-500/10 rounded-full"></div>

                    {/* Sweep Line */}
                    <div className="absolute inset-2 rounded-full overflow-hidden">
                      <div className="absolute top-1/2 left-1/2 w-full h-px bg-gradient-to-r from-transparent via-green-400 to-transparent transform -translate-y-1/2 origin-left animate-radar-sweep"></div>
                    </div>

                    {/* Signal Points */}
                    <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-2/3 left-2/3 w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>

                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-green-400">
                      SCANNING DIGITAL SIGNALS
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-24 px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/10 to-transparent"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif mb-8 animate-float-1">
              <span className="font-light text-transparent" style={{ WebkitTextStroke: "1.5px white" }}>
                CUTTING-EDGE
              </span>
              <span className="text-white font-normal ml-4">TECHNOLOGY</span>
            </h2>
            <p className="text-lg font-light max-w-3xl mx-auto text-gray-300">
              Powered by advanced NLP models, custom text analysis, and mobile alert systems
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "NLP MODELS",
                desc: "SpaCy's en_core_web_sm for location extraction and custom disaster-language detection using unigram and bigram analysis",
                icon: "NLP",
                features: [
                  "Location identification and extraction",
                  "Pretrained SpaCy model integration",
                  "Geographic context mapping",
                  "Real-time language processing",
                ],
              },
              {
                title: "CUSTOM TEXT ANALYSIS",
                desc: "TF-IDF weighting system that prioritizes critical disaster-related terms like 'earthquake' and 'tsunami' for accurate threat assessment",
                icon: "TXT",
                features: [
                  "Unigram and bigram analysis",
                  "TF-IDF importance weighting",
                  "Disaster keyword prioritization",
                  "Contextual relevance scoring",
                ],
              },
              {
                title: "iOS MOBILE APP",
                desc: "Real-time push notification system that connects to the main server and instantly alerts users about detected disasters",
                icon: "iOS",
                features: [
                  "Instant push notifications",
                  "Server connectivity and sync",
                  "Location-based alerts",
                  "Emergency response integration",
                ],
              },
            ].map((tech, i) => (
              <div
                key={i}
                className={`p-8 border border-gray-800 hover:border-gray-600 transition-all duration-300 group animate-float-${i + 1} rounded-lg backdrop-blur-sm hover:bg-white/5`}
              >
                <div className="w-12 h-12 border-2 border-white/20 rounded-lg flex items-center justify-center mb-6 group-hover:border-white/40 transition-colors">
                  <span className="text-sm font-mono font-bold">{tech.icon}</span>
                </div>
                <h3 className="text-lg font-serif mb-4 group-hover:text-gray-300 transition-colors">{tech.title}</h3>
                <p className="font-light text-sm text-gray-400 leading-relaxed mb-6">{tech.desc}</p>

                <div className="space-y-2">
                  {tech.features.map((feature, j) => (
                    <div key={j} className="text-xs text-gray-500 flex items-center gap-2">
                      <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="mt-6 h-1 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-green-400 rounded-full group-hover:animate-pulse"
                    style={{ width: `${70 + i * 15}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Technology Stats */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 border border-white/10 rounded-lg backdrop-blur-sm animate-float-1">
              <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                2.4 PB
              </div>
              <div className="text-sm text-gray-400">DATA PROCESSED DAILY</div>
            </div>
            <div className="text-center p-8 border border-white/10 rounded-lg backdrop-blur-sm animate-float-2">
              <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                847ms
              </div>
              <div className="text-sm text-gray-400">AVERAGE RESPONSE TIME</div>
            </div>
            <div className="text-center p-8 border border-white/10 rounded-lg backdrop-blur-sm animate-float-3">
              <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
                81%
              </div>
              <div className="text-sm text-gray-400">SYSTEM UPTIME</div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Visualization Section */}
      <section id="data" className="py-24 px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-transparent"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif mb-6 animate-float-1">
              <span className="font-light text-transparent" style={{ WebkitTextStroke: "1.5px white" }}>
                REAL-TIME
              </span>
              <span className="text-white font-normal ml-4">DATA STREAMS</span>
            </h2>
            <p className="text-lg font-light max-w-3xl mx-auto text-gray-300">
              Live monitoring data from our global social media analysis network
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { title: "SOCIAL POSTS ANALYZED", value: "2,847", unit: "posts/minute", trend: "+12%" },
              { title: "LOCATION EXTRACTIONS", value: "15,392", unit: "coordinates/day", trend: "+8%" },
              { title: "DISASTER KEYWORDS", value: "81%", unit: "accuracy rate", trend: "+2.1%" },
            ].map((data, i) => (
              <div
                key={i}
                className={`p-8 border border-white/10 rounded-lg backdrop-blur-sm animate-float-${i + 1} hover:border-white/20 transition-colors`}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-sm font-medium text-gray-400">{data.title}</h3>
                  <div className="text-xs text-green-400">{data.trend}</div>
                </div>
                <div className="text-3xl font-bold mb-2">{data.value}</div>
                <div className="text-sm text-gray-400">{data.unit}</div>
                <div className="mt-4 h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-green-400 rounded-full animate-pulse"
                    style={{ width: `${60 + i * 15}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Live Activity Feed */}
          <div className="border border-white/10 rounded-lg p-8 backdrop-blur-sm">
            <h3 className="text-xl font-serif mb-6 flex items-center gap-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              LIVE ACTIVITY FEED
            </h3>
            <div className="space-y-4">
              {[
                {
                  time: "14:32:15",
                  event: "Reddit post analysis completed",
                  location: "Pacific Ring of Fire",
                  severity: "LOW",
                },
                {
                  time: "14:28:42",
                  event: "Location extraction successful",
                  location: "Atlantic Ocean",
                  severity: "MEDIUM",
                },
                {
                  time: "14:25:18",
                  event: "TF-IDF keyword match: 'earthquake'",
                  location: "Arctic Region",
                  severity: "HIGH",
                },
                {
                  time: "14:22:03",
                  event: "iOS push notification sent",
                  location: "Indian Ocean",
                  severity: "CRITICAL",
                },
              ].map((activity, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 border border-white/5 rounded-lg hover:border-white/10 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-xs font-mono text-gray-400">{activity.time}</div>
                    <div className="text-sm">{activity.event}</div>
                    <div className="text-xs text-gray-400">{activity.location}</div>
                  </div>
                  <div
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      activity.severity === "CRITICAL"
                        ? "bg-red-500/20 text-red-400"
                        : activity.severity === "HIGH"
                          ? "bg-orange-500/20 text-orange-400"
                          : activity.severity === "MEDIUM"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-green-500/20 text-green-400"
                    }`}
                  >
                    {activity.severity}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-24 px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-transparent"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif mb-6 animate-float-1">
              <span className="font-light text-transparent" style={{ WebkitTextStroke: "1.5px white" }}>
                REAL-WORLD
              </span>
              <span className="text-white font-normal ml-4">IMPACT</span>
            </h2>
            <p className="text-lg font-light max-w-3xl mx-auto text-gray-300">
              Speed advantage that saves lives through early detection and Arduino alerts
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <div className="animate-float-1">
              <h3 className="text-2xl md:text-3xl font-serif mb-6">
                <span className="text-white font-normal">SPEED ADVANTAGE</span>
              </h3>
              <div className="space-y-6 text-lg font-light text-gray-300">
                <p>
                  The biggest advantage of this system is speed. It often detects disaster-related reports before
                  mainstream news outlets do, allowing emergency responders and everyday users to be alerted earlier.
                </p>
                <p>
                  This can save lives by giving people extra time to prepare or evacuate. Our Arduino integration
                  provides instant physical alerts through lights and buzzers, making warnings accessible to everyone.
                </p>
                <p>
                  With 81% accuracy and real-time Reddit monitoring, SONAR bridges the critical gap between when
                  disasters begin and when official alerts are issued.
                </p>
              </div>
            </div>

            <div className="animate-float-2">
              <div className="p-8 border border-white/10 rounded-lg backdrop-blur-sm bg-gradient-to-br from-green-500/10 to-blue-500/10">
                <h4 className="text-lg font-serif mb-6 text-center">DISASTER DETECTION COVERAGE</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="p-3 bg-black/30 rounded flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    Earthquakes
                  </div>
                  <div className="p-3 bg-black/30 rounded flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    Wildfires
                  </div>
                  <div className="p-3 bg-black/30 rounded flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    Floods
                  </div>
                  <div className="p-3 bg-black/30 rounded flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    Tsunamis
                  </div>
                  <div className="p-3 bg-black/30 rounded flex items-center gap-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    Storms
                  </div>
                  <div className="p-3 bg-black/30 rounded flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    Landslides
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <div className="text-2xl font-bold text-green-400">ALL TYPES</div>
                  <div className="text-xs text-gray-400">Natural Disasters Detected</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-8 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-float-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 rounded-full text-sm font-light mb-8 backdrop-blur-sm">
                ABOUT THE SYSTEM
              </div>

              <h2 className="text-3xl md:text-5xl font-serif mb-8">
                <span className="font-light text-transparent" style={{ WebkitTextStroke: "1.5px white" }}>
                  NEXT-GEN
                </span>
                <br />
                <span className="text-white font-normal">DISASTER DETECTION</span>
              </h2>

              <div className="space-y-6 text-lg font-light text-gray-300">
                <p>
                  Our Social Online Natural Disaster Alert Radar represents the pinnacle of predictive technology,
                  combining real-time social media analysis with advanced natural language processing algorithms.
                </p>
                <p>
                  We monitor Reddit posts, Twitter feeds, and other social platforms to detect early signs of natural
                  disasters through human reports and experiences, providing early warnings that save lives and protect
                  communities worldwide.
                </p>
                <p>
                  With advanced NLP models, custom text analysis systems, and instant mobile notifications, SONAR
                  delivers unparalleled accuracy in social disaster detection and response coordination.
                </p>
              </div>

              <div className="flex gap-4 mt-8">
                <button className="px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 relative group">
                  <span className="relative z-10">LEARN MORE</span>
                  <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
                <button className="px-8 py-3 text-white hover:text-gray-300 transition-colors flex items-center gap-2">
                  VIEW TECHNOLOGY
                  <div className="w-4 h-px bg-white"></div>
                  <div className="w-0 h-0 border-l-2 border-l-white border-t-1 border-t-transparent border-b-1 border-b-transparent"></div>
                </button>
              </div>
            </div>

            <div className="animate-float-2">
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-gray-900 via-black to-gray-800 border border-gray-700 rounded-lg overflow-hidden backdrop-blur-sm">
                  {/* Enhanced Radar Visualization */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="absolute inset-4 border border-green-500/30 rounded-full"></div>
                    <div className="absolute inset-8 border border-green-500/20 rounded-full"></div>
                    <div className="absolute inset-12 border border-green-500/10 rounded-full"></div>
                    <div className="absolute inset-16 border border-green-500/5 rounded-full"></div>

                    {/* Enhanced Sweep Line */}
                    <div className="absolute inset-4 rounded-full overflow-hidden">
                      <div className="absolute top-1/2 left-1/2 w-full h-px bg-gradient-to-r from-transparent via-green-400 to-transparent transform -translate-y-1/2 origin-left animate-radar-sweep"></div>
                    </div>

                    {/* Enhanced Data Points */}
                    <div className="absolute top-1/3 left-1/3 w-3 h-3 bg-red-400 rounded-full animate-pulse shadow-lg shadow-red-400/50"></div>
                    <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-yellow-400 rounded-full animate-pulse shadow-lg shadow-yellow-400/50"></div>
                    <div className="absolute top-2/3 left-2/3 w-2.5 h-2.5 bg-blue-400 rounded-full animate-pulse shadow-lg shadow-blue-400/50"></div>
                    <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse shadow-lg shadow-purple-400/50"></div>

                    <div className="text-center">
                      <div className="text-green-400 text-sm font-mono mb-2 animate-pulse">SCANNING ACTIVE</div>
                      <div className="text-xs text-gray-400">SOCIAL MEDIA MONITORING</div>
                      <div className="text-xs text-gray-500 mt-2">81% ACCURACY • ARDUINO ALERTS</div>
                    </div>
                  </div>
                </div>

                {/* Additional Info Cards */}
                <div className="absolute -bottom-4 -right-4 bg-black border border-white/20 rounded-lg p-4 backdrop-blur-sm">
                  <div className="text-xs text-gray-400 mb-1">CURRENT STATUS</div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="text-sm font-medium">ALL SYSTEMS OPERATIONAL</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes float-star {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-10px) translateX(5px); }
          50% { transform: translateY(-5px) translateX(-3px); }
          75% { transform: translateY(-15px) translateX(8px); }
        }
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(0.5deg); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-0.5deg); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(0.3deg); }
        }
        @keyframes float-4 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(-0.3deg); }
        }
        @keyframes float-5 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-18px) rotate(0.4deg); }
        }
        @keyframes float-6 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-14px) rotate(-0.4deg); }
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(1.2); opacity: 0; }
        }
        @keyframes pulse-ring-delay {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(1.4); opacity: 0; }
        }
        @keyframes pulse-ring-delay-2 {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        @keyframes radar-sweep {
          0% { transform: translateX(-50%) translateY(-50%) rotate(0deg); }
          100% { transform: translateX(-50%) translateY(-50%) rotate(360deg); }
        }
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        @keyframes spin-very-slow {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        @keyframes expand {
          0% { width: 0; }
          100% { width: 8rem; }
        }
        @keyframes expand-line {
          0% { width: 0; }
          100% { width: 2rem; }
        }
        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(3px); }
        }
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float-1 { animation: float-1 4s ease-in-out infinite; }
        .animate-float-2 { animation: float-2 4.5s ease-in-out infinite 0.5s; }
        .animate-float-3 { animation: float-3 3.8s ease-in-out infinite 1s; }
        .animate-float-4 { animation: float-4 4.2s ease-in-out infinite 1.5s; }
        .animate-float-5 { animation: float-5 3.5s ease-in-out infinite 2s; }
        .animate-float-6 { animation: float-6 4.8s ease-in-out infinite 2.5s; }
        .animate-pulse-ring { animation: pulse-ring 3s ease-out infinite; }
        .animate-pulse-ring-delay { animation: pulse-ring-delay 3s ease-out infinite 1s; }
        .animate-pulse-ring-delay-2 { animation: pulse-ring-delay-2 3s ease-out infinite 2s; }
        .animate-radar-sweep { animation: radar-sweep 4s linear infinite; }
        .animate-spin-very-slow { animation: spin-very-slow 20s linear infinite; }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        .animate-expand { animation: expand 2s ease-out; }
        .animate-expand-line { animation: expand-line 1.5s ease-out infinite; }
        .animate-bounce-x { animation: bounce-x 1s ease-in-out infinite; }
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out; }
      `}</style>
    </div>
  )
}
