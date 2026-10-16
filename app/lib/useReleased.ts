'use client'
import { useSyncExternalStore } from 'react'
import { isReleased } from './release'

// Flips from "coming" to "out now" on release day. Read on the client only, so
// the statically built page never disagrees with the visitor's clock.
// Add ?release=out (or ?release=soon) to any URL to preview either state.
const noopSubscribe = () => () => {}

export function useReleased(isoDate: string) {
  return useSyncExternalStore(
    noopSubscribe,
    () => {
      const override = new URLSearchParams(window.location.search).get('release')
      return override === 'out' ? true : override === 'soon' ? false : isReleased(isoDate)
    },
    () => false,
  )
}
