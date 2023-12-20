'use client'

import { useEffect } from 'react'
import 'plyr/dist/plyr.css'
export function VideoPlayer({ url }) {
  useEffect(() => {
    const Plyr = require('plyr')
    const player = new Plyr('#player')
  }, [])

  return <video playsInline controls id="player" src={url}></video>
}
