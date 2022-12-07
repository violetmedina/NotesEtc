import React, { useState, useEffect } from 'react'
import ReactMapGL from 'react-map-gl'

export const App = () => {

  const [viewport, setViewport] = useState({
    latitude: 45.411,
    longitude: -75.9603,
    width: '100vw',
    height: '100vh',
    zoom: 10
  });

  return (
    <div>

      <ReactMapGL {...viewport} mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onViewStateChange={viewport => {
        setViewport(viewport);
      }}
      >
        markers here
      </ReactMapGL>

    </div>
  )
}

export default App;