import React, { useState } from 'react'

export default function App() {
  const [stations, setStations] = useState([])
  return (
    <div style={{ padding: 20 }}>
      <h1>Nightwave Radio</h1>
      <p>Worldwide radio streaming app with search, genres, and favourites.</p>
    </div>
  )
}
