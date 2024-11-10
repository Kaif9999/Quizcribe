'use client'

import { useState, useEffect } from 'react'
import Spline from '@splinetool/react-spline'
import { Button } from "@/components/ui/button"
import { Loader2 } from 'lucide-react'
import { Navbar } from './Navbar'

export function SplineBackgroundComponent() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for demonstration purposes
    const timer = setTimeout(() => setIsLoading(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-white">
      {/* Spline scene as background */}
      <div className="absolute inset-0 z-0">
        <Spline 
          scene="https://prod.spline.design/6CJAtBblZ4vc4sbP/scene.splinecode"
          onLoad={() => setIsLoading(false)}
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 text-center space-y-6 p-4">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          A New Way to Prepare
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto">
          Either you have your coding interviews coming or preparing for competitive exams QuizScribe Got your back.
        </p>
        <Button className="text-white bg-transparent border border-emerald-100 hover:bg-gray-200 hover:text-black rounded-full">
          Get Started
        </Button>
        <Button className="text-white mx-5 hover:bg-gray-200 hover:text-black rounded-full bg-transparent border border-emerald-100">
          Watch Demo 
        </Button>
      </div>

      {/* Loading overlay */}
      {isLoading && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black bg-opacity-80">
          <Loader2 className="w-12 h-12 animate-spin text-white" />
        </div>
      )}
    </div>
  )
}