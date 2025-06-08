"use client"

import { useState, useEffect } from "react"

export default function Component() {
  const [soundEnabled, setSoundEnabled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleClick = () => {
    setSoundEnabled(true)
    console.log("SONAR system activated")
  }

  if (!mounted) return null

  return (
    <div
      className="min-h-screen bg-black text-white flex items-center justify-center p-8 cursor-pointer overflow-hidden"
      onClick={handleClick}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white rounded-full animate-bounce"></div>
      </div>

      <div className="max-w-5xl text-center relative">
        <div className="space-y-4 mb-16">
          <div className="text-5xl md:text-7xl lg:text-8xl font-serif leading-tight tracking-wide">
            {/* Social */}
            <div className="mb-4 animate-float-1">
              <span
                className="font-light text-transparent inline-block hover:scale-105 transition-transform duration-300"
                style={{ WebkitTextStroke: "1.5px white" }}
              >
                <span className="text-white font-normal drop-shadow-lg">S</span>OCIAL
              </span>
            </div>

            {/* Online */}
            <div className="mb-4 animate-float-2">
              <span
                className="font-light text-transparent inline-block hover:scale-105 transition-transform duration-300"
                style={{ WebkitTextStroke: "1.5px white" }}
              >
                <span className="text-white font-normal drop-shadow-lg">O</span>NLINE
              </span>
            </div>

            {/* Natural */}
            <div className="mb-4 animate-float-3">
              <span
                className="font-light text-transparent inline-block hover:scale-105 transition-transform duration-300"
                style={{ WebkitTextStroke: "1.5px white" }}
              >
                <span className="text-white font-normal drop-shadow-lg">N</span>ATURAL
              </span>
            </div>

            {/* Disaster */}
            <div className="mb-4 animate-float-4">
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
            <div className="mb-4 animate-float-5">
              <span
                className="font-light text-transparent inline-block hover:scale-105 transition-transform duration-300"
                style={{ WebkitTextStroke: "1.5px white" }}
              >
                <span className="text-white font-normal drop-shadow-lg">A</span>LERT
              </span>
            </div>

            {/* Radar */}
            <div className="mb-4 animate-float-6">
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

        {!soundEnabled && (
          <div className="flex items-center justify-center gap-4 text-sm md:text-base font-light animate-float-7">
            <span className="animate-fade-in">Click anywhere</span>
            <div className="flex items-center animate-pulse">
              <div className="w-8 h-px bg-white animate-expand-line"></div>
              <div className="w-0 h-0 border-l-4 border-l-white border-t-2 border-t-transparent border-b-2 border-b-transparent ml-1 animate-bounce-x"></div>
            </div>
            <span className="animate-fade-in-delay">to activate the radar</span>
          </div>
        )}

        {soundEnabled && (
          <div className="text-sm md:text-base font-light opacity-80 animate-fade-in">
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
              <span>SONAR system activated - Monitoring natural disasters</span>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
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
        @keyframes float-7 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
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
        @keyframes fade-in-delay {
          0%, 30% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        .animate-float-1 { animation: float-1 4s ease-in-out infinite; }
        .animate-float-2 { animation: float-2 4.5s ease-in-out infinite 0.5s; }
        .animate-float-3 { animation: float-3 3.8s ease-in-out infinite 1s; }
        .animate-float-4 { animation: float-4 4.2s ease-in-out infinite 1.5s; }
        .animate-float-5 { animation: float-5 3.5s ease-in-out infinite 2s; }
        .animate-float-6 { animation: float-6 4.8s ease-in-out infinite 2.5s; }
        .animate-float-7 { animation: float-7 3s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        .animate-expand { animation: expand 2s ease-out; }
        .animate-expand-line { animation: expand-line 1.5s ease-out infinite; }
        .animate-bounce-x { animation: bounce-x 1s ease-in-out infinite; }
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-fade-in-delay { animation: fade-in-delay 2s ease-out; }
      `}</style>
    </div>
  )
}
