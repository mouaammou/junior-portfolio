"use client"

import { useEffect, useRef } from "react"

declare global {
  interface Window {
    THREE: any;
    VANTA: any;
  }
}

export default function VantaBackground() {
  const vantaRef = useRef<HTMLDivElement>(null)
  const effectRef = useRef<any>(null)

  useEffect(() => {
    const initVanta = () => {
      if (typeof window !== 'undefined' && window.VANTA && window.THREE && vantaRef.current) {
        effectRef.current = window.VANTA.DOTS({
          el: vantaRef.current,
          THREE: window.THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: true,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x7f7f7f,
          size: 2.5,
          spacing: 15.00,
          showLines: false
          //               mouseControls: true,
          //   touchControls: true,
          //   gyroControls: false,
          //   minHeight: 200.00,
          //   minWidth: 200.00,
          //   scale: 1.00,
          //   scaleMobile: 1.00,
          //   color: 0x545454,
          //   points: 14.00,
          //   maxDistance: 24.00,
          //   spacing: 14.00
        })
      }
    }

    // Wait for scripts to load
    if (window.VANTA && window.THREE) {
      initVanta()
    } else {
      const checkLoaded = setInterval(() => {
        if (window.VANTA && window.THREE) {
          clearInterval(checkLoaded)
          initVanta()
        }
      }, 100)

      return () => clearInterval(checkLoaded)
    }

    return () => {
      if (effectRef.current) {
        effectRef.current.destroy()
        effectRef.current = null
      }
    }
  }, [])

  return <div ref={vantaRef} className="pointer-events-none fixed inset-0 -z-10" />
}