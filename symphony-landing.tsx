"use client"

import { useState } from "react"

export default function Component() {
  const [soundEnabled, setSoundEnabled] = useState(false)

  const handleClick = () => {
    setSoundEnabled(true)
    // Here you would typically enable audio context or start playing ambient sounds
    console.log("Sound enabled")
  }

  return (
    <div
      className="min-h-screen bg-black text-white flex items-center justify-center p-8 cursor-pointer"
      onClick={handleClick}
    >
      <div className="max-w-4xl text-center">
        <div className="space-y-2 mb-16">
          <div className="text-4xl md:text-6xl lg:text-7xl font-serif leading-tight">
            <div className="mb-2">
              <span
                className="font-thin text-transparent bg-clip-text bg-white"
                style={{ WebkitTextStroke: "1px white" }}
              >
                A CREATOR OF
              </span>
            </div>
            <div className="mb-2">
              <span className="font-bold text-white">SOUND</span>
              <span className="font-thin text-transparent ml-4" style={{ WebkitTextStroke: "1px white" }}>
                FROM PURE
              </span>
            </div>
            <div className="mb-2">
              <span className="font-thin text-transparent" style={{ WebkitTextStroke: "1px white" }}>
                NOISE TO MELODY,
              </span>
            </div>
            <div className="mb-2">
              <span className="font-thin text-transparent" style={{ WebkitTextStroke: "1px white" }}>
                EVERYDAY LIFE
              </span>
            </div>
            <div>
              <span className="font-thin text-transparent" style={{ WebkitTextStroke: "1px white" }}>
                IS HER
              </span>
              <span className="font-bold text-white ml-4">SYMPHONY</span>
              <span className="font-bold text-white">.</span>
            </div>
          </div>
        </div>

        {!soundEnabled && (
          <div className="flex items-center justify-center gap-4 text-sm md:text-base font-light">
            <span>Click anywhere</span>
            <div className="flex items-center">
              <div className="w-8 h-px bg-white"></div>
              <div className="w-0 h-0 border-l-4 border-l-white border-t-2 border-t-transparent border-b-2 border-b-transparent ml-1"></div>
            </div>
            <span>to enable the sound</span>
          </div>
        )}

        {soundEnabled && (
          <div className="text-sm md:text-base font-light opacity-60">Sound enabled - Experience the symphony</div>
        )}
      </div>
    </div>
  )
}
