'use client'
import { useEffect } from 'react'

// India easter egg: leave the tab and it misses you.
// "Cause my mind is occupied by the thought of you."
export default function AwayTitle() {
  useEffect(() => {
    let real = document.title
    const onChange = () => {
      if (document.hidden) { real = document.title; document.title = 'occupied by the thought of you' }
      else document.title = real
    }
    document.addEventListener('visibilitychange', onChange)
    return () => document.removeEventListener('visibilitychange', onChange)
  }, [])
  return null
}
